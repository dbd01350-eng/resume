import os
import time
from collections import defaultdict
from typing import Dict, List

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from pydantic import BaseModel, Field

load_dotenv("key.env")

app = FastAPI(title="Daeun Sim Portfolio AI Chatbot API")

# 1. CORS Configuration (Allowed production & local domains)
default_origins = [
    "https://resume-daeunsim.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
]
env_origins = os.getenv("CORS_ORIGINS")
allowed_origins = [o.strip() for o in env_origins.split(",")] if env_origins else default_origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins if "*" not in allowed_origins else ["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# 2. Simple In-Memory Rate Limiter (Max 15 requests per minute per IP)
request_history: Dict[str, List[float]] = defaultdict(list)
RATE_LIMIT_WINDOW = 60.0  # seconds
MAX_REQUESTS_PER_WINDOW = 15


def check_rate_limit(client_ip: str) -> None:
    now = time.time()
    history = request_history[client_ip]
    # Remove timestamps older than window
    request_history[client_ip] = [t for t in history if now - t < RATE_LIMIT_WINDOW]
    if len(request_history[client_ip]) >= MAX_REQUESTS_PER_WINDOW:
        raise HTTPException(
            status_code=429,
            detail="요청이 너무 많습니다. 잠시 후(1분 뒤) 다시 시도해 주세요.",
        )
    request_history[client_ip].append(now)


class Msg(BaseModel):
    text: str = Field(..., min_length=1, max_length=300, description="User question")


HF_MODEL = os.getenv("HF_MODEL", "Qwen/Qwen2.5-72B-Instruct")
HF_BASE_URL = os.getenv("OPENAI_BASE_URL", "https://router.huggingface.co/v1")

# 3. Comprehensive Portfolio System Prompt
SYSTEM_PROMPT = """너는 웹 프론트엔드 개발자 겸 UI/UX 디자이너 '심다은(Daeun Sim)'의 포트폴리오를 안내하는 공식 AI 어시스턴트야.
방문자(채용 담당자, 협업 제안자 등)의 질문에 심다은 님의 실제 역량과 경험을 바탕으로 친절하고 명확하며 전문성 있게 한국어로 답변해 줘.

[심다은 기본 프로필]
- 슬로건: "예쁘게, 될 때까지" - 디자인하고 코드로 만듭니다. 결국 중요한 건 잘 돌아가는 예쁜 웹사이트니까요.
- 포지션: Web Frontend Developer & UI/UX Designer
- 연락처: 이메일 dbd01350@gmail.com / 전화번호 010-7272-6639
- 핵심 기술 스택:
  * 프론트엔드: React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Python, Git, VS Code
  * 디자인 & 영상: Figma, Photoshop, Illustrator, Premiere Pro, After Effects
  * AI 에이전트 & 도구: Claude (MCP 파이프라인), AGY, GPT, Figma Agent, Flow, Suno
- 차별화 강점:
  * 서울시립대 토목공학과 및 설계회사 출신의 공학적 데이터 기반 사고력
  * 하루필름, 그믐달스튜디오, 자개장롱 등 다수의 핫플 공간 브랜드를 직접 창업/운영하며 검증된 실전 비즈니스 UX 및 브랜딩 감각
  * AI 에이전트(Claude MCP, AGY 등)를 개발 파이프라인에 주도적으로 도입하여 생산성을 극대화하는 실행력

[주요 프로젝트 포트폴리오]
1. IKEA 반응형 웹사이트 UI/UX 개발 (Team Synergos, 5인 팀 프로젝트 / 기여도 35% - AI 파이프라인 주도, 2026.07.21 ~ 08.13)
   - Claude + MCP를 연동하여 Figma 회의보드의 결정 사항이 Notion 간트차트 일정표로 자동 업데이트되는 워크플로우 단독 구축
   - AGY 기반 코드 생성과 수기 리팩토링 병행, 홈 및 주요 화면 반응형 웹 퍼블리싱 및 GitHub Pages 배포
2. IKEA Website 리디자인 (Team Synergos, 5인 팀 프로젝트 / 기여도 35% - 디자인 시스템 주도, 2026.07.21 ~ 08.05)
   - 컬러, 타이포그래피, 모듈형 UI 컴포넌트 디자인 시스템 구축 및 와이어프레임 5종, 하이파이 프로토타입 제작
   - 30장 분량의 체계적인 리디자인 기획서 완성
3. 모바일 청첩장 시리즈 (개인 프로젝트 / 기여도 100%)
   - Ver.1 다이어리 & 스티커 감성 (2026.09.30 ~ 10.07): 아날로그 감성 에셋 디자인, 순수 JS 터치 슬라이더, dvh 단위 크로스브라우징
   - Ver.2 내추럴 포레스트 모던 (2026.10.07 ~ 10.08): Google Apps Script(GAS) 기반 서버리스 실시간 RSVP/방명록, 낙관적 UI 업데이트, 지도 딥링크
   - Ver.3 메이플스토리 루디브리엄 (2026.10.08 ~ 10.10): 레트로 픽셀 도트 맵 연출, Web Audio API 배경음악/효과음 제어, 퀘스트형 RSVP 인터랙션
4. 보건복지부 금연캠페인 홍보영상 (개인 프로젝트 / 기여도 100%, 2026.06.24 ~ 07.14)
   - Google Flow, AGY 등 생성형 AI 영상 툴과 Premiere Pro, After Effects를 융합한 공익 홍보영상 제작
   - 9개 씬 스토리보드 기획, AI 시드 고정 및 프롬프트 엔지니어링으로 일관된 톤앤매너 구현
5. 웹 개발 학습 아카이브 (개인 프로젝트 / 기여도 100%, 2026.05 ~ 2026.08)
   - React 컴포넌트 실습, AI 페어 프로그래밍(Claude, AGY) 학습 기록 및 GitHub Pages 배포

[답변 가이드라인]
- 항상 예의 바르고 단정하며 프로페셔널한 존댓말(~해요, ~합니다)로 답변할 것.
- 답변은 2~4문장 내외로 핵심을 명확하게 짚어줄 것.
- 심다은 님과 관련 없는 질문이나 모르는 내용은 지어내지 말고, "자세한 사항은 이메일(dbd01350@gmail.com)로 편하게 문의해 주시면 정성껏 답변드리겠습니다!"라고 정중히 안내할 것.
"""


def ask_ai(question: str) -> str:
    token = os.getenv("HF_TOKEN")
    if not token:
        return "현재 AI 챗봇 토큰이 설정되지 않아 기본 응답 모드로 전환되었습니다. 이메일(dbd01350@gmail.com)로 연락 주시면 빠르게 답변드리겠습니다!"

    try:
        client = OpenAI(api_key=token, base_url=HF_BASE_URL)
        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": question},
        ]

        try:
            completion = client.chat.completions.create(
                model=HF_MODEL,
                messages=messages,
                max_tokens=400,
                temperature=0.7,
            )
        except Exception:
            # Fallback for models requiring specific thinking parameter suppression
            completion = client.chat.completions.create(
                model=HF_MODEL,
                messages=messages,
                max_tokens=400,
                temperature=0.7,
                extra_body={
                    "chat_template_kwargs": {
                        "enable_thinking": False,
                        "preserve_thinking": False,
                    },
                },
            )
        reply = completion.choices[0].message.content or ""
        return reply.strip()
    except Exception as error:
        print(f"[Chatbot Error] {error}")
        return "AI 응답을 생성하는 도중 일시적인 지연이 발생했습니다. 질문하신 내용에 대해 궁금한 점이 있으시면 포트폴리오의 Contact 메뉴나 이메일(dbd01350@gmail.com)로 언제든 편하게 문의해 주세요!"


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "model": HF_MODEL}


@app.post("/chat")
def chat(msg: Msg, request: Request) -> dict[str, str]:
    client_ip = request.client.host if request.client else "unknown"
    check_rate_limit(client_ip)
    return {"reply": ask_ai(msg.text)}
