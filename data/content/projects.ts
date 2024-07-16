import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Driver Analysis",
    desc: "Developed a comprehensive Driver Behavior Analysis system integrating various computer vision models to assess and enhance road safety.",
    img: `/da.jpeg`,
    link: "https://resq-notify.onrender.com/",
    tags: ["Tensorflow", "YOLO", "Python", "OpenCV", "PyTorch"]
  },
  {
    id: 1,
    title: "Crash Detection",
    desc: "Developing a computer vision system that detects vehicle crashes through dashcams, subsequently alerting the user's emergency contacts via app notifications, email, and WhatsApp.",
    img: `/cd.jpeg`,
    link: "https://resq-notify.onrender.com/",
    tags: [
      "Tensorflow", "YOLO", "Python", "OpenCV", "PyTorch", "MobileNet Model"
    ]
  },
  {
    id: 2,
    title: "Twitter tweets Analysis",
    desc: "Integrated a client-provided NLP model to categorize tweets pertaining to disaster assistance, storing relevant findings in a MongoDB database. The curated data was then linked to a React-based web interface through a REST API developed with the FastAPI framework.",
    img: `/DM.jpeg`,
    link: "https://tweetmydisasters.com/",
    tags: ["React", "Tailwind CSS", "Javascript", "Next.js", "Python", "RestAPI", "FastAPI"]
  },
  {
    id: 3,
    title: "Event-Genie",
    desc: "Developed an app that consolidates all college events into a single calendar view, enabling club leaders to add their events via a React-based web admin, with Firebase powering the database.",
    img: `/evgenie.jpeg`,
    link: "https://play.google.com/store/apps/details?id=com.appdevclub.flutter_complete_guide",
    tags: ["Flutter", "Firebase", "RestAPI"]
  },
  {
    id: 4,
    title: "Memory-Enhanced AI Assistants (CHATBOTS)",
    desc: "Created advanced chatbots that incorporated memory and learning abilities to deliver AI based customer support and natural language processing. These chatbots could remember past conversations, save relevant information, and engage users in more personalized and natural interactions.",
    img: `/static/projects/newnex.jpg`,
    tags: ["TensorFlow", "Python", "NLP"]
  },
  {
    id: 5,
    title: "ArrayGraphs",
    desc: "Client website build to showcase there brand.",
    img: `/ag.jpeg`,
    link: "https://arraygraphs.com/",
    tags: ["React", "Javascript", "Next.js", "Firebase"]
  },
  {
    id: 6,
    title: "Dentist Website",
    desc: "Website build for a dentist showcasing there capabality and adding a unique ML Model through which you can try detecting any problem in your teeth through a photo",
    img: `/sd.jpeg`,
    link: "https://sharmadentalclinicjaipur.live/",
    tags: [
      "React",
      "Javascript",
      'Next.js',
      'Python',
      'MobileNet',
      'TensorFlow'
    ]
  },
  {
    id: 7,
    title: "NMIMS App",
    desc: "An App built for my college , providing various functionality such as navigation around campus, mess menu, gallery, latest events etc",
    img: `/flutter.jpeg`,
    link: "https://github.com/vipul-bhatia/NEW_NMIMS_APP",
    tags: [
      "Flutter",
      "Firebase",
      "RestAPI"
    ]
  },
  {
    id: 8,
    title: "ShoppyAPI",
    desc: "A project that allows users to fetch data from a shopping API and display various products based on different categories, it allows user to add the product to there cart and also provides a login feature using the post method.",
    img: `/API.jpeg`,
    link: "https://github.com/vipul-bhatia/ShoppyAPI",
    tags: ["Flutter", 'Firebase', "RestAPI", "FastAPI"]
  },
  {
    id: 9,
    title: "Protsahan App",
    desc: "This is a mobile app designed to help students stay up-to-date with the latest events and activities happening during the college cultural fest. The app provides a centralized platform for students to easily view all the events happening throughout the day, as well as get information about the core committees and faculty in charge of the fest.",
    img: `/flutter.jpeg`,
    link: "https://github.com/vipul-bhatia/ProtsahanApp",
    tags: ["Flutte", "Firebase"]
  }
];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
