# biscuitLab

Biscuit Lab 是一个暗黑科技风个人作品集和全栈 AI 学习展示站，用来展示前端能力、全栈训练、AI 应用探索、视觉资源和长期学习沉淀。

## Tech Stack

- Frontend: Nuxt 3 / Vue 3 / TypeScript / Tailwind CSS
- Backend: FastAPI placeholder with health check and placeholder API routes
- Data: frontend mock data under `frontend/data/*`

## Current Features

- Fullscreen Loading with neon percentage progress
- Season Hero with Spring / Summer / Autumn / Winter auto-switching scenes
- Hero Carousel with horizontal scroll-snap cards
- Feature Modal for carousel item details
- Profile / Resume section with stats and growth timeline
- Selected Work project cards
- Capabilities cards
- Gallery / Resources cards
- Contact section and footer
- Mock data structure prepared for future API replacement

## Project Structure

- `frontend/components/home/*` - homepage sections and interactions
- `frontend/data/*` - typed mock data for navigation, profile, seasons, features, projects, capabilities, and gallery
- `backend` - FastAPI shell, intentionally kept lightweight for now
- `doc` - planning documents

## Local Development

```bash
pnpm --dir frontend install
pnpm dev:frontend
```

```bash
pnpm --dir frontend typecheck
pnpm --dir frontend build
```

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Roadmap

- 接入真实图片资源
- 接入文章系统
- 接入后端 API
- 接入 AI 总结 / AI 文案功能
- 部署上线

Suggested commit message:

```text
feat: redesign personal site with cinematic portfolio experience
```
