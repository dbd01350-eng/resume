import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from pydantic import BaseModel

load_dotenv("key.env")
app = FastAPI(title="Hugging Face Chat API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in os.getenv("CORS_ORIGINS", "*").split(",")],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Msg(BaseModel):
    text: str


HF_MODEL = os.getenv("HF_MODEL", "Qwen/Qwen2.5-72B-Instruct")
HF_BASE_URL = os.getenv("OPENAI_BASE_URL", "https://router.huggingface.co/v1")


def ask_ai(question: str) -> str:
    token = os.getenv("HF_TOKEN")
    if not token:
        raise HTTPException(status_code=500, detail="HF_TOKEN environment variable is missing")

    try:
        client = OpenAI(api_key=token, base_url=HF_BASE_URL)
        # Try standard completion call
        try:
            completion = client.chat.completions.create(
                model=HF_MODEL,
                messages=[{"role": "user", "content": question}],
                max_tokens=500,
            )
        except Exception:
            # Fallback with extra_body for specific thinking models if required
            completion = client.chat.completions.create(
                model=HF_MODEL,
                messages=[{"role": "user", "content": question}],
                max_tokens=500,
                extra_body={
                    "chat_template_kwargs": {
                        "enable_thinking": False,
                        "preserve_thinking": False,
                    },
                },
            )
    except Exception as error:
        raise HTTPException(status_code=502, detail=f"Hugging Face API error: {error}") from error

    return completion.choices[0].message.content or ""


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "model": HF_MODEL}


@app.post("/chat")
def chat(msg: Msg) -> dict[str, str]:
    return {"reply": ask_ai(msg.text)}