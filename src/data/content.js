// ─────────────────────────────────────────────────────────────
// Edit everything about the site from this one file.
// Items marked  // TODO  are best guesses — swap in your real data.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Rishav Kumar',
  roles: ['Full Stack Software Developer', 'AI-Augmented Engineer', 'Rails + React Builder'],
  tagline:
    'I build production web apps end to end — and now I pair with AI tools to ship faster, cleaner, and smarter.',
  location: 'India', // TODO: set your city
  email: 'rishav74492644@gmail.com', // TODO: confirm public email
  resumeUrl: '#', // TODO: link to your resume PDF
  socials: {
    github: 'https://github.com/rishavkr08', // TODO: confirm
    linkedin: 'https://www.linkedin.com/in/rishavkumar', // TODO: confirm
    twitter: 'https://twitter.com/', // TODO: confirm or remove
    website: 'https://rishavkumar.dev',
  },
};

export const about = {
  heading: 'About',
  body: [
    'I’m a full stack developer who likes owning a feature from the database migration all the way to the pixel. Most of my day-to-day lives in Ruby on Rails APIs and modern React frontends, with PostgreSQL and background jobs holding it together.',
    'Lately I’ve folded AI into my workflow as a real teammate — using Claude, ChatGPT and Antigravity to prototype faster, review my own diffs, write tests, and reason through tricky systems. The craft is still mine; the leverage is new.',
  ],
  stats: [
    { value: '5+', label: 'Years shipping' }, // TODO: adjust
    { value: '30+', label: 'Features delivered' }, // TODO: adjust
    { value: '∞', label: 'Coffee → code' },
  ],
};

export const stacks = [
  {
    title: 'Backend',
    accent: 'violet',
    items: ['Ruby on Rails', 'Ruby', 'PostgreSQL', 'Sidekiq', 'REST APIs', 'RSpec'],
  },
  {
    title: 'Frontend',
    accent: 'cyan',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Platform',
    accent: 'lime',
    items: ['Git', 'Docker', 'Redis', 'CI/CD', 'AWS', 'Linux'],
  },
];

export const aiTools = [
  {
    name: 'Claude',
    blurb: 'My main coding pair — refactors, reviews, and whole-feature scaffolds.',
    tag: 'Anthropic',
  },
  {
    name: 'ChatGPT',
    blurb: 'Fast ideation, docs lookups, and rubber-ducking through edge cases.',
    tag: 'OpenAI',
  },
  {
    name: 'Antigravity',
    blurb: 'Agentic dev environment for multi-step, repo-aware automation.',
    tag: 'Agentic IDE',
  },
];

export const experience = [
  {
    role: 'Full Stack Software Developer', // TODO: confirm exact title
    company: 'Thrillophilia',
    period: 'Present',
    points: [
      'Build and maintain Rails API services powering the partner & booking platform.',
      'Ship CMS / page-composition features end to end, from migrations to serializers.',
      'Drive AI-assisted workflows for faster, well-tested delivery.',
    ],
  },
  {
    role: 'Software Developer', // TODO: replace with real prior role
    company: 'Previous Company',
    period: 'Earlier',
    points: [
      'Add your earlier experience here.',
      'Highlight impact, scale, and the stack you owned.',
    ],
  },
];

export const projects = [
  {
    name: 'Page Composition CMS',
    description:
      'A modular CMS API for assembling marketing pages from reusable sections — master sections, page templates, and slices.',
    tech: ['Rails', 'PostgreSQL', 'Serializers'],
    link: '#', // TODO
  },
  {
    name: 'Portfolio v2',
    description:
      'This site — a motion-rich, AI-era developer portfolio built with React, Tailwind and Framer Motion.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://rishavkumar.dev',
  },
  {
    name: 'Your Project', // TODO
    description:
      'Drop in a flagship project here. One or two sentences on the problem and what you built.',
    tech: ['Tech', 'Stack'],
    link: '#',
  },
];
