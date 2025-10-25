from app.integrations.chat.client import ChatClient

async def get_chat_response(message: str) -> dict:
    chat_client = ChatClient()
    response = await chat_client.get_response(messages=message)
    return response

