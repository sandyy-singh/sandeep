// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import womeki from './assets/company_logo/womeki.jpeg';
import aig from './assets/company_logo/aig.png';
import inocrypt from './assets/company_logo/inocrypt.jpeg';

// Education Section Logo's
import rgpvlogo from './assets/education_logo/rgpvlogo.png';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import crm from './assets/work_logo/crm.png';
import ecom from './assets/work_logo/e-com.png';
import portfolio from './assets/work_logo/portfolio.png';
import chatApp from './assets/work_logo/chatApp.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [

      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: womeki,
    role: "MERN stack Developer",
    company: "Womeki Investors Club pvt. ltd.",
    date: "Oct 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React JS",
      "Express JS",
      "Node JS",
      "MongoDb",
      "Redux-toolkit",

    ],
  },
  {
    id: 1,
    img: aig,
    role: "MERN stack Developer",
    company: "Aigroedge Technologies pvt. ltd.",
    date: "Jan 2023 - Sep 2024",
    desc: "Contributed to innovative projects as a Fullstack Developer, leading both frontend and backend development using technologies such as HTML, CSS,Tailwind CSS, BOOTSTRAP, JavaScript, and ReactJS,ExpressJS,NodeJS and MongoDB. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "React JS",
      "Express JS",
      "Node JS",
      "MongoDb",
      "Redux-toolkit",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
      "SASS",

    ],
  },
  {
    id: 2,
    img: inocrypt,
    role: "React JS Developer",
    company: "Inocrypt Infosoft ",
    date: "Feb 2022 - Dec 2022",
    desc: "Worked as a Frontend Developer , designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS,. Collaborated with the design team to translate Figma into interactive, user-friendly web pages and also worked with backend team",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Tailwind CSS",
      "Figma",
      "SQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: rgpvlogo,
    College: "RGPV University, BhOPAL",
    date: "july 2013 - June 2016",
    grade: "6.9 CGPA",
    desc: "I have completed my Bachelor of Engineering in Electronics and Communication Engineering (ECE) from RGPV University, Bhopal. During my academic journey, I developed a strong foundation in programming, software development",
     degree: "Bachelor of Engineering (ECE)",
  },
  {
    id: 1,
    img: rgpvlogo,
    College: "RGPV University, BhOPAL",
    date: "july 2010 - june 2013",
    grade: "7.94 CGPA",
    desc: "I completed my Diploma from RGPV University, Bhopal. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. ",
     degree: "Diploma in Electronics and Telecommunication Engineering",
  },

];

export const projects = [
  // {
  //   id: 0,
  //   title: "GitHub Profile Detective",
  //   description:
  //     "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
  //   image: githubdetLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
  //   github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
  //   webapp: "https://githubprofiledetective.netlify.app/",
  // },
  // {
  //   id: 1,
  //   title: "CS Prep",
  //   description:
  //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
  //   image: csprepLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/CSPrep",
  //   webapp: "https://csprep.netlify.app/",
  // },

  {
    id: 0,
    title: "Portfolio App",
    description:
      "A personal portfolio web application developed using the React js to showcase projects, skills, and experience with an interactive and responsive design.",
    image: portfolio,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
    {
    id: 1,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 2,
    title: " E-commerse app",
    description:
      "A full-featured e-commerce web application built using the MERN stack with secure user authentication, role-based dashboards, and dynamic product management.",
    image: ecom,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Real Estate CRM App",
    description:
      "A powerful Real Estate CRM application developed using the MERN stack, enabling agents to manage properties, leads, and clients with real-time updates and role-based access.",
    image: crm,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 4,
    title: " Chat App ",
    description:
      "A real-time chat application built using the MERN stack and Socket.io, featuring one-to-one and group messaging with authentication and live user status.",
    image: chatApp,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "HTML", "CSS", "JavaScript", "Bootstrap", "socket.IO"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];  