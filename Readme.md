# 🤖 AI Code Reviewer

> An AI-powered code review platform that analyzes your code, detects bugs, identifies security vulnerabilities, suggests performance improvements, and generates refactored code using Google's Gemini AI.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Express](https://img.shields.io/badge/Express-5-black)
![Gemini](https://img.shields.io/badge/Google-Gemini-orange)

---

## 📖 Overview

AI Code Reviewer is a modern web application that leverages Google's Gemini AI to provide intelligent code reviews.

Instead of simply checking syntax, the application performs a deeper analysis of the submitted code and provides structured feedback, including:

- Overall code quality score
- Code summary
- Strengths
- Bugs & logic issues
- Security vulnerabilities
- Performance improvements
- Best practices
- AI-generated refactored code

The goal is to help developers write cleaner, safer, and more maintainable code.

---

# ✨ Features

- 🤖 AI-powered code analysis
- 🌍 Automatic programming language detection
- 📊 Overall quality score
- 📝 AI-generated summary
- 🛡 Security issue detection
- ⚡ Performance optimization suggestions
- 📚 Best practice recommendations
- 💻 Refactored code generation
- 📋 Copy generated code
- 🎨 Beautiful modern UI
- 🌙 Dark mode interface
- ⚙️ Structured JSON response from Gemini
- 🚀 Fast review experience

---

# 📷 Preview

> Add screenshots here after deployment.

```
Left Panel                     Right Panel

Code Editor          →       AI Review Dashboard

                     ✔ Score
                     ✔ Summary
                     ✔ Strengths
                     ✔ Issues
                     ✔ Performance
                     ✔ Best Practices
                     ✔ Refactored Code
```

---

# 🏗 Architecture

```
                   React Frontend
                          │
                          │
                   REST API (Express)
                          │
                          │
                  Google Gemini AI
                          │
                          │
                  Structured JSON Response
```

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- Monaco Editor
- Framer Motion
- Lucide React
- React Circular Progressbar

---

## Backend

- Node.js
- Express.js
- TypeScript
- Google Gemini API

---

# 📂 Project Structure

```
AI-Code-Reviewer/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── review/
│   │   │   ├── editor/
│   │   │   └── ui/
│   │   │
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.tsx
│
├── server/
│   ├── src/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── types/
│   │   └── index.ts
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/AI-Code-Reviewer.git
```

```
cd AI-Code-Reviewer
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the server folder.

```env
GOOGLE_GEMINI=YOUR_API_KEY
```

---

# ▶ Run Backend

```bash
npm run dev
```

---

# ▶ Run Frontend

```bash
npm run dev
```

---

# 📤 API

## Review Code

### Endpoint

```
POST /ai/get-response
```

### Request

```json
{
  "code": "function sum(a,b){ return a+b; }"
}
```

---

### Response

```json
{
  "score": 92,
  "summary": "The code is simple and readable.",
  "strengths": [],
  "issues": [],
  "performance": [],
  "bestPractices": [],
  "refactoredCode": "..."
}
```

---

# 🎯 Roadmap

Upcoming features:

- [ ] GitHub Repository Review
- [ ] File Upload
- [ ] Folder Review
- [ ] Multi-file Analysis
- [ ] Chat with Code
- [ ] Review History
- [ ] PDF Export
- [ ] Authentication
- [ ] Multiple AI Models
- [ ] Docker Support
- [ ] Theme Customization
- [ ] AI Explanations
- [ ] CI/CD

---

# 🤝 Open Source Contribution Guide

Contributions are always welcome!

If you'd like to improve this project, please follow the guidelines below.

## Step 1

Fork the repository.

---

## Step 2

Clone your fork.

```bash
git clone https://github.com/<your-username>/AI-Code-Reviewer.git
```

---

## Step 3

Create a new branch.

```bash
git checkout -b feature/amazing-feature
```

---

## Step 4

Make your changes.

Please ensure:

- Clean code
- Proper TypeScript types
- Responsive UI
- Meaningful commit messages
- No unnecessary dependencies

---

## Step 5

Run the project locally and verify everything works.

---

## Step 6

Commit changes.

```bash
git commit -m "Add amazing feature"
```

---

## Step 7

Push your branch.

```bash
git push origin feature/amazing-feature
```

---

## Step 8

Open a Pull Request.

Describe:

- What you changed
- Why you changed it
- Screenshots (if UI changes)

---

# 🧹 Coding Standards

Please follow:

- TypeScript Strict Mode
- Functional Components
- Reusable Components
- DRY Principle
- SOLID Principles
- ESLint Rules
- Meaningful Variable Names

---

# 🐛 Bug Reports

If you find a bug, please create an issue with:

- Description
- Steps to reproduce
- Expected behavior
- Screenshots
- Browser information
- Operating system

---

# 💡 Feature Requests

Want to add a feature?

Open an issue describing:

- Problem
- Proposed solution
- Additional context

---

# ⭐ Support

If you found this project useful,

please consider giving it a ⭐ on GitHub.

It helps the project grow and motivates future development.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Prithwi Kumar Singh**

- GitHub: https://github.com/prithwikumarsingh
- LinkedIn: https://linkedin.com/in/prithwikumar

---

## ❤️ Built with

- React
- TypeScript
- Express
- Google Gemini AI
- Tailwind CSS
- Monaco Editor

---

> "Good code solves problems. Great code helps others solve them too."