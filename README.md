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
