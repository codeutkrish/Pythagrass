# Pythagrass

Campus-to-Employment Opportunity Matcher for students, colleges, and recruiters.

Pythagrass is designed to help students discover relevant internships, jobs, and upskilling programs by matching their skills to real opportunities, identifying gaps, and explaining recommendations in plain language.

## Why this project matters

Talent is everywhere. Opportunity isn't.

Students—especially first-generation, rural, and economically disadvantaged learners—often struggle to find relevant opportunities because information is scattered across platforms like LinkedIn, Internshala, college notice boards, and WhatsApp groups. Many students don't receive clear feedback on why they were rejected or what they should learn next.

Pythagrass aims to reduce that gap by making career matching more transparent, inclusive, and skill-based.

## The Problem

- Opportunities are fragmented across multiple platforms.
- First-generation and rural students often lack professional networks and mentors.
- Students rarely understand why they were rejected.
- Popularity-based ranking systems can unintentionally favor already-privileged profiles.
- Skill-matching without context can feel unfair or opaque.

## Our Solution

Pythagrass brings together four core ideas:

1. Match student skills to internships, jobs, and skill programs.
2. Identify gaps between current skills and the target role.
3. Explain every recommendation in plain language.
4. Prevent bias by design.

The system is built around skill-based semantic matching so that related terms such as "ML" and "machine learning" are treated as equivalent.

## Key Features

- Skill-based matching using semantic similarity
- Skill gap analysis for each opportunity
- Learning path suggestions based on missing skills
- Explainable recommendations with a "Why this?" view
- Bias-aware scoring that excludes sensitive attributes from the final match score
- Fairness audits across different student groups
- Mobile-first experience for low-bandwidth environments
- Multilingual support for Hindi and English
- Placement cell insights for colleges and institutions

## How it Works

Student profile → Skill extraction → Skill taxonomy mapping

Opportunity data → Cleaning + embeddings → Matching engine

Matching engine → Gap analysis → Learning path suggestions

Learning path suggestions → Explainable recommendation output

## Tech Stack

This repository currently includes the frontend scaffolding and project configuration for the platform.

- Frontend: React + Vite + TypeScript
- Styling: Tailwind CSS
- UI utilities: React, Lucide icons
- Data layer: Supabase JavaScript client
- Tooling: ESLint, PostCSS, TypeScript

## Project Structure

```text
.
├── README.md
├── FEATURES
├── HOW IT WORKS.md
├── OUR SOLUTION.md
├── TECH STACK.md
├── THE PROBLEM
├── package.json
├── package-lock.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── index.html
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── components.json
├── .gitignore
└── ...
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Run TypeScript checks:

```bash
npm run typecheck
```

Run linting:

```bash
npm run lint
```

## Documentation

The repository includes supporting docs that describe the vision and approach:

- `OUR SOLUTION.md` — high-level product concept
- `FEATURES` — key product capabilities
- `THE PROBLEM` — problem statement and motivation
- `HOW IT WORKS.md` — workflow and architecture overview
- `TECH STACK.md` — framework and technical stack

## Status

This project is in active concept and MVP development work, with a focus on inclusive, explainable, and fair skill-based opportunity matching.

## License

No license file is currently included in the repository.

## Contact

For project updates or collaboration, connect with the repository owner on GitHub: `codeutkrish`

---

Built for Problem Statement PS-22: Campus-to-Employment Opportunity Matcher.
