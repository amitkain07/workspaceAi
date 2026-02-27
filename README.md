# 🧠 AI Workspace Platform — Backend

Production-ready, scalable backend for a multi-tenant AI Workspace Platform built with **NestJS**, **TypeScript**, **Prisma (PostgreSQL)**, and **Mongoose (MongoDB)**.

This platform enables organizations and teams to collaborate with AI, manage workspaces, upload documents, and track AI usage in a secure, enterprise-grade environment.

---

## 🚀 Features

### 🔐 Authentication & Security

* Cookie-based JWT authentication
* Refresh token rotation
* Session management (device tracking)
* Role-Based Access Control (RBAC)
* Organization-level isolation
* HTTP-only cookies
* Input validation & sanitization
* Rate limiting (planned)

---

### 👥 Multi-Tenant Architecture

* Organizations & team management
* Member roles & permissions
* Workspace isolation per organization

---

### 🤖 AI Integration

* AI conversations per workspace
* Multi-provider LLM orchestration
* Usage tracking (tokens, cost)
* Conversation history

---

### 📂 Workspace & Resources

* Workspaces per organization
* File & document management
* AI-powered document interaction (RAG — planned)

---

### 🏗️ Production-Ready Infrastructure

* Modular monolith architecture
* Hybrid database strategy
* Background jobs ready (BullMQ)
* Caching ready (Redis)
* Scalable API design
* Health checks & observability (planned)

---

## 🧱 Tech Stack

### Backend

* NestJS
* TypeScript

### Databases

* PostgreSQL — relational data (Prisma ORM)
* MongoDB — unstructured data (Mongoose)

### Security & Auth

* JWT (cookie-based)
* Passport
* bcrypt

### AI Layer

* OpenAI / DeepSeek / Local models (planned fallback)

---

## 🏛️ Architecture Overview

### Hybrid Database Strategy

**PostgreSQL (Prisma)** — structured relational data:

* Users
* Organizations
* Memberships
* Sessions
* Workspaces
* Usage tracking

**MongoDB (Mongoose)** — flexible AI data:

* Conversations
* Messages
* Documents
* AI logs

---

## 🔄 System Flow

### User Lifecycle

Visitor → Register/Login → Create Organization → Invite Members → Create Workspace → Use AI → Usage Tracked

---

### Authentication Flow

Login → Verify Credentials → Create Session → Issue Access Token (cookie) → Issue Refresh Token (cookie) → Protected API Access → Token Rotation

---

### AI Request Flow

User Prompt → Auth Guard → RBAC Check → Workspace Context → AI Orchestrator → Model Providers → Store Conversation → Response

---

## 📁 Project Structure

```
src/
 ├── modules/
 │    ├── auth/
 │    ├── users/
 │    ├── organizations/
 │    ├── workspaces/
 │    └── ai/
 ├── common/
 │    ├── guards/
 │    ├── decorators/
 │    ├── interceptors/
 │    └── utils/
 ├── config/
 └── database/
```

---

## ⚙️ Environment Variables

Create `.env` in project root:

```
NODE_ENV=development
PORT=4000

DATABASE_URL="postgresql://user:password@localhost:5432/ai_workspace"
MONGO_URI="mongodb://localhost:27017/ai_workspace"

JWT_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

---

## 🛠️ Getting Started

### 1️⃣ Install dependencies

```
npm install
```

---

### 2️⃣ Setup PostgreSQL (Prisma)

```
npx prisma migrate dev
```

---

### 3️⃣ Run development server

```
npm run start:dev
```

Server will start at:

```
http://localhost:4000
```

---

## 🧪 Development Roadmap

### Phase 1 — Core

* Authentication system
* Organizations & RBAC
* Workspaces

### Phase 2 — AI Layer

* Conversations
* Document processing
* AI orchestration

### Phase 3 — Production Hardening

* Billing & subscriptions
* Monitoring
* Rate limiting
* Caching
* Background jobs

---

## 🎯 Project Goals

This project is designed to simulate a real **AI SaaS backend**, demonstrating:

* Production architecture
* Security best practices
* Scalable design
* Multi-tenant systems
* AI integration patterns

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Built as a production-grade backend learning project focused on modern AI-era systems engineering.
