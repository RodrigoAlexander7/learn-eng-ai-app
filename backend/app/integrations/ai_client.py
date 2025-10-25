from app.core.settings import Settings
from langchain.chat_models import init_chat_model

settings = Settings()

class AIClient:
    def __init__(self):
        self.model = init_chat_model(
            "google_genai:gemini-2.5-flash-lite", 
            api_key=settings.GEMINI_API_KEY,
            timeout=15, 
            max_tokens=1000
        )
