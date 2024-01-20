type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name?: string;
  job?: string;
};

export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" }
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
  },
  {
    title: "Flutter",
    icon: "/flutter-icon.svg"
  },
  {
    title: "TensorFlow",
    icon: "/google-tensorflow-icon.svg"
  },
  {
    title: "PyTorch",
    icon: "/pytorch-icon.svg"
  },
  {
    title: "MongoDB",
    icon: "/mongodb-icon.svg"
  },
  {
    title: "Python",
    icon: "/python-svgrepo-com.svg"
  },

];

export const testimonials: Testimonial[] = [
  {
    quote:
      "His solution elevated our entire operation, making processes faster and more efficient. The support is also commendable, always ready to assist."
  },
  {
    quote:
      "Clients appreciate the innovative solutions, intuitive interfaces, and consistent quality I bring to every project."
  },
  {
    quote:
      "With a focus on user satisfaction, my work consistently earns positive feedback and fosters long-term engagement."
  }
];
