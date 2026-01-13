
# 🚀 Improva Searcher

**Improva Searcher** is a GitHub Repository Explorer built with **Next.js (App Router)** and **TypeScript**.

This project was developed as part of the **technical selection process for Improva**, focusing on clean architecture, real-world API handling, and production-ready best practices.

---

## 🏢 Project Context

- **Company:** Improva  
- **Purpose:** Technical selection / evaluation project  
- **Objective:**  
  To demonstrate:
  - API integration skills  
  - Rate-limit handling  
  - Secure authentication using environment variables  
  - Clean and scalable Next.js App Router architecture  

---

## ✨ Features

- 🔍 Search public GitHub repositories by keyword or topic
- 📦 View repository details:
  - Stars, forks, open issues
  - Primary language
  - Default branch
  - Last updated date
- 🧾 View latest commits with author and timestamp
- 🚦 GitHub API rate-limit handling
- 🔐 Secure API authentication using GitHub Personal Access Token
- ⚡ Server-side rendering with Next.js App Router
- ⏳ Route-level loading states using `loading.tsx`
- 🚨 Graceful error handling using `error.tsx`
- 🎨 Modern UI using Tailwind CSS
- 🧠 Strong type safety with TypeScript

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API:** GitHub REST API
- **Rendering:** Server Components
- **Authentication:** GitHub Personal Access Token (API authentication)

---

## 📂 Project Structure

```txt
src/
├── app/
│   ├── page.tsx                         # Home page (Search)
│   └── repo/
│       └── [owner]/
│           └── [name]/
│               ├── page.tsx             # Repository details page
│               ├── loading.tsx          # Route-level loading UI
│               └── error.tsx            # Route-level error boundary
├── Components/
│   ├── RepoList.tsx
│   ├── RepoCard.tsx
│   └── SearchBar.tsx
├── Lib/
│   └── github.ts                        # GitHub API logic & rate-limit handling
├── types/
│   └── github.ts                        # TypeScript interfaces
````

---

## 🚀 How to Run the Project Locally

Follow these steps to clone and run the project on your local machine.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/improva-searcher.git
```

### 2️⃣ Navigate into the project directory

```bash
cd improva-searcher
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Configure environment variables

Create a `.env.local` file in the root directory and add:


GITHUB_TOKEN=ghp_your_github_personal_access_token
```

> This token is required to authenticate GitHub API requests and avoid rate limits.

### 5️⃣ Start the development server

```bash
npm run dev
```

### 6️⃣ Open the application

Open your browser and visit:

```
http://localhost:3000
```

---

## 🔐 GitHub API Authentication

This project uses **GitHub API authentication** via a **Personal Access Token (PAT)**.

* Without authentication: **60 requests/hour**
* With authentication: **5,000 requests/hour**
* Prevents frequent GitHub API rate-limit errors
* Token is used **only on the server** and never exposed to users

> This is API authentication, not GitHub OAuth login.

---

## 🚦 Rate-Limit Handling

All GitHub API calls are centralized inside:

```
src/Lib/github.ts
```

A custom fetch wrapper:

* Attaches authentication headers automatically
* Detects GitHub rate-limit responses
* Reads rate-limit headers
* Throws meaningful errors instead of breaking the UI

Route-level files:

* `loading.tsx` → handles loading states
* `error.tsx` → gracefully displays API and rate-limit errors

---

## ⭐ Acknowledgment

Developed as part of the **technical evaluation process at Improva**.

