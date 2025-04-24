const AppConstants = {
    WELCOME_HEADING_H1: ["Unleashing creativity within the" ,"digital realm",],
    WELCOME_MESSAGE_P1: "Welcome to my realm, where creativity transcends the boundaries of the mundane, and where I,",
    WELCOME_MESSAGE_P2: ", bridge the gap between imagination and reality.",
    AUTHOR_NAME: "Saurabh Aggarwal",
    LEAVE_MESSAGE_TEXT: "Leave a message",
    TYPE_SPEED :13,
    SAURSKA_IMG :"/Saurska.png",

    RED_VAR_COLOR: "bg-red-800",
    BLUE_VAR_COLOR : "bg-blue-800",
    RED : "red",
    BLUE : "blue",

    badges : [
      { image: "/c++.png", title: "CPP" ,description :"C++ was the red pill that introduced me to programming. It taught me memory management, object-oriented design, and algorithmic thinking. Exploring pointers, data structures, and performance optimization shaped the way I approach software development today."},
      { image: "/spring.png", title: "Spring Boot" ,description :"Spring Boot was my entry into professional backend development. As part of my job, I’ve built numerous APIs with it, appreciating its simplicity, speed, and powerful features. From dependency injection to RESTful services, it has made backend development seamless and efficient—an amazing experience so far."},
      { image: "/sql.png", title: "Sql" ,description :"SQL became an essential part of my journey as I worked on backend development. From writing queries to designing efficient database structures, I’ve used it extensively to manage and retrieve data. Optimizing queries and handling relational databases has been a rewarding experience"},
      { image: "/java.png", title: "Java" ,description :"Java and I have an arranged marriage—Spring Boot brought us together. It was never my first love, but over time, I’ve learned to appreciate its reliability, strong typing, and vast ecosystem. Sure, its verbosity can be annoying, but at the end of the day, it gets the job done. And like any long-term relationship, we’ve found our rhythm."},
      { image: "/next.png", title: "Next" ,description :"Next.js and React were my gateway into the frontend world, helping me truly understand and utilize JavaScript. Building interactive UIs, handling state management, and optimizing performance gave me a whole new perspective on web development. It’s been a great learning experience, turning JavaScript from just a tool into something I can truly leverage."},
      { image: "/laravel.png", title: "Laravel" ,description :"I got into Laravel during my college internship and was instantly hooked. The framework’s elegance and structure made full-stack web development incredibly smooth. From routing to ORM, Laravel made everything feel intuitive, and I loved how quickly I could build scalable applications with it"},

    ],

   categories : [
      { title: "Languages", skills: ["C++", "Java", "JavaScript"] },
      { title: "Frameworks", skills: ["Spring Boot", "Hibernate", "Next.js", "Laravel"] },
      { title: "Platforms", skills: ["JIRA", "Git", "Eclipse"] },
      { title: "Databases", skills: ["SQL"] },
      { title: "Servers", skills: ["Apache", "JBOSS"] },
      { title: "Concepts", skills: ["OOPs", "REST API", "Cryptography", "Data Structures"] },
    ],

    blogs:[
      {title: "Are we happy enough?", link : "https://saurska.blogspot.com/2021/06/search-for-happiness.html"},
      {title: "The Lost Childhood", link : "https://saurska.blogspot.com/2021/04/the-lost-childhood.html"},
    ],
    projects : [
      {
        title: "MDM Scheduler",
        description: "A scheduling application for Master Data Management (MDM) workflows, with advanced job scheduling, monitoring, and execution capabilities.",
        tech: ["Java", "Spring Boot", "Shedlock" , "Hibernate", "REST services","SQL"],
        link: ""
      },
      {
        title: "Circuit Breaker Integration",
        description: `Implemented a resilience4j-based circuit breaker to stabilize unreliable third-party API calls, introducing fallback mechanisms, timeouts, and fine-tuned thresholds to prevent failures and enhance system reliability under heavy load.`,
        tech: ["Java", "Spring Boot", "Resilience4j", "REST" , "Hibernate", "SQL"],
        link: "" // Replace with actual link if available
      },
      {
        title: "Sulfur India – Voice Search & Support",
        description: `Built a voice-enabled product search system using web speech recognition, boosting product discovery by 30%. Developed a claim-back support ticket module with automated email communication, significantly improving customer experience and reducing manual effort.`,
        tech: ["JavaScript", "Laravel", "HTML5 Speech API", "SQL"],
        link: "https://your-project-link.com" // Replace with the actual URL
      },
      {
        title: "Enterprise API Integration Suite",
        description: `Designed and integrated 50+ REST APIs with features including logging, encryption-decryption, request-response transformation, authentication, exception handling, and advanced customizations like rate-limiting, orchestration, and circuit breaking.`,
        tech: ["Java", "Spring Boot", "REST", "Resilience4j", "JWT", "AES","RSA", "Rate Limiting"],
        link: "" // Replace with actual link if any
      }
      ,
      {
        title: "BuildWithTouch",
        description: `Developed a client data management system for small businesses with integrated authentication, CRUD operations, and WhatsApp Business API-based auto messaging to boost engagement by 1.5x.`,
        tech: ["Laravel", "PHP", "MySQL", "WhatsApp Business API"],
        link: "" // Replace with the actual project URL
      },
      {
        title: "PII Masking Service",
        description: "Java-based service that detects and masks PII data in complex JSON inputs based on configurable db regex patterns.",
        tech: ["Java", "Spring Boot", "Regex", "Hibernate", "SQL"],
        link: ""
      }
    ],

    RED_PILL_URL : "/DigitalRealm",
    BLUE_PILL_URL : "/MyReflections",

    AnimatedSection : [
      {
        backgroundImage : "/universe-1.jpg",
        title : "The Other Side",
        description : "Here lie my reflections, stories, and the pieces of life that shaped me — not just by what I created, but by what quietly created me.",
      },
      {
        backgroundImage : "/universe-4.jpg",
        title : "Skygazing Euphoria",
        description : "Space makes me feel lost and found. When I gaze at the twinkling stars, I sense a quiet connection to the cosmos. Questions rise — about time travel, black holes, and the multiverse. If there's a planetary parade, you’ll find me wondering, eyes up. Maybe you’ll join me.",
      },

      {
        backgroundImage : "/dark-2.jpg",
        title : "My Little Infinity",
        description : `Words have always been my way of making sense of the world. These pieces are small glimpses into that journey... and it’s only just begun.`,
      }
    ]
  };
  
  export default AppConstants;