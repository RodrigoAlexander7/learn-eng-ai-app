from fastapi import APIRouter
from app.api.chat_routes import chat_router

router = APIRouter()

router.include_router(chat_router)
