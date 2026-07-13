import { awards, capabilities, education, experiences, profile, proofPoints } from '../data/profile';

export function GET() {
  const body = {
    name: profile.name,
    headline: profile.headline,
    summary: profile.shortBio,
    location: profile.location,
    profiles: { github: profile.github, linkedin: profile.linkedin },
    resume: new URL(profile.resume, 'https://kshitijdani.github.io').toString(),
    proofPoints,
    capabilities,
    experience: experiences.map(({ organization, role, period, summary, tags }) => ({
      organization,
      role,
      period,
      summary,
      skills: tags,
    })),
    education,
    awards,
    lastUpdated: '2026-07-13',
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
