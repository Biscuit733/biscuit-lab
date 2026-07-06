# biscuitLab

Dark creative personal content site inspired by Vue Bits-style motion, glass UI, resource galleries, and a practical admin/backend roadmap.

## Project Layout

- `frontend` - Nuxt3 + Vue3 + TypeScript + Tailwind CSS, currently implemented with polished mock data.
- `backend` - FastAPI shell with health check and placeholder API routes.
- `doc` - project planning documents.

## Local Development

```bash
pnpm --dir frontend install
pnpm dev:frontend
```

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```
