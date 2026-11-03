# Pythagrass
UdyogSetu

Talent is everywhere. Opportunity isn't.
UdyogSetu (udyog = enterprise/employment, setu = bridge) is a Campus-to-Employment Opportunity Matcher. It connects students, especially first-generation, rural and economically disadvantaged learners, with suitable internships, jobs and skill-development programs. It matches skills to opportunities, identifies skill gaps, explains every recommendation, and is designed to prevent bias.
Built for Problem Statement PS-22: Campus-to-Employment Opportunity Matcher.

The Problem

Opportunities are scattered across LinkedIn, Internshala, college notice boards and WhatsApp groups.
First-generation and rural students often lack mentors, networks and guidance.
Students rarely learn why they were rejected or what to learn next.
Keyword- and popularity-based ranking tends to favor already-privileged profiles.

Our Solution

One platform that does four things:
Match student skills to internships, jobs and skill programs.
Identify gaps between current skills and the target role.
Explain every recommendation in plain language.
Prevent bias by design.
Skill-based matching: semantic matching using embeddings, so "ML" and "machine learning" are treated the same.

Features

Skill gap analysis: a ranked list of missing skills for each opportunity.
Learning paths: each gap links to free or low-cost courses and programs.
Explainable results: a "Why this?" card for every recommendation.
Blind scoring: sensitive attributes are excluded from the match score.
Fairness audits: disparity metrics across groups such as rural vs. urban and gender.
Mobile-first and multilingual: designed for low bandwidth, with Hindi and English support.
Placement cell view: aggregate skill-gap insights for colleges.

Student profile ──► Skill extraction ──► Skill taxonomy mapping
                                               │
Opportunity data ──► Cleaning + embeddings ────┤
                                               ▼
                                   Matching engine
                          (semantic similarity + eligibility filters)
                                               │
                                               ▼
                        Gap analysis ──► Learning path suggestions
                                               │
                                               ▼
                                  "Why this?" explanation

                                  
