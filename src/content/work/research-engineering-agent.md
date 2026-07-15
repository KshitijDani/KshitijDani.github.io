---
title: "Aleena: Alignment Agent for Engineering"
kicker: Agentic software engineering
description: An LLM-powered collaboration layer that turns project conversations into durable context, decisions, issues, and review support.
period: 2025 — Present
organization: UW eScience Institute · SSEC
role: Graduate Researcher
impact: Meetings to actionable engineering context
tags: [AI agents, GitHub Actions, LiteLLM, FastAPI, React]
featured: true
repo: https://github.com/KshitijDani/Terminology-Agent
order: 2
---

## The problem

Research Software Engineers collaborate with domain researchers across meetings, chat, email, code, and GitHub. Important decisions and terminology are easily fragmented across those surfaces, creating ambiguity and repeated coordination work.

## The system

I am building an LLM-powered productivity agent that ingests project conversations, maintains shared context, surfaces action items, and assists with GitHub workflows.

One public component is the **Terminology Agent**, a reusable GitHub Action that processes meeting transcripts, extracts project terms, detects conflicting definitions, and creates structured issues and draft pull requests for resolution.

## What I designed

- Incremental and full processing modes for transcript ingestion.
- Structured terminology and conflict artifacts that live with the repository.
- A parent-and-child GitHub issue workflow for tracking ambiguity.
- Draft pull requests that turn recommended definitions into reviewable changes.
- GitHub App authentication and configurable assignment rules.

## Why it matters

The work explores how agents can contribute to real engineering processes without becoming opaque automation. The agent asks clarifying questions, creates reviewable artifacts, and keeps humans in control of decisions.
