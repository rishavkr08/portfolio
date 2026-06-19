// ─────────────────────────────────────────────────────────────
// Edit everything about the site from this one file.
// Content sourced from Rishav Kumar's resume (RishavKumarLatest.pdf).
// Items marked  // TODO  are still worth confirming (links / handles).
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Rishav Kumar',
  roles: ['Senior Software Engineer', 'Full Stack Developer', 'Tech Lead', 'AI-Augmented Engineer'],
  tagline:
    'Senior Software Engineer with 7 years building production web apps with React & Ruby on Rails — and now pairing with AI tools to ship faster, cleaner, and smarter.',
  location: 'Jharkhand, India',
  email: 'rishav74492644@gmail.com',
  phone: '+91-700-860-7895',
  resumeUrl: '#', // TODO: link to your hosted resume PDF
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
    'I’m a Senior Software Engineer with 7 years of experience building web products end to end — from data modelling and complex queries to polished React interfaces. I work primarily in Ruby on Rails and React.js, with PostgreSQL, Elasticsearch and background jobs holding things together at scale.',
    'I’ve engineered products from scratch, consulted for Apple via BigBinary, led teams as a tech lead, and currently build SEO and commerce infrastructure at Thrillophilia. Lately I’ve folded AI tools — Claude, ChatGPT and Antigravity — into my daily workflow to prototype, review and reason through systems faster.',
  ],
  stats: [
    { value: '7+', label: 'Years of experience' },
    { value: '15+', label: 'Products shipped' },
    { value: '5', label: 'Companies & clients' },
  ],
};

export const stacks = [
  {
    title: 'Frontend',
    accent: 'cyan',
    items: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML & CSS'],
  },
  {
    title: 'Backend & Data',
    accent: 'violet',
    items: ['Ruby on Rails', 'Ruby', 'PostgreSQL', 'MySQL', 'Sidekiq', 'Resque'],
  },
  {
    title: 'Cloud & Tooling',
    accent: 'lime',
    items: ['AWS', 'GCP', 'Heroku', 'Elasticsearch', 'Redis', 'Git'],
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

// Each company owns its projects so the UI can group them together.
export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Thrillophilia',
    period: 'May 2025 – Present',
    points: [
      'Led SEO infrastructure improvements, driving sustained Top-3 rankings across key travel destinations.',
      'Built a configurable multi-level discount management system with role-based controls and financial reconciliation.',
      'Designed and deployed Elasticsearch infrastructure for lakhs of products with zero-downtime index migrations.',
    ],
    projects: [
      {
        name: 'Destination Page Framework',
        description:
          'Modular, rule-based page-rendering framework that generates scalable destination pages and cut manual config by 90%.',
        tech: ['Ruby on Rails', 'PostgreSQL', 'Elasticsearch'],
        link: '#',
      },
    ],
  },
  {
    role: 'Senior Software Engineer / Tech Lead',
    company: 'BigBinary Solutions',
    note: 'incl. Apple Inc. — Senior Software Consultant',
    period: 'Apr 2021 – May 2025',
    points: [
      'Consulted for Apple on Directory, Planning & Disclosure Central, implementing data modelling, materialised views and complex queries — 30% faster page loads.',
      'Partnered with the data-analytics team to revamp production datasets, cutting errors by 40% and lifting model accuracy by 30%.',
      'Led Rails upgrades (Directory 4.2→5.1, Disclosure 6.1→7.1.3) and mentored junior engineers.',
    ],
    projects: [
      {
        name: 'Disclosure Central (Apple)',
        description:
          'Enterprise disclosure & directory platform — data modelling, materialised views and complex queries that cut page loads by 30%.',
        tech: ['Ruby on Rails', 'Stimulus.js', 'Postgres'],
        link: '#',
      },
      {
        name: 'LexcelPro',
        description:
          'Asynchronous video-interview app letting coaches build question sets and candidates record independently. Cut upload time by 70%.',
        tech: ['React.js', 'Rails', 'Tailwind', 'AWS'],
        link: '#',
      },
    ],
  },
  {
    role: 'Software Engineer → Senior Software Engineer',
    company: 'Mindfire Solutions',
    period: 'Apr 2019 – Apr 2021',
    points: [
      'Led teams as tech lead, planning feature rollouts and identifying use cases.',
      'Created reusable components that reduced code size by 20% and improved performance by 30%.',
    ],
    projects: [
      {
        name: 'The Amplify',
        description:
          'Platform connecting brands and influencers for impactful collaborations, with cross-platform analytics and admin impersonation.',
        tech: ['React.js', 'Rails', 'TypeScript', 'GCP'],
        link: '#',
      },
      {
        name: 'neetoPlanner',
        description:
          'Project-management & planning app with real-time group chat and automations triggered on task/section changes.',
        tech: ['React.js', 'Rails', 'Tailwind', 'Heroku'],
        link: '#',
      },
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'BringMyFood Pvt Ltd',
    period: 'Jan 2018 – Sep 2018',
    points: [
      'Learnt emerging technologies and offered technical direction and creative solutions.',
      'Streamlined order processing, resulting in 30% faster order reception and handling.',
    ],
    projects: [
      {
        name: 'BringMyFood Partner App',
        description:
          'Mobile app equipping restaurant partners with advanced order controls and monitoring — 30% faster order reception.',
        tech: ['React Native', 'JavaScript'],
        link: '#',
      },
    ],
  },
];

export const education = [
  {
    school: 'B.Tech, Computer Science & Engineering',
    detail: 'Graduated with 8.6 CGPA',
    year: '2019',
  },
  {
    school: 'Heritage International School, Daltonganj',
    detail: 'Intermediate (CBSE) — 91.2%',
    year: '2015',
  },
  {
    school: 'M.K.D.A.V. Public School, Daltonganj',
    detail: 'Matriculation (CBSE) — 8.4 CGPA',
    year: '2013',
  },
];

export const achievements = [
  'CISCO IoT Hackathon — 2nd prize at the Bhubaneswar nodal centre & Best Performance Award at National Level.',
  'Brain Wave programming competition — 2nd prize at Techfest 2K17.',
  'Crafted innovative proofs-of-concept at BigBinary, ~80% of which were selected.',
];
