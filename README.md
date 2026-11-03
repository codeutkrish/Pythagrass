# Pythagrass

Pythagrass is a campus-to-employment opportunity matcher built to help students discover relevant internships, jobs, and upskilling programs with more clarity, fairness, and confidence.

It connects a student's profile, skills, and learning gaps to opportunities in a way that is explainable, transparent, and designed to reduce bias in the matching process.

## Why this project matters

Talent is everywhere. Opportunity isn't.

Many students—especially first-generation, rural, and economically disadvantaged learners—struggle to discover suitable opportunities because information is scattered across platforms such as LinkedIn, Internshala, college notice boards, and WhatsApp groups. On top of that, they often do not understand why they were rejected or what skills they need to build next.

Pythagrass aims to make career discovery more equitable by turning opportunity matching into a fair, skill-based system.

## The Problem

- Opportunities are fragmented across different platforms and channels.
- Students often lack mentors, networking support, and guidance.
- Many applicants are rejected without actionable feedback.
- Hiring and recommendation systems can unintentionally prefer already-privileged profiles.
- Keyword-based matching often fails when skills are described differently across roles and domains.

## Our Solution

Pythagrass is designed as a unified platform that helps students and institutions in four ways:

1. Match student skills to internships, jobs, and skill programs.
2. Identify the gap between a student's current capabilities and the target role.
3. Explain every suggestion in plain, understandable language.
4. Reduce bias by design through fair and transparent scoring.

The platform uses semantic matching so that related terms like "ML" and "machine learning" are treated as equivalent, improving relevance and reducing unfair exclusions.

## Key Features

- Skill-based matching using semantic similarity
- Skill gap analysis for every opportunity
- Personalized learning paths and recommended upskilling resources
- Explainable recommendation cards with a "Why this?" perspective
- Fair, bias-aware scoring that excludes sensitive attributes from the final match score
- Fairness audits across student groups and demographics
- Mobile-friendly experience optimized for low-bandwidth use
- Multilingual support for Hindi and English
- Placement cell insights for colleges and institutions

## How it works

The system follows a simple but powerful workflow:

Student profile → Skill extraction → Skill taxonomy mapping

Opportunity data → Cleaning + embeddings → Matching engine

Matching engine → Gap analysis → Learning path suggestions

Learning path suggestions → Explainable recommendation output

## Tech stack

This repository contains the frontend scaffolding and app structure for the platform.

- Frontend: React + Vite + TypeScript
- Styling: Tailwind CSS
- UI components: React + Lucide icons
- Data access: Supabase JavaScript client
- Tooling: ESLint, PostCSS, TypeScript

## Project structure

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

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

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

This repository includes supporting documents that describe the product direction and implementation approach:

- `OUR SOLUTION.md` — high-level solution summary
- `FEATURES` — product capabilities
- `THE PROBLEM` — motivation and pain points
- `HOW IT WORKS.md` — system flow and logic
- `TECH STACK.md` — technology choices

## Status

Pythagrass is currently in active concept and MVP development, with a focus on inclusive, explainable, and fair career matching for students.

## License

No license file is currently included in this repository.

## Contact

For collaboration or project updates, connect with the repository owner on GitHub: `codeutkrish`

---

Built for Problem Statement PS-22: Campus-to-Employment Opportunity Matcher.
