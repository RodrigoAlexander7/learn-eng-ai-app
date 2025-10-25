from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8', extra='ignore')

    APP_SETTING: str = "default_value"
    GEMINI_API_KEY: str = "your_api_key"
    GEMINI_MODEL: str = "your_model"
    GEMINI_MODEL_PRO: str = "your_model_pro"

settings = Settings()