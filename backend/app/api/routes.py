from fastapi import APIRouter

router = APIRouter()


@router.get("/articles")
def list_articles() -> dict:
    return {"data": [], "message": "Article API placeholder"}


@router.get("/images")
def list_images() -> dict:
    return {"data": [], "message": "Image API placeholder"}


@router.get("/works")
def list_works() -> dict:
    return {"data": [], "message": "Work API placeholder"}


@router.post("/auth/login")
def login() -> dict:
    return {"data": {"token": "mock-token"}, "message": "Auth API placeholder"}
