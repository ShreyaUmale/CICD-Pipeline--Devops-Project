# CI/CD Pipeline – DevOps Project

A cloud-based CI/CD pipeline built to automate testing, building, and deployment of a Node.js application using **GitHub Actions**, **Docker**, and **AWS EC2**.

---

##  Overview

This project demonstrates a complete DevOps workflow — from code commit to automated deployment — without any manual intervention. Every push to the `main` branch triggers a pipeline that:

1. Installs dependencies
2. Lints the code
3. Runs automated tests
4. Builds a Docker image
5. Deploys the application to an AWS EC2 instance

---

##  Tech Stack

| Category         | Tools/Technologies      |
|-------------------|--------------------------|
| Backend           | Node.js, Express         |
| Testing           | Jest, Supertest          |
| Linting           | ESLint                   |
| Containerization  | Docker                   |
| CI/CD             | GitHub Actions           |
| Cloud/Deployment  | AWS EC2                  |
