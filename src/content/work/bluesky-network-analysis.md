---
title: Ideological clustering on Bluesky
kicker: Social network analysis
description: A study of engagement across 2,900+ users and 77 feeds to understand ideological clustering, overlap, and filter-bubble behavior.
period: "2026"
organization: University of Washington
role: Researcher & engineer
impact: 2,900+ users across 77 feeds
tags: [Python, Embeddings, Network analysis, LLM classification]
featured: true
repo: https://github.com/KshitijDani/IMT547-SMA
order: 4
---

## Research question

How strongly do users cluster around ideologically aligned custom feeds, and where do communities still overlap?

## Approach

I collected engagement signals across more than 2,900 users and 77 Bluesky feeds. The analysis combined feed metadata, likes, replies, reposts, recent creator content, LLM-assisted political-orientation classification, embeddings, and cosine similarity.

## Engineering work

- Built batch pipelines for feed likes and cross-feed user reactions.
- Collected creator account details and recent public posts.
- Normalized feed and user data into analysis-ready datasets.
- Used embeddings to measure semantic relationships between feeds and communities.
- Identified clustering patterns, thematic overlap, and possible filter bubbles.

## Outcome

The project connected a social-science question to a reproducible data pipeline, making both the research method and its limitations inspectable.
