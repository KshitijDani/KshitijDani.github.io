export function GET() {
  const text = `# Kshitij Dani

> Software engineer and AI systems researcher based in Seattle, Washington.

Kshitij Dani builds secure, scalable backend platforms and AI systems. He spent five years at Microsoft across MileIQ and Viva Insights, where his work included a reporting service used by 500K+ premium users, email experiences reaching 60M users per month, and backend infrastructure for Copilot Dashboard that reduced infrastructure costs by 90%. He is currently a graduate researcher at the University of Washington eScience Institute and Scientific Software Engineering Center, building agentic research-engineering workflows and evaluation systems for sensitive conversational agents.

## Primary pages

- Home: https://kshitijdani.github.io/
- Work: https://kshitijdani.github.io/work/
- Experience: https://kshitijdani.github.io/experience/
- Résumé: https://kshitijdani.github.io/resume/
- Writing: https://kshitijdani.github.io/writing/
- About: https://kshitijdani.github.io/about/
- Machine-readable profile: https://kshitijdani.github.io/profile.json

## Public profiles

- GitHub: https://github.com/KshitijDani
- LinkedIn: https://www.linkedin.com/in/kshitij-r-dani-065939104/

## Areas of expertise

AI agents, LLM evaluation, RAG, backend engineering, distributed systems, cloud infrastructure, authentication, application security, Azure, Kubernetes, Python, C#, .NET, FastAPI, Django, React, and CI/CD.
`;

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
