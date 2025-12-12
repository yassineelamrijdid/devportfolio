const newLocal = "";
export const siteConfig = {
  name: "EL AMRI Yassine",
  title: "DATA Scientist",
  description: "Portfolio website of EL AMRI Yassine",
  accentColor: "#1d4ed8",
  social: {
    email: "yassineelamrijdid@gmail.com",
    linkedin: "https://www.linkedin.com/in/yassine-el-amri-5940b5228/",

  },
  aboutMe:
    "Since childhood, I have always seen words and numbers as the key drivers of human progress. This vision naturally led me to pursue Data Science as both my academic and professional path — a field defined by its diversity, innovation, and global reach. Throughout my journey, I have developed strong expertise in data processing, analysis, and manipulation, allowing me to transform raw information into meaningful insights and solutions. I am currently in my final year of engineering studies and seeking a graduation internship (PFE) that will allow me to apply my skills, gain hands-on experience, and contribute meaningfully to innovative projects.",
  skills: ["Excel",
        "Power BI",
        "Tableau",
        "SQL","python",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Pandas","Apache Spark",
        "Apache Airflow",
        "Apache Kafka","Hadoop",
        "Spark","Django","streamlit", "React.js", "Node.js", "git", "Azur", "Docker"],
  projects: [
    {
      name: "Deep reinforcement learning project",
      description:
        "-Evaluation and improvement of a deep reinforcement learning model for the planning of condition-based maintenance operations in a large-scale industrial system.",
      //link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["Python","PyTorch", "gymnasium", "numpy","..."],
      location: "CentraleSupelec",
    },
    {
      name: "Semantic Search & AI Chatbot for Technical Documents",
      description:
        "Developed an AI-powered technical document retrieval system, featuring a scalable ETL pipeline for large volumes of files, a semantic search engine with intelligent ranking, and an LLM/RAG chatbot with high accuracy. Deployed the complete solution using Docker",
      //link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["ETL", "RAG", "LLMs",'Django',"Docker","..."],
      
    },
    {
      name: "Data Visualization & Decision Support Project",
      description:
        "orrected and upgraded the database provided by INEOS, developed a data visualization tool using Power BI, and leveraged this tool to support the company’s strategic decision-making.",
      //link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Power BI", "streamlit", "Seaborn","..."],
    },
    {
      name: "Risk Management and Portfolio Optimization.",
      description:
        "Implemented strategies to minimize market risks by constructing an Equal Risk Contribution (ERC) portfolio and performing risk decomposition. Analysed performance and risk indicators to evaluate portfolio behavior and assessed the properties of risk-based investment strategies.",
      //link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Python", "performance indicators", "matplotlib","..."],
    },
    {
      name: "Plant Disease Detection Using CNN",
      description:
        "Developed a Convolutional Neural Network (CNN) model to accurately detect and classify plant diseases from images, improving early diagnosis and supporting precision agriculture initiatives.",
      //link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Python", "performance indicators", "matplotlib","..."],
    },
  ],
experience: [
  {
    company: "Diot Siaci - Paris",
    title: "Data Scientist Apprentice",
    dateRange: "Sept. 2023 - Sept. 2024",
    bullets: [
      "Parsing Tool Development – Implemented a pipeline to extract data from PDFs and convert it into structured formats (Excel).",
      "Table Comparison Tool – Developed a semantic system using embeddings to compare and align rows in warranty tables.",
      "Intelligent Claims Analysis – Implemented a QA/RAG system to provide advanced insights and automated analysis of claims.",
      "Web Development Support – Contributed to the development and improvement of a Django web application.",
      "Technologies used – Python, Pandas, Scikit-learn, Transformers, PyTorch, Django, Excel, Git, Azure."
    ],
  },
  {
    company: "MICRODATA - Casablanca",
    title: "Data Scientist & Developer Intern",
    dateRange: "June 2022 - Aug. 2022",
    bullets: [
      "Data Processing and Visualization – Cleaned, prepared, and analyzed textual data, then visualized the insights.",
      "Email Classification – Developed a model to automatically categorize emails using NLP techniques.",
      "Web Application Development – Built a customer management application using Angular and Spring Boot.",
      "Technologies used – Python, Pandas, NLTK, Scikit-learn, Angular, Spring Boot, Git, MySQL."
    ],
  },
],

  education: [
        {
      school: "École Centrale Casablanca - Casablanca, Morocco",
      degree: "3rd Year of a General Engineering Program – Data Science Specialization",
      dateRange: "Septembre 2025 - Septembre 2026",
      achievements: [
      ],
    },
      {
      school: "Paris Dauphine University PSL - Paris, France",
      degree: "Master’s Degree (M2), Apprenticeship – Statistical Engineering and Finance, Mathematics & Applications Track",
      dateRange: "Septembre 2023 - Septembre 2024",
      achievements: [
      ],
    },
            {
      school: "CentraleSupelec - Gif-sur-Yvette, France",
      degree: "Exchange program - ERASMUS",
      dateRange: "Janvier 2023 - juin 2023",
      achievements: [
      ],
    },
        {
      school: "École Centrale Casablanca - Casablanca, Morocco",
      degree: "Years 1–2 of  General Engineering Degree",
      dateRange: "Septembre 2021 - Janvier 2023",
      achievements: [
      ],
    },
    {
      school: "CPGE Lissan eddin ibn lkhatib - Laayoune, Morocco",
      degree: "Preparatory Classes for Grandes Écoles – MP",
      dateRange: " Septembre 2019 - juin 2021",
      achievements: [
      ],
    },
  ],
};
