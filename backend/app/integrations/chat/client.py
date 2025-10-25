from app.integrations.ai_client import AIClient
from app.integrations.chat.structures import ChatResponse
from app.integrations.chat.templates import chat_template
from typing import Dict       

class ChatClient(AIClient):
    async def get_response(self, messages:str) -> Dict:
        instructions = chat_template()
        structured_response = self.model.with_structured_output(ChatResponse) # with_structured_output(THE MODEL STRUCTURE EXPECTED TO RETURN)
        chain = instructions | structured_response
        response = await chain.ainvoke({
            "messages": messages
        })

        if not response:
            return {"error": "No summary could be generated."}
        return {
            "response": response.response,
            "feedback": response.feedback
        }
