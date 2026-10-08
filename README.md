# CI/CD Pipeline – Node.js + Docker + GitHub Actions
[![CI/CD Pipeline](https://github.com/ShreyaUmale/CICD-Pipeline--Devops-Project/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/ShreyaUmale/CICD-Pipeline--Devops-Project/actions/workflows/ci-cd.yml)

A beginner-friendly DevOps project that automatically **lints, tests and builds a Docker image** for a Node.js (Express) app every time code is pushed to GitHub.


---

## What this project does

On every push to the `main` branch, GitHub Actions runs this pipeline:

1. **Install** dependencies (`npm ci`)
2. **Lint** the code with ESLint
3. **Test** the API with Jest + Supertest
4. **Build** a Docker image of the app

If any step fails, the pipeline turns red and the bad code is caught early.

## Tech stack

| Area | Tools |
| --- | --- |
| Backend | Node.js, Express |
| Testing | Jest, Supertest |
| Linting | ESLint |
| Containerization | Docker |
| CI/CD | GitHub Actions |

## API endpoints

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Home page |
| GET | `/health` | Health check, returns `OK` |
| GET | `/api/info` | Project info (JSON) |
| GET | `/api/status` | Server status and uptime (JSON) |
| GET | `/api/greet/:name` | Greets the given name (JSON) |

## Run it locally

```bash
# 1. Clone
git clone https://github.com/ShreyaUmale/CICD-Pipeline--Devops-Project.git
cd CICD-Pipeline--Devops-Project

# 2. Install and start
npm ci
npm start            # open http://localhost:3000

# 3. Lint and test
npm run lint
npm test
```

## Run it with Docker

```bash
docker build -t cicd-demo .
docker run -p 3000:3000 cicd-demo
# open http://localhost:3000
```

## Project structure

```
.
├── .github/workflows/   # GitHub Actions pipeline
├── tests/               # Jest + Supertest tests
├── index.js             # Express app
├── Dockerfile           # Container image definition
├── .dockerignore
├── eslint.config.js     # Lint rules
└── package.json
```

## What I learned

- Writing a GitHub Actions workflow (triggers, jobs, steps)
- Automating lint and tests so broken code never reaches `main`
- Writing API tests with Jest and Supertest
- Containerizing a Node.js app with Docker

## Future improvements

- Push the Docker image to Docker Hub / GitHub Container Registry
- Deploy automatically to a cloud server (e.g. AWS EC2)
- Add test coverage reports

---

Built by **Shreya Umale**
## Author

**Shreya Umale** – [GitHub](https://github.com/ShreyaUmale) · [LinkedIn](https://www.linkedin.com/in/shreyaumale)
