// PLACEHOLDER PRICING — example numbers, not real quotes yet. Edit price,
// features, and description freely; nothing else needs to change. Prices
// are "starting from" figures — final quotes depend on scope.
export const pricingTiers = [
  {
    name: 'Landing Page',
    price: '$75+',
    priceNote: 'starting from',
    description: 'A polished, responsive single-page website designed to present a product, service, campaign, or personal brand.',
    features: [
      '1 custom page',
      'Mobile responsive design',
      'Basic on-page SEO',
      'Contact form',
      '3–5 day delivery', 
      '1 round of revisions'
    ],
    highlighted: false,
    cta: 'Start a project'
  },
  {
    name: 'Business Website',
    price: '$200+',
    priceNote: 'starting from',
    description: 'A professional multi-page website built to establish your business online and turn visitors into customers.',
    features: [
      'Up to 5 pages',
      'Custom React frontend',
      'Mobile responsive design',
      'SEO-friendly structure',
      'Contact form',
      'WhatsApp integration',
      'Google Maps integration',
      '7–10 day delivery',
      '2 revision rounds'
    ],
    highlighted: true,
    cta: 'Most popular — get started'
  },
  {
    name: 'Web Application',
    price: '$500+',
    priceNote: 'starting from',
    description: 'A custom web application built around your business requirements, workflows, and users.',
    features: [
      'Custom React frontend',
      'Node.js + Express backend',
      'MongoDB database',
      'User authentication',
      'REST API integration',
      'Admin dashboard',
      'Responsive interface',
      '2–4 week delivery',
      'Post-launch support'
    ],
    highlighted: false,
    cta: 'Discuss your project'
  },
  {
    name: 'Custom',
    price: 'Let\u2019s talk',
    priceNote: 'scoped to you',
    description: 'Have something more specific in mind? Let\'s discuss your requirements and build a solution around your goals.',
    features: [
      'Fully custom scope',
      'Custom features & integrations',
      'Flexible timeline',
      'Milestone-based pricing',
      'Direct collaboration',
      'Post-launch support'
    ],
    highlighted: false,
    cta: 'Get a custom quote'
  }
];

export const pricingAddOns = [
  { name: 'Bilingual / RTL support (e.g. English/Urdu)', price: '+$100\u2013200' },
  { name: 'Mobile app (React Native)', price: 'Custom quote' },
  { name: 'Ongoing maintenance & support', price: '$15/hr' },
  { name: 'Rush delivery', price: '+25%' }
];

export const pricingFaqs = [
  {
    q: 'How does payment work?',
    a: '50% upfront to begin, 50% on delivery. For larger web app projects, we can split into milestones instead.'
  },
  {
    q: 'What if my project doesn\u2019t fit these packages?',
    a: 'Most real projects don\u2019t fit a package perfectly \u2014 these are starting points. Message me with your scope and I\u2019ll send a custom quote.'
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes \u2014 the number of included rounds depends on the package above. Additional revisions are billed hourly.'
  },
  {
    q: 'What\u2019s your typical turnaround?',
    a: 'Landing pages: a few days. Full web apps: 2\u20134 weeks depending on scope. I\u2019ll confirm a firm timeline after a quick scope call.'
  }
];

export const pricingProcess = [
  { step: '01', title: 'Discovery call', detail: 'A short call or message thread to understand what you need and whether it\u2019s a good fit.' },
  { step: '02', title: 'Proposal & quote', detail: 'A clear scope, timeline, and price \u2014 no surprises once work begins.' },
  { step: '03', title: 'Build', detail: 'Regular check-ins and preview links as the work progresses, not just a reveal at the end.' },
  { step: '04', title: 'Delivery & support', detail: 'Final handoff, plus a window for revisions and optional ongoing support after launch.' }
];
