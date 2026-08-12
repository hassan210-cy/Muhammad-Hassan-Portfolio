// `image` points to a generated placeholder mockup for now — swap the path
// to a real screenshot (e.g. '/assets/projects/namaz-reference.png') once
// you have one; <ProjectCard> falls back to a broken-image-safe placeholder
// automatically if an image is missing or fails to load.
export const projects = [
  {
    title: 'Project card',
    tag: 'Example · Component',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['Vanilla JS', 'CSS', 'RTL layout'],
    image: '/assets/projects/namaz-reference.svg',
    link: 'https://e-website-1.vercel.app/'
  },
  { 
    title: 'Project card',
    tag: 'Example · Component',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['Vanilla JS', 'CSS', 'RTL layout'],
    image: '/assets/projects/shahada-learning.svg',
    link: null
  },
  {
    title: 'Project card',
    tag: 'Example · Component',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['HTML5 Canvas', 'JavaScript'],
    image: '/assets/projects/flappy-bird.svg',
    link: null
  }
];
