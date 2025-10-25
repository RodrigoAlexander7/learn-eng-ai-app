from typing import Optional
from pydantic import BaseModel, Field

class ChatResponse(BaseModel):
    response: str = Field(description="The friendly, conversational response to the user's message, in character as Mika. This part should NOT contain any grammar feedback")
    feedback: str = Field("", description="Constructive feedback on the *user's* grammar and spelling. If no errors are found, this should be an empty string.")
    