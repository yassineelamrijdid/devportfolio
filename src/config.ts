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
      company: "Diot siaci - Paris",
      title: "Data Scientist Apprentice",
      dateRange: "sept 2023 - sept 2024",
      bullets: [
        "OCR Tool Development – Extract data from unstructured sources (PDFs) and convert to structured formats (Excel).",
        "Table Matching Tool – Enable comparison of warranty tables using semantic search with embeddings.",
        "Intelligent Claims Analysis – Implement RAG-based system for advanced claims insights.",
        "Web Development Support – Contributed to Django web application.",
      ],
    },
    
    {
      company: "MICRODATA - Casablanca",
      title: "Data scientist  & Developer",
      dateRange: "juillet 2022 - aout 2022S",
      bullets: [
        "Performed customer review sentiment analysis using NLP techniques.",
        "Processed and cleaned textual data, then analyzed sentiment and visualized insights.",
        "Developed a customer management application using Angular and Spring Boot.",
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
