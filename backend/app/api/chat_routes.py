from app.services.chat_service import get_chat_response
from fastapi import APIRouter

chat_router = APIRouter(prefix="/chat", tags=["chat"])

@chat_router.post("/")
async def chat_endpoint(message: str):
    response = await get_chat_response(message)
    return response