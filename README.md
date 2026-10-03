# CI/CD Pipeline – DevOps Project

A CI/CD pipeline that automatically lints, tests, containerizes and deploys a Node.js (Express) application using **GitHub Actions**, **Docker** and **AWS EC2**.

Every push to `main` runs the full pipeline with no manual steps.

---

## Pipeline Flow

```mermaid
flowchart LR
    A[Push to main] --> B[Install dependencies]
    B --> C[Lint - ESLint]
    C --> D[Test - Jest + Supertest]
    D --> E[Build Docker image]
    E --> F[Push image to Docker Hub]
    F --> G[SSH into AWS EC2]
    G --> H[Pull image and restart container]
```

1. **Install** – `npm install`
2. **Lint** – ESLint checks code style and errors
3. **Test** – Jest + Supertest run the API tests
4. **Build** – a Docker image is built from the `Dockerfile`
5. **Publish** – the image is pushed to Docker Hub
6. **Deploy** – GitHub Actions connects to the EC2 instance over SSH, pulls the new image and restarts the container

The workflow is defined in [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml). The deploy job only runs if the build-and-test job succeeds.

---

## Tech Stack

| Category          | Tools / Technologies |
|-------------------|----------------------|
| Backend           | Node.js, Express     |
| Testing           | Jest, Supertest      |
| Linting           | ESLint               |
| Containerization  | Docker               |
| CI/CD             | GitHub Actions       |
| Cloud / Hosting   | AWS EC2              |

---

## API Endpoints

| Method | Route               | Description                          |
|--------|---------------------|--------------------------------------|
| GET    | `/`                 | Home page                            |
| GET    | `/health`           | Health check, returns `OK`           |
| GET    | `/api/info`         | Project information (JSON)           |
| GET    | `/api/status`       | Server status and uptime (JSON)      |
| GET    | `/api/greet/:name`  | Greets the given name (JSON)         |
| GET    | any other route     | Returns a 404 JSON error             |

---

## Project Structure

```
.
├── .github/workflows/ci-cd.yml   # CI/CD pipeline
├── tests/app.test.js             # API tests
├── index.js                      # Express app
├── Dockerfile                    # Container image
├── eslint.config.js              # Lint rules
└── package.json
```

---

## Run Locally

```bash
git clone https://github.com/ShreyaUmale/CICD-Pipeline--Devops-Project.git
cd CICD-Pipeline--Devops-Project
npm install
node index.js
```

Open http://localhost:3000

Run the checks:

```bash
npm run lint
npm test
```

## Run with Docker

```bash
docker build -t devops-pipeline-project .
docker run -p 3000:3000 devops-pipeline-project
```

---

## Setup for Deployment

Add these secrets in **GitHub → Settings → Secrets and variables → Actions**:

| Secret               | Purpose                                   |
|----------------------|-------------------------------------------|
| `DOCKERHUB_USERNAME` | Docker Hub username                       |
| `DOCKERHUB_TOKEN`    | Docker Hub access token                   |
| `EC2_HOST`           | Public IP / DNS of the EC2 instance       |
| `EC2_USER`           | SSH user (for example `ubuntu`)           |
| `EC2_SSH_KEY`        | Private SSH key used to log in to the EC2 |

The EC2 instance needs Docker installed, and port **3000** must be open in its security group.

---

## Author

**Shreya Umale** – [GitHub](https://github.com/ShreyaUmale) · [LinkedIn](https://www.linkedin.com/in/shreyaumale)