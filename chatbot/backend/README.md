# Hugging Face Chat API


FastAPI backend for `Qwen/Qwen2.5-72B-Instruct` through an OpenAI-compatible endpoint.

## Setup

1. Create a new Hugging Face token and put it in `key.env`:

```env
HF_TOKEN=hf_your_token_here
HF_MODEL=Qwen/Qwen2.5-72B-Instruct
OPENAI_BASE_URL=https://router.huggingface.co/v1
CORS_ORIGINS=http://localhost:5173
```

2. Install dependencies:

```powershell
py -m pip install -r requirements.txt
```

3. Start the API:

```powershell
py -m uvicorn main:app --reload --port 8000
```

## Endpoints

- `GET http://localhost:8000/health`
- `POST http://localhost:8000/chat`

Example request:

```powershell
curl.exe -X POST http://localhost:8000/chat -H "Content-Type: application/json" -d '{"messages":[{"role":"user","content":"안녕하세요"}]}'
```

The default model is supported by Hugging Face Inference Providers. To use `Qwen/Qwen3.8-Flash-Next`, you must provide your own vLLM/SGLang OpenAI-compatible endpoint and change `OPENAI_BASE_URL` and `HF_MODEL` in `key.env` accordingly.

---

# Hugging Face 채팅 API

OpenAI 호환 엔드포인트를 통해 `Qwen/Qwen2.5-72B-Instruct` 모델을 호출하는 FastAPI 백엔드입니다.

## 설정

1. Hugging Face에서 새 토큰을 발급한 뒤 `key.env` 파일에 입력합니다.

```env
HF_TOKEN=hf_your_token_here
HF_MODEL=Qwen/Qwen2.5-72B-Instruct
OPENAI_BASE_URL=https://router.huggingface.co/v1
CORS_ORIGINS=http://localhost:5173
```

2. 의존성을 설치합니다.

```powershell
py -m pip install -r requirements.txt
```

3. API 서버를 실행합니다.

```powershell
py -m uvicorn main:app --reload --port 8000
```

## 엔드포인트

- `GET http://localhost:8000/health`
- `POST http://localhost:8000/chat`

요청 예시:

```powershell
curl.exe -X POST http://localhost:8000/chat -H "Content-Type: application/json" -d '{"messages":[{"role":"user","content":"안녕하세요"}]}'
```

기본 모델은 Hugging Face Inference Provider에서 지원됩니다. `Qwen/Qwen3.8-Flash-Next`를 사용하려면 직접 실행한 vLLM/SGLang 서버처럼 해당 모델을 제공하는 OpenAI 호환 엔드포인트를 사용하고 `key.env`의 `OPENAI_BASE_URL`과 `HF_MODEL`을 변경하세요.
