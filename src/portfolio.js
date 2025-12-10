/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Deepti",
  logo_name: "deepti.a()",
  full_name: "Deepti Agrawal",
  subTitle: "Data Engineer & Analytics Professional 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/11JOQ9e5ID6NlIYJpPV_bRrtsl3YR3tJA/view?usp=drive_link",
  mail: "mailto:deeptireachme@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/deept-agl",
  linkedin: "https://www.linkedin.com/in/deeptiagrawal29/",
  gmail: "deeptireachme@gmail.com",
};

const skills = {
  data: [
    {
      title: "Data Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed and optimized high-volume ETL/ELT pipelines",
        "⚡ Designed and managed robust data warehouse/lake solutions",
        "⚡ Optimized schema design, partitioning, and indexing to support complex queries",
        "⚡ Implemented comprehensive data quality, validation, and monitoring frameworks to ensure data reliability and accuracy",
        "⚡ Automated and scheduled end-to-end workflows",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Azure Databricks",
          fontAwesomeClassname: "simple-icons:databricks",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "logos:snowflake-icon",
          style: {
            color: "#29B5E8"
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Data Analysis",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Conducted deep-dive analysis on claims funnel and patient journey analysis",
        "⚡ Developed and maintained interactive dashboards and reports",
        "⚡ Collaborated cross-functionally with product and business teams to define data requirements, translate business questions into analytical frameworks, and presented data-driven recommendations",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Advanced Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    /*{
      title: "Eindhoven University of Technology",
      subtitle:
        "Erasmus Mundus Joint Master's Degree, Big Data Management and Analytics",
      logo_path: "tue.png",
      alt_name: "SSEC",
      duration: "Sept' 2022 - Sept' 2023",
      descriptions: [
        "⚡ This specialisation track equips students with Advanced Data Science methods and strengthens their background in Process Analytics.",
        "⚡ Courses taken: Longitudinal Data Analytics, Fundamentals of Process Mining, Data Challenge 3, Empirical Methods of Software Engineering, Advanced Process Mining & Seminar Process Analytics",
        "⚡ Worked as a Research Intern at the University and completed the Master's thesis on 'Healthcare Analytics : Uncovering patient patterns and operational similarities in Emergency Room traces to enhance Hospital efficiency' with Prof. Renata Medeiros de Carvalho.",
      ],
      website_link: "https://www.tue.nl/en/",
    },
    {
      title: "Universitat Politècnica de Catalunya",
      subtitle:
        "Erasmus Mundus Joint Master's Degree, Big Data Management and Analytics",
      logo_path: "upc.png",
      alt_name: "SSGC",
      duration: "Feb' 2022 - Jun' 2022",
      descriptions: [
        "⚡ This semester focuses on fundamental concepts of Big Data. How data management can scale to large volumes while potentially also dealing with velocity and variety; fundamental concepts to conduct rigorous data analysis with Machine Learning techniques and basic knowledge to assess the viability of a business idea. Finally, we learn the core concepts of Semantic Data Management applying Knowledge Graphs and Semantic Web technologies.",
        "⚡ Courses taken: Big Data Management, Semantic Data Management, Machine Learning, Viability of Data related Business Projects & Debates on Ethics of Big Data",
      ],
      website_link: "https://www.upc.edu/en",
    },*/
    {
      title: "University of Texas at Austin (Great Learning-Online Program)",
      subtitle:
        "Post Graduate Program in Data Science and Business Analytics",
      logo_path: "mccombs.png",
      alt_name: "SSGC",
      duration: "Nov' 2020 - Dec' 2021",
      descriptions: [
        
        "⚡ Completed a rigorous Post Graduate Program covering Python, Statistics, Data Mining, Machine Learning, Predictive Modeling, Time Series, SQL, and Tableau.",
        "⚡ Delivered multiple end-to-end ML and analytics projects applying techniques learned across forecasting, segmentation, classification, risk modeling, and retail analytics.",
        "⚡ Gained hands-on experience solving real business problems using data-driven methods across domains like finance, marketing, healthcare, and operations.",
        "⚡ Applied industry tools such as Python, SQL, and Tableau extensively, building a strong portfolio of practical and deployable data science solutions.",
      ],
      website_link: "https://www.mccombs.utexas.edu/execed/for-individuals/certificates/great-learning/",
    },
    {
      title: "Guru Gobind Singh Indraprastha University",
      subtitle: "Bachelor of Engineering - Computer Science",
      logo_path: "ggsipu.png",
      alt_name: "SSGC",
      duration: "Aug' 2013 - May' 2017",
      descriptions: [
        "⚡ Completed B.Tech in Computer Science & Engineering with Distinction, building strong foundations in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Java.",
        "⚡ Excelled across all semesters with high performance in advanced CS subjects including Compiler Design, Theory of Computation, Web Engineering, AI, and Information Security.",
        "⚡ Built a thesis project that identified harmful drug interactions by aligning patient histories and prescriptions with an interaction database.",
        "⚡ Designed a system that flagged risky medication combinations and suggested safer alternatives, strengthening skills in programming, database design, and applied research.",
      ],
      website_link: "https://ipu.admissions.nic.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Databricks Data Engineer Associate",
      subtitle: "Databricks",
      logo_path: "databricks.png",
      certificate_link:
        "https://credentials.databricks.com/8fda2ff0-0377-4999-a729-aa00c9e14606?record_view=true",
      alt_name: "Databricks",
      color_code: "#FF3621",
    },
    {
      title: "Snowflake Data Engineer",
      subtitle: "Snowflake",
      logo_path: "snowflake.png",
      certificate_link:
        "https://achieve.snowflake.com/c889f52d-bff8-45a3-9806-01ed87b2bbf3?record_view=true",
      alt_name: "Snowflake DE",
      color_code: "#0056D2",
    },
    {
      title: "Snowflake Data Architect",
      subtitle: "Snowflake",
      logo_path: "snowflake.png",
      certificate_link:
        "https://achieve.snowflake.com/4a878305-339a-4c4f-b7b7-1d0e14685e98?record_view=true",
      alt_name: "Snowflake",
      color_code: "#03EF62",
    },
    /*{
      title: "Process Mining: Data science in Action",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1sqsWgsbwfXTL4t6_FrFj8vaPvjUpoPk7/view",
      alt_name: "",
      color_code: "#2AAFED", //2AAFED
    },
    {
      title: "Google Analytics for Beginners",
      subtitle: "Google",
      logo_path: "google.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#EDE15B",
    },
    {
      title: "Advanced NoSQL for Data Science",
      subtitle: "LinkedIn",
      logo_path: "linkedin.png",
      certificate_link:
        "https://drive.google.com/file/d/1wPmnhN-VcOXhnbzQhJgXOSdM8hE3gZDR/view",
      alt_name: "LinkedIn",
      color_code: "#EA4335",
    },*/
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Recognitions",
  description:
    "Possess robust experience spanning the entire data lifecycle, evolving from early ML projects to leading cloud-based data engineering, pipeline optimization, and lakehouse modernization initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data Engineer Consultant - AI & Data",
          company: "Deloitte ",
          company_url: "https://www.deloitte.com/in/en.html",
          logo_path: "deloitte.png",
          duration: "Oct 2021 - Present",
          location: "Gurugram, India | Hybrid",
          description: `Engineered end-to-end data solutions in the Life Sciences and Health Care domain by converting raw clinical and operational data into structured datasets, dimensional models, KPI definitions and scalable SQL logic for enterprise reporting. Built metadata-driven ADF pipelines to automate daily ingestion and optimized PySpark workloads on Databricks to improve performance and stabilize high-volume healthcare pipelines. Modernized legacy reporting by migrating workloads to Snowflake, improving reliability and reducing operational cost. Co-developed an accelerator that ingests clinical datasets, maps fields intelligently, validates them against a KPI library and generates automated insights, significantly reducing manual effort. Growing from Analyst to Data Engineer, I gained hands-on experience handling schema drifts, inconsistent records, incremental updates and analytical warehouse design while collaborating with cross-functional teams to deliver meaningful data-driven outcomes.`,
          color: "#0071C5",
        },
        {
          title: "Associate Analyst",
          company: "Regus",
          company_url: "https://www.regus.com/en-us",
          logo_path: "regus.png",
          duration: "July 2019 - Oct 2021",
          location: "Gurugram, India | Hybrid",
          description: `Worked in the business centers domain, supporting efforts to improve customer retention and sales performance by building reliable data foundations. Designed and managed ETL processes that integrated customer and sales information from multiple systems, improving data quality and enabling clearer insights for business teams. Contributed to modernizing reporting workflows through early cloud evaluations and collaborated with analysts to refine metrics and strengthen decision-making. This experience gave me a solid understanding of how well-engineered datasets drive analytics and laid the groundwork for my transition into deeper data engineering roles.`,
          /*[
            "Developed a data pipeline using Airflow to automate data ingestion, transformation, and loading processes.",
            "Built a data lake on Azure Data Lake Storage (ADLS Gen2) to centralize and analyze large datasets. Implemented data transformations and ETL/ELT processes using PySpark to improve data quality and consistency.",
            "Implemented advanced data cleaning, transformation, and pre-processing techniques using Python and deploy solutions and integrate them within CI/CD pipelines, ensuring continuous integration and deployment of data solutions.",
            "Proficient in SQL for writing complex queries to extract and manipulate data from various sources including Google Cloud Platform, Amazon servers, and Chargebee and developed complex stored procedures.",
            "Created visually appealing dashboards and interactive reports in PowerBI to communicate key performance indicators and trends effectively.",
            "Applied data modeling principles to optimize data structures for scalability and performance in PowerBI.",
            "Collaborated closely with product teams from inception to implementation, identifying product gaps and proposing data-driven solutions.",
          ],*/
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        /*{
          title: "IT Analyst",
          company: "Crossworld",
          company_url: "https://www.finastra.com/",
          logo_path: "finastra.png",
          duration: "Sep 2019 - Aug 2021",
          location: "Pune, Maharashtra | On-site",
          description: `Successfully implemented machine learning models that enhanced financial forecasting
 accuracy and identified market trends, contributing to informed decision-making processes.
 Designed and implemented efficient data pipelines using Python, streamlining data extraction,
 transformation, and loading (ETL) processes for improved operational efficiency.
 Integrated Python scripts with CI/CD pipelines, collaborating with DevOps teams to automate
 data workflows and ensure continuous integration of data solutions.
 Worked collaboratively with quality testing teams to validate data integrity, perform data
 validation, and ensure compliance with regulatory standards.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },*/
        /*{
          title: "Quality Assurance Engineer",
          company: "Cybage",
          company_url: "https://www.cybage.com/",
          logo_path: "deloitte.png",
          duration: "Jun 2017 - Sep 2019",
          location: "Pune, Maharashtra | On-site",
          description: `Designed and executed comprehensive test plans for enterprise applications using Selenium
 WebDriver.
 Performed manual and automated testing, ensuring thorough coverage of functional and non
functional requirements.
 Collaborated effectively with developers to resolve bugs and achieve timely project deadlines.
 Contributed to the successful launch of a new e-commerce platform, resulting in a 15%
 increase in user conversions.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },*/
      ],
    },
    {
      title: "Recognitions",
      experiences: [
        {
          title: "Snowflake Squad Member 2025",
          company: "Link to Award",
          company_url: "https://developerbadges.snowflake.com/bbe9f91c-a7ac-4d23-bcbc-762d9d017e5f?record_view=true",
          logo_path: "snowflake.png",
          duration: "July 2025",
          location: "Gurugram , India",
          description: `Chosen for the Snowflake Squad for contributions including technical articles, feature insights, data engineering guidance, and active involvement in community events and certifications.`,
          color: "#4285F4",
        },
        {
          title: "Magic AI Accelerator Award",
          company: "Link to Award",
          company_url: "https://drive.google.com/file/d/1nCEBvx0S07Eeso_FbSBS0ALKpuxCQDAl/view?usp=drive_link",
          logo_path: "deloitte.png",
          duration: "Mar 2025",
          location: "Gurugram , India",
          description: ` Recognized for delivering an end-to-end specialty analytics solution that automates the entire Life
Sciences Patient Services lifecycle. Built over an year of sustained, rigorous work, it has since been featured in numerous
proposals, presented to key clients, and received strong appreciation for its innovation and impact.`,
          color: "#FBBD18",
        },
        {
          title: "Data Analysis Impact Award",
          company: "Link to Award",
          company_url: "https://drive.google.com/file/d/1psrYxVLMxtuTh26GiWvjJT1DQrIMBWBL/view?usp=drive_link",
          logo_path: "deloitte.png",
          duration: "Aug 2023",
          location: "Gurugram , India",
          description: `Recognized for independently driving the data analysis effort and establishing a solid foundation that contributed to winning the next phase of the project.`,
          color: "#4285F4",
        },
        {
          title: "Medical Imaging ML Hackathon",
          company: "Link to Award",
          company_url: "https://drive.google.com/file/d/1aY6yPDHaunG2YrU2YmRnFMVSs0wjUV2C/view?usp=drive_link",
          logo_path: "deloitte.png",
          duration: "July 2023",
          location: "Gurugram , India",
          description: `Recognized for an exceptional team submission in a medical imaging hackathon for developing a DICOM-based tumor detection ML system, noted for its depth and presentation quality.`,
          color: "#4285F4",
        },
        {
          title: "Cloud Migration Delivery Award",
          company: "Link to Award",
          company_url: "https://drive.google.com/file/d/1tW45W-tuh4kyJBlQYPQZaOOl6jxte-5H/view?usp=drive_link",
          logo_path: "deloitte.png",
          duration: "Feb 2023",
          location: "Gurugram , India",
          description: `Awarded for driving a critical large-scale cloud migration initiative that modernized a major Life
Sciences client’s data ecosystem. The success of this effort positioned Deloitte as a preferred partner for future integration and
planning work.`,
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Project collection reflects a comprehensive background spanning Data Engineering, Advanced Analytics, and Machine Learning. Projects range from building high-performance ETL/ELT data pipelines (using Azure and AWS) and solving real-world operational issues through Process Mining techniques, to developing data analysis and visualization solutions for strategic product and marketing intelligence. This portfolio demonstrates proficiency across Python, SQL, and core data platforms, showcasing a commitment to translating complex data into actionable technical and business outcomes.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactme_hd.png",
    description:
      "I’d love to connect! Whether you have a question, want to discuss a potential collaboration, or just want to say hi — feel free to reach out through any of the platforms below. I’ll get back to you as soon as possible.",
    resumeLink:
      "https://drive.google.com/file/d/11JOQ9e5ID6NlIYJpPV_bRrtsl3YR3tJA/view?usp=drive_link",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Wine Sales-Time Series Analysis",
      url:
        "https://github.com/deept-agl/Wine_Sales_Time_Series_Forecasting_Project",
      description:
        "Forecasted Rosé and Sparkling wine sales (1980–1995) using decomposition, smoothing, ARIMA/SARIMA, and RMSE analysis to generate 12-month demand predictions.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Matplotlib",
          iconifyClass: "logos:matplotlib-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/deept-agl/Wine_Sales_Time_Series_Forecasting_Project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "Olympics ETL Pipeline – Azure",
      url:
        "https://github.com/deept-agl/Olympics_AzureDE_pipeline",
      description:
        "Designed an Azure-based pipeline to ingest, process, and analyze Olympics data with Data Factory, Databricks, Data Lake Gen2, and Synapse Analytics.",
      languages: [
        {
          name: "Azure Databricks",
          iconifyClass: "simple-icons:databricks",
        },
        {
          name: "Microsoft Azure",
          iconifyClass: "logos:microsoft-azure",
        },
        {
          name: "Unity Catalog",
          iconifyClass: "simple-icons:unity",
        },
        {
          name: "Synapse",
          iconifyClass: "mdi:azure",
        }, 
        /*{
          name: "Apache Spark",
          iconifyClass: "logos:apachespark",
        }, 
          {
          name: "Azure Synapse",
          iconifyClass: "logos:azure-synapse",
        },*/
       
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/deept-agl/Olympics_AzureDE_pipeline",
          iconifyClass: "ri:github-fill",
        },
        /* {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        }, */
      ],
    },
    {
      id: "2",
      name: "Voter Prediction & NLP",
      url:
        "https://github.com/deept-agl/election-vote-prediction-ml-nlp_project",
      description:
        "ML models predict voter party preference while NLP analyzes presidential speeches using preprocessing, frequency analysis, and word clouds, with Gradient Boosting performing best.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Machine Learning",
          iconifyClass: "logos:tensorflow",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "Scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
        },
          {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },

        /*{
          name: "Streamlit",
          iconifyClass: "logos:streamlit",
        },
        {
          name: "Gemini API",
          iconifyClass: "logos:google",
        },
        {
          name: "PyPDF2",
          iconifyClass: "mdi:file-pdf-box",
        },*/
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/deept-agl/election-vote-prediction-ml-nlp_project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "3",
      name: "Amazon Web Scraper - Python",
      url: "https://github.com/deept-agl/Web_scraping_Amazon_data_using_BeautifulSoup_Python",
      description:
        "A Python web scraping project using BeautifulSoup to extract iPad titles, prices, and ratings from Amazon and export them into a structured CSV for analysis.",
      languages: [
         {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/deept-agl/Web_scraping_Amazon_data_using_BeautifulSoup_Python",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "4",
      name: "YouTube Analytics ETL – AWS",
      url: "https://github.com/deept-agl/Youtube-data-ETL-Analysis-using-AWS",
      description:
        "Built data analytics model to explore whether a better (more accurate or more generally applicable) forecasting model for predicting child wastage.",
      languages: [
        {
          name: "Process Mining",
          iconifyClass: "mdi:chart-timeline-variant", // represents workflow/process analytics
        },  
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "AWS",
          iconifyClass: "logos:aws",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/deept-agl/Youtube-data-ETL-Analysis-using-AWS",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "5",
      name: "Insurance Claims Visual Analytics",
      url:
        "https://github.com/deept-agl/insurance-claims-data-visualization",
      description:
        "A Tableau dashboard project analyzing insurance claim patterns across policy types, customer demographics and settlement timelines to uncover trends and operational insights.",
      languages: [
          {
          name: "Python",
          iconifyClass: "logos:python",
        },
        {
          name: "Tableau",
          iconifyClass: "simple-icons:tableau",
        },
       {
          name: "Microsoft Excel",
          iconifyClass: "mdi:microsoft-excel",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/deept-agl/insurance-claims-data-visualization",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "6",
      name: "Marketing & Retail  Analysis",
      url:
        "https://github.com/deept-agl/Marketing_and_Retail_Analytics_Project",
      description:
        "A retail analytics project using RFM segmentation and Market Basket Analysis to identify churn-risk customers and uncover key product combinations for targeted marketing.",
      languages: [
        {
          name: "Process Mining",
          iconifyClass: "mdi:chart-timeline-variant", // represents workflow/process analytics
        },
        {
          name: "Python",
          iconifyClass: "logos:python",
        },
       {
          name: "Shell Scripting",
          iconifyClass: "mdi:console",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/deept-agl/Marketing_and_Retail_Analytics_Project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "7",
      name: "Customer Churn Prediction",
      url: "https://github.com/deept-agl/Customer_Churn_Analysis_Capstone_Project",
      description:
        "End-to-end churn prediction using EDA, feature engineering, and ML modeling to identify drivers of churn and accurately predict at-risk customers.",
      languages: [
        {
          name: "Process Mining",
          iconifyClass: "mdi:chart-timeline-variant", // represents workflow/process analytics
        },
        {
          name: "Python 3.9",
          iconifyClass: "logos:python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "Scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/deept-agl/Customer_Churn_Analysis_Capstone_Project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      name: "Survey Analysis – Statistical Methods",
      url: "https://github.com/deept-agl/statistical-methods-and-decision-making-project",
      description: "Statistical analysis covering wholesale customer spend, student survey probabilities, and shingle moisture tests through ANOVA, contingency tables, variability checks, and t-tests.",
      languages: [
        {
          name: "Python 3.9",
          iconifyClass: "logos:python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Tableau",
          iconifyClass: "simple-icons:tableau",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/deept-agl/statistical-methods-and-decision-making-project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "9",
      name: "Financial Risk Analytics",
      url:
        "https://github.com/deept-agl/Financial_Risk_Analytics_Project",
      description:
        "Predicts company default risk using financial ratios and growth indicators, with preprocessing, EDA, and classification models to identify high-risk firms and key drivers.",
      languages: [
       {
          name: "Machine Learning",
          iconifyClass: "logos:tensorflow",
        },
        {
          name: "PySpark - MLlib",
          iconifyClass: "simple-icons:apachespark",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
         {
          name: "Data Mining",
          iconifyClass: "mdi:database-search",
        },
        {
          name: "Shell",
          iconifyClass: "vscode-icons:file-type-shell",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/deept-agl/Financial_Risk_Analytics_Project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "10",
      name: "ML Regression & Classification",
      url:
        "https://github.com/deept-agl/predictive-modelling-linear-logistic-lda-project",
      description:
        "ML case studies predicting zirconia prices and holiday package opt-ins using Linear Regression, Logistic Regression, and LDA, with supporting EDA, preprocessing, and evaluation.",
      languages: [
        {
          name: "Machine Learning",
          iconifyClass: "logos:tensorflow",
        },
        {
          name: "Python 3.9",
          iconifyClass: "logos:python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/deept-agl/predictive-modelling-linear-logistic-lda-project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "11",
      name: "Data Clustering & Claim Prediction",
      url: "https://github.com/deept-agl/data-mining-clustering-and-classification",
      description:
        "Customer segmentation using clustering and insurance claim prediction with CART, Random Forest, and ANN, backed by EDA, preprocessing, and model evaluation.",
      languages: [
        {
          name: "Machine Learning",
          iconifyClass: "logos:tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Data Mining",
          iconifyClass: "mdi:database-search",
        },
        {
          name: "Scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
        },
        {
          name: "NumPy",
          iconifyClass: "logos:numpy",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/deept-agl/data-mining-clustering-and-classification",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "12",
      name: "Advanced Statistics — ANOVA & PCA",
      url: "https://github.com/deept-agl/anova-and-pca-advanced-statistics_project",
      description:
        "Analyzed STIB-MIVB public transit data to model vehicle speed and delay, forecast arrival times, and infer modes of transport from GPS tracking data.",
      languages: [
        {
          name: "Data Mining",
          iconifyClass: "mdi:database-search",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Matplotlib",
          iconifyClass: "logos:matplotlib-icon",
        },
        {
          name: "Tableau",
          iconifyClass: "simple-icons:tableau",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/deept-agl/anova-and-pca-advanced-statistics_project",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
   {
      id: "13",
      name: "MedCare Drug Interaction",
      url: "https://github.com/deept-agl/medcare-drug_interaction",
      description:
        "A healthcare system that centralizes patient records, detects harmful drug interactions, and helps doctors make safer, faster prescription decisions through intelligent data analysis.",
      languages: [
        {
          name: "Python ",
          iconifyClass: "logos:python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/deept-agl/medcare-drug_interaction",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    /*{
      id: "14",
      name: "Realtime Database with Firebase",
      url: "https://github.com/tejaswinidhupad/Realtime-Database-with-Firebase",
      description:
        "Comparative study of real time databases with Firebase and PostgreSQL.",
      languages: [
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos:jupyter",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos:postgresql",
        },
      ],
      links: [
        {
          name: "Github",
          url:
            "https://github.com/tejaswinidhupad/Realtime-Database-with-Firebase",
          iconifyClass: "ri:github-fill",
        },
      ],
    },*/
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
