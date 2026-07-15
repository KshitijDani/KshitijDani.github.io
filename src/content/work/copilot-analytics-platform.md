---
title: Microsoft Copilot Dashboard
kicker: Enterprise AI analytics
description: Backend foundations for an enterprise dashboard that helps leaders understand Copilot adoption, deployment, and organizational impact.
period: 2023 — 2025
organization: Microsoft · Viva Insights
role: Software Engineer II
impact: 90% lower infrastructure cost
tags: [C#, .NET, Azure, Distributed systems, Security]
featured: true
order: 1
---

## The problem

Enterprise leaders needed a reliable way to understand how Microsoft Copilot was being deployed and adopted across their organizations. The experience had to bring together data from multiple services while meeting Microsoft's expectations for scale, security, privacy, and operational reliability.

## My contribution

I built backend foundations for the Copilot Dashboard and developed analytics experiences surfaced in the Microsoft 365 Admin Center. The platform gave organizational leaders a clearer view of adoption and deployment progression.

I also helped reshape supporting infrastructure: modularizing email and data-integration code, modernizing authentication workflows, and automating certificate lifecycle management.

## Engineering decisions

- Designed backend services and integrations with explicit service boundaries.
- Reduced duplicated infrastructure and simplified the platform's operating model.
- Treated access-token migration and certificate renewal as core reliability work rather than afterthoughts.
- Built reusable components so engineers could ship new cross-service experiences with less code.

## Outcome

The new platform reduced infrastructure cost by **90%** while supporting enterprise analytics for Copilot. The surrounding reliability and security work lowered manual operational overhead, improved developer velocity, and reduced outage risk.

> This case study intentionally describes public, résumé-level outcomes and omits confidential implementation details.
