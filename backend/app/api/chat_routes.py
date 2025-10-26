from app.services.chat_service import get_chat_response
from fastapi import APIRouter
from app.domain.models import ChatRequest

chat_router = APIRouter(prefix="/chat", tags=["chat"])

@chat_router.post("/")
async def chat_endpoint(req: ChatRequest):
    response = await get_chat_response(req.message)
    return response