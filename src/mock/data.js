import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Srishti Gupta', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Srishti Gupta - Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Srishti Gupta',
  subtitle: "I'm a Frontend Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'srishti gupta.png',
  paragraphOne:
    "I'm an experienced Software Developer with a demonstrated history of working in the computer software industry. Lately, I've been working as a Subject-Matter Expert for Frontend Technologies in the Education & Technology domain.",
  paragraphTwo:
    "I'm a strong engineering professional with a masters degree in Computer Applications from National Institute of Technology Tiruchirappalli.",
  paragraphThree:
    'My core skills are Frontend Development, React.js, Redux, Next.js, TypeScript, JavaScript, SASS, CSS, HTML.',
  resume: 'https://drive.google.com/file/d/1E_Tw0hb1ULx2_hwUzdumGCgaFGuqi16Y/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'course-catalog-project.jpg',
    title: 'Course Catalog',
    info: [
      {
        id: nanoid(),
        heading: '',
        text: 'Course Catalog is a web application lets a user browse different courses online, view the details of each course, select a course and enrol in it. The application has an admin dashboard that allows an admin to view, add, edit and delete courses. The type of user is determined by the login credentials.',
      },
      {
        id: nanoid(),
        heading: 'Salient Features',
        text: 'Responsive, Common Error Handling Mechanism via Error Boundary, Toast Notifications, Client-side Form Validation, Client- Side Data Persistence, Private Routes, Modular Code.',
      },
      {
        id: nanoid(),
        heading: 'Technologies Used',
        text: 'React.js, Material UI, JavaScript, HTML, CSS',
      },
    ],
    url: '',
    repo: 'https://github.com/upgrad-edu/course-catalog-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hisaab-kitaab-project.jpg',
    title: 'Hisaab Kitaab',
    info: [
      {
        id: nanoid(),
        heading: '',
        text: 'Hisaab Kitaab is a responsive web application that makes it easy for a user to manage personal and business expenses at a single place. The application has support for adding different types of accounts. Using these accounts, a user can record a transaction as done in a ledger.',
      },
      {
        id: nanoid(),
        heading: 'Salient Features',
        text: 'Modular Code, Custom UI Components, Responsive, Client-Side Data Persistence, Private Routes',
      },
      {
        id: nanoid(),
        heading: 'Technologies Used',
        text: 'React.js, TypeScript, SASS, Google Firebase Cloud Firestore, Google Firebase Cloud Functions',
      },
    ],
    url: 'https://hisaabkitaab-xcoders.netlify.app/',
    repo: 'https://github.com/srishti/hisaab-kitaab-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'admin-dashboard-project.png',
    title: 'Admin Dashboard',
    info: [
      {
        id: nanoid(),
        heading: '',
        text: 'Admin Dashboard is an application that displays an admin view containing a data table. An admin can view the name, email and role of users and perform operations such as view all users, edit a user, delete single user, select multiple users and delete all selected users at a time. All the user data is displayed page-wise where each page displays a maximum of 10 users. The admin has options to, if possible, jump to the first / last / previous / next page.',
      },
      {
        id: nanoid(),
        heading: 'Salient Features',
        text: 'Responsive, Pagination, Multi-Select Option, Common Error Handling Mechanism via Error Boundary, Custom TableView, In-place Record Editing',
      },
      {
        id: nanoid(),
        heading: 'Technologies Used',
        text: 'React.js, JavaScript, HTML, CSS',
      },
    ],
    url: 'https://srishti-geektrust-admin-ui.netlify.app/',
    repo: 'https://github.com/srishti/admin-ui', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "I'm excited to get in touch with you.",
  btn: '',
  email: 'mail@srishtigupta.in',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/srishti--gupta/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/srishti',
    },
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/7452548/srishti',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@srishti.gupta',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/srishtigupta',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/srishti__gupta',
    },
  ],
};
