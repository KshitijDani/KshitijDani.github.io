export const profile = {
  name: 'Kshitij Dani',
  givenName: 'Kshitij',
  headline: 'Software engineer building secure, scalable AI systems.',
  shortBio:
    'I build backend platforms, AI agents, and the infrastructure that makes them reliable in the real world.',
  location: 'Seattle, Washington',
  email: 'ksdani@uw.edu',
  github: 'https://github.com/KshitijDani',
  linkedin: 'https://www.linkedin.com/in/kshitij-r-dani-065939104/',
  resume: '/kshitij-dani-resume.pdf',
};

export const proofPoints = [
  { value: '60M', label: 'users reached monthly' },
  { value: '90%', label: 'infrastructure cost reduction' },
  { value: '500K+', label: 'premium users served' },
  { value: '5+ yrs', label: 'shipping production systems' },
];

export const capabilities = [
  {
    title: 'AI systems & agents',
    description:
      'LLM agents, RAG, evaluation systems, embeddings, synthetic personas, and reliable workflow integration.',
    skills: ['Python', 'FastAPI', 'Pydantic', 'LiteLLM', 'LangGraph', 'RAG'],
  },
  {
    title: 'Backend & distributed systems',
    description:
      'High-scale services, service boundaries, data integrations, observability, and operational reliability.',
    skills: ['C#', '.NET', 'Django', 'SQL', 'REST APIs', 'Distributed systems'],
  },
  {
    title: 'Cloud, security & delivery',
    description:
      'Cloud-native deployments, CI/CD, authentication, access tokens, certificates, and secure system design.',
    skills: ['Azure', 'Kubernetes', 'CI/CD', 'Cosmos DB', 'Azure SQL', 'Security'],
  },
];

export const experiences = [
  {
    organization: 'University of Washington eScience Institute · SSEC',
    role: 'Graduate Researcher — AI Systems',
    period: '2025 — Present',
    location: 'Seattle, WA',
    summary:
      'Building LLM-powered systems for research engineering collaboration and evaluation infrastructure for sensitive conversational agents.',
    highlights: [
      'Designed an agent that ingests meetings, chats, and email to track decisions, surface action items, and preserve shared project context.',
      'Automated engineering workflows through GitHub issues, discussions, and pull-request review assistance.',
      'Built modular evaluation pipelines with Pydantic schemas, LiteLLM, synthetic personas, conversation simulation, moderation, and LLM-based judges.',
      'Established benchmarks for frontier-model safety, response quality, and alignment in mental-health conversations.',
    ],
    tags: ['AI agents', 'LLM evaluation', 'FastAPI', 'React', 'GitHub workflows'],
  },
  {
    organization: 'Microsoft · Viva Insights',
    role: 'Software Engineer II',
    period: '2023 — 2025',
    location: 'Bangalore, India',
    summary:
      'Built enterprise analytics platforms and secure backend infrastructure for Copilot and Viva Insights.',
    highlights: [
      'Built the backend platform powering Copilot Dashboard for enterprise leaders while reducing infrastructure cost by 90%.',
      'Developed Microsoft 365 Admin Center analytics experiences for monitoring Copilot adoption and deployment across organizations.',
      'Refactored email infrastructure into modular cross-service integrations, improving developer productivity and reducing implementation overhead.',
      'Modernized authentication workflows and automated certificate renewal to reduce operational burden and outage risk.',
    ],
    tags: ['C#', '.NET', 'Azure', 'Distributed systems', 'Security'],
  },
  {
    organization: 'Microsoft · Viva Insights',
    role: 'Software Engineer',
    period: '2021 — 2023',
    location: 'Bangalore, India',
    summary:
      'Led high-scale email experiences and backend services for hybrid-work products.',
    highlights: [
      'Led development of premium email experiences reaching 60 million users each month.',
      'Migrated access tokens to secure, compliant authentication standards and contributed to cross-service security initiatives.',
      'Built backend services for Microsoft Teams experiences designed to improve engagement in hybrid work.',
    ],
    tags: ['C#', 'Microsoft 365', 'Authentication', 'Backend services'],
  },
  {
    organization: 'Microsoft · MileIQ',
    role: 'Software Engineer',
    period: '2020 — 2021',
    location: 'Bangalore, India',
    summary:
      'Owned a production reporting service and its cloud delivery infrastructure.',
    highlights: [
      'Owned a Django reporting microservice used by more than 500,000 premium users.',
      'Managed Azure Kubernetes deployments, CI/CD pipelines, Azure SQL, and New Relic monitoring.',
      'Improved the reliability and deployment efficiency of backend microservices.',
    ],
    tags: ['Python', 'Django', 'Azure Kubernetes', 'CI/CD', 'New Relic'],
  },
  {
    organization: 'Avaamo AI',
    role: 'Software Engineer Intern',
    period: 'Jan — Jun 2020',
    location: 'Bangalore, India',
    summary:
      'Built reusable conversational-agent workflows and enterprise integrations.',
    highlights: [
      'Created importable chatbot flows for banking and enterprise-support scenarios.',
      'Developed integrations with Zendesk, Google Workspace, Salesforce, and Google Chat.',
      'Delivered services with JavaScript, Express, and AWS Lambda.',
    ],
    tags: ['JavaScript', 'Node.js', 'AWS Lambda', 'Conversational AI'],
  },
  {
    organization: 'Microsoft · MyAnalytics',
    role: 'Software Engineer Intern',
    period: 'May — Aug 2019',
    location: 'Hyderabad, India',
    summary:
      'Prototyped a meeting-trends experience inside Microsoft Outlook.',
    highlights: [
      'Built interactive analytics to help users understand and improve meeting habits.',
      'Implemented the Outlook experience with TypeScript, React, Highcharts, and Flux.',
    ],
    tags: ['TypeScript', 'React', 'Highcharts', 'Data visualization'],
  },
];

export const education = [
  {
    school: 'University of Washington',
    degree: 'M.S. Information Management',
    period: '2025 — 2027',
    detail: 'Graduate study focused on AI systems, information architecture, security, and cloud computing.',
  },
  {
    school: 'BITS Pilani, Goa',
    degree: 'B.E. Computer Science + M.Sc. Mathematics',
    period: '2015 — 2020',
    detail: 'GPA 8.93/10. Teaching assistant in microprocessors, optimization, and operations research.',
  },
];

export const awards = [
  {
    title: 'People Choice Award',
    organization: 'Microsoft',
    year: '2023',
    detail: 'Recognized for making a difference through technical contribution, team culture, and values.',
  },
  {
    title: 'Viva Insights AI Ideathon Winner',
    organization: 'Microsoft',
    year: '2023',
    detail: 'Won for an analyst copilot designed to improve insight generation and reduce hallucinations.',
  },
  {
    title: 'Microsoft Global Hackathon Recognition',
    organization: 'Microsoft',
    year: '2021',
    detail: 'Team project selected as the most innovative entry within Viva Insights.',
  },
];
