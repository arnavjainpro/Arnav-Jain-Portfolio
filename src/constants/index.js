import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    Java,
    swiftui,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    StuRe,
    Headstarter,
    apple,
    WebDev,
    mentors,
    Inventory,
    STEM,
    personal,
    TBD,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "Work",
      title: "Work",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "Contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "iOS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React  Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "swiftui",
      icon: swiftui,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    }, 
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Student Researcher",
      company_name: "Texas A&M University",
      icon: StuRe,
      iconBg: "#E6DEDD",
      date: "January 2024 - Present",
      points: [
        "Investigated advanced data analysis techniques for predictive modeling, applying various statistical tools and computational frameworks to interpret complex datasets.",
        "Conducted in-depth research on machine learning optimization, utilizing state-of-the-art algorithms to enhance computational efficiency and accuracy.",
        "Explored innovative solutions in natural language processing, leveraging neural networks to improve language understanding and generation.",
        "Examined cutting-edge developments in computer vision, using convolutional neural networks to process and analyze visual information from high-resolution imagery.",
      ],
    },
    {
      title: "External Support Director",
      company_name: "Aggies & Mentors",
      icon: mentors,
      iconBg: "#ffffff",
      date: "September 2023 - Present",
      points: [
        "Strengthened mentor relations, enhanced risk management, and spearheaded recruitment to refine the mentorship process.",
        "Expanded professional networks, forged strategic alliances, and facilitated team growth, fostering a unified and energetic workplace.",
        "Launched training schemes, created evaluation metrics, and oversaw personnel growth, cultivating a skilled and flexible team.",
        "Advanced marketing efforts, assessed market dynamics, and led advertising drives, boosting brand recognition and reach",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Texas A&M University",
      icon: WebDev,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Crafting and sustaining web applications leveraging React.js and complementary technologies.",
        "Uniting with multidisciplinary teams, encompassing designers, product leaders, and developers, to produce superior-quality deliverables.",
        "Executing adaptive designs to guarantee a consistent user experience across various web browsers.",
        "Streamlining user interfaces and optimizing application performance to ensure an engaging and efficient end-user experience.",
      ],
    },
    {
      title: "Mobile App developer",
      company_name: "Texas A&M University",
      icon: apple,
      iconBg: "#000000",
      date: "June 2023 - Present",
      points: [
        "Building critial apps for buisniesses by utilizing the React Native framework as well as SwiftUI.",
        "Applying several API's to enhance the user experience and provide a seamless experience.",
        "Implementing UI/UX design using CSS and JavaScript to improve efficiency and aethetics.",
        "Incorporating iOS features to design and develop apps that are compatible with the latest iOS versions including the Apple Vision Pro.",
      ],
    },
    {
      title: "Fellow",
      company_name: "Headstarter",
      icon: Headstarter,
      iconBg: "#b5bbf4",
      date: "June 2022 - August 2022",
      points: [
        "Acquired proficiency in diverse programming languages and frameworks, including JavaScript and Node.js, advancing my technical expertise across the full stack development spectrum.",
        "Engaged in hands-on projects employing Agile methodologies, enhancing my collaborative skills and agility in software project management.",
        "Collaborated on solving real-world business challenges through the development of practical software solutions,",
        "Analyzed and implemented best practices in UI/UX design, leveraging CSS and front-end frameworks to improve user experience and interface design skills.",
      ],
    },  
  ];
  
  const testimonials = [
    {
      testimonial:
        "Arnav is the best",
      name: "Mickey Mouse",
      designation: "CEO",
      company: "Disney",
      image: "https://i.etsystatic.com/27481689/r/il/c68d19/3081628078/il_570xN.3081628078_123g.jpg",
    },
    {
      testimonial:
        "Arnav is my favorite developer!",
      name: "Donald Duck",
      designation: "COO",
      company: "Disney",
      image: "https://i.pinimg.com/originals/3d/ad/a7/3dada7a669c803bf5c731f6371285754.jpg",
    },
    {
      testimonial:
        "He's so funny!",
      name: "Goofy",
      designation: "CTO",
      company: "Disney",
      image: "https://i.etsystatic.com/18587196/r/il/e81445/1644563284/il_fullxfull.1644563284_6x4t.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Inventory Insight",
      description:
        "iOS application that allows users to track their inventory and get insights on their spending habits.",
      tags: [
        {
          name: "SwiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "Xcode",
          color: "green-text-gradient",
        },
        {
          name: "Tesseract",
          color: "pink-text-gradient",
        },
      ],
      image: Inventory,
      source_code_link: "https://github.com/arnavjainpro/InventoryInsight/blob/main/README.md",
    },
    {
      name: "STEMVERSE",
      description:
        "Web application targeted towards the younger audience to get started with a career in STEM and learn more about each career option in a fun and interactive experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "C++",
          color: "pink-text-gradient",
        },
      ],
      image: STEM,
      source_code_link: "https://github.com/arnavjainpro/stemverse/blob/main/README.md",
    },
    {
      name: "Arnav Jain Portfolio",
      description:
        "Web application giving an insightful look into my skill set as well as depicting my work experience and personal projects.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: personal,
      source_code_link: "https://github.com/arnavjainpro/stemverse/blob/main/README.md",
    },
    // {
    //   name: "Its the Mickey Mouse Clubhouse! Come inside its fun inside! Its the Mickey Mouse Clubhouse",
    //   description:
    //     "Something cool!!",
    //   tags: [
    //     {
    //       name: "Mickey Mouse",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Donald Duck",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Goofy",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: TBD,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };