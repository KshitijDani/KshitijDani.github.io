---
title: SecROI
kicker: AI-assisted application security
description: A security analysis workflow that scans public repositories, identifies attack vectors, and produces severity-ranked remediation guidance.
period: 2025 — 2026
organization: University of Washington
role: Engineer
impact: Repository to prioritized security report
tags: [Python, FastAPI, LangGraph, React, LLMs]
featured: true
repo: https://github.com/KshitijDani/SecROI
order: 3
---

## The idea

Security reviews often produce long lists of findings without enough help prioritizing what to fix first. SecROI explores how an agent can turn repository analysis into a focused, actionable remediation plan.

## How it works

The workflow accepts a public GitHub repository, extracts relevant code, identifies potential vulnerabilities and attack vectors, and generates structured findings. A web interface summarizes severity, occurrence counts, remediation priorities, and file-level evidence.

## My contribution

- Built the repository-ingestion and analysis pipeline.
- Designed structured outputs for vulnerabilities, severity, and remediation.
- Exposed the workflow through FastAPI and a React interface.
- Added interactive reporting for security posture and remediation priority.
- Evolved an initial LangGraph prototype into a more complete repository-scanning workflow.

## Current direction

SecROI is a research and learning project, not a replacement for deterministic security tooling. Its value is in helping developers orient themselves, triage findings, and reason about remediation faster.
