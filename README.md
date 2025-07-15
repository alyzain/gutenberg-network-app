# 📚 Gutenberg Network Analyzer

Explore the depth of classic literature through interactive character analysis and visual storytelling!

---

## 🚀 Overview

The Gutenberg Network Analyzer is an interactive single-page application built with Next.js and advanced LLM-powered text analysis. It helps users discover character interactions, sentiments, and significant quotes from free e-books provided by Project Gutenberg.

---

## 🎯 Features

- **Dynamic Book Analysis**: Simply input a Project Gutenberg Book ID to fetch and analyze text.
- **AI-powered Character Extraction**: Utilizes advanced Large Language Models (LLMs) to accurately identify characters and interactions.
- **Interactive Character Graph**: Visualize character relationships clearly and intuitively using intelligent layout algorithms.
- **Quote Sentiment Analysis**: Discover emotional insights through significant character quotes identified by sentiment.

---

## 🛠 Tech Stack

- **Next.js** (App Router, API Routes)
- **React + TypeScript**
- **Tailwind CSS + shadcn/ui**
- **React Flow** (Interactive Graphs)
- **Dagre.js** (Graph Layouts)
- **Groq** (LLM Integration)
- **Project Gutenberg API**
- **Vercel** (Deployment)

---

## 🚀 Getting Started

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/alyzain/gutenberg-network-app.git
   ```
2. Create `.env.local` in the project root with your Groq API key:
   ```env
   GROQ_API_KEY = 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
   ```
3. Run the development server:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## 📖 Usage

1. Enter a Project Gutenberg Book ID (e.g., `27761` for Hamlet).
2. Click **Analyze** and wait briefly.
3. Explore interactive character relationships and key quotes!

Made with ❤️ by Aly Zain