from pydantic import BaseModel
from typing import List, Optional

class ChatResponse(BaseModel):
    response: str
    feedback: Optional[str] = None

class ChatInput(BaseModel):
    message: str 