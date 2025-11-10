const logotext = "Harry Trinh";
const meta = {
    title: "Harry Trinh",
    description: "I'm Harry Trinh, a Full stack Data Scientist and ML Engineer with over 5 years of experience.",
};

const introdata = {
    title: "Harry Trinh",
    animated: {
        first: "Full Stack Data Scientist",
        second: "Machine Learning Engineer",
        third: "Computer Vision Specialist",
    },
    description: "Hi! I am Harry, a Full Stack Data Scientist and Machine Learning Engineer with over 5 years of experience. I am also a member of IEEE who received a Master of Engineering degree in Seoul, South Korea. My research interests focus mainly on computer vision, big data, cloud computing, computer networks, and network security.",
    description_two: "Currently, I am working as a fullstack Data Scientist at eSmart Systems based in Oslo, Norway. Prior to my current position at eSmart, I worked as a senior ML engineer at Arbeon, Seoul, South Korea.",
    your_img_url: "",
};

const dataabout = {
    title: "Research & Work Focus",
    aboutme: "My expertise spans across computer vision, deep learning, big data analytics, and cloud computing. I have extensive experience with AWS services, Apache Spark, machine learning frameworks, and building production-ready ML systems. I'm passionate about applying AI/ML to solve real-world problems and building scalable data science solutions.",
};

const worktimeline = [
    {
        jobtitle: "eSmart Systems",
        where: "Full Stack Data Scientist",
        date: "2021 - Present",
    },
    {
        jobtitle: "Arbeon",
        where: "Senior ML Engineer",
        date: "2020 - 2021",
    },
    {
        jobtitle: "Soongsil University (SSU)",
        where: "Master of Engineering",
        date: "2018 - 2021",
    },
    {
        jobtitle: "Telecommunications University (TCU)",
        where: "Bachelor's in Computer Science",
        date: "2014 - 2018",
    },
];

const skills = [
    {
        name: "Python",
        value: 95,
    },
    {
        name: "Machine Learning",
        value: 90,
    },
    {
        name: "Apache Spark",
        value: 85,
    },
    {
        name: "AWS Services",
        value: 85,
    },
    {
        name: "Computer Vision",
        value: 90,
    },
    {
        name: "Deep Learning",
        value: 90,
    },
];

const services = [
    {
        title: "eSmart Systems - Full Stack Data Scientist",
        period: "2021 - Present",
        description: "Working on computer vision and ML solutions for utility grid inspection and monitoring. Building production ML systems with AWS infrastructure.",
    },
    {
        title: "Arbeon - Senior ML Engineer",
        period: "2020 - 2021",
        description: "Led computer vision projects including logo detection & retrieval using deep metric learning, multi-view object retrieval, and unsupervised image retrieval systems.",
    },
];

const awards = [
    {
        title: "Published in IEEE Access (Q1 - SCI, IF=5.16)",
        period: "2021",
    },
    {
        title: "Master's Degree with Excellent GPA (4.13/4.5)",
        period: "2021",
    },
    {
        title: "Multiple IEEE Conference Publications",
        period: "2019-2021",
    },
];

const workexperience = [
    {
        title: "[eSmart Systems] Full Stack Data Scientist",
        period: "2021 - Present",
        description: "Building production ML systems for utility grid inspection using computer vision. Working with AWS infrastructure, deploying ML models at scale, and developing end-to-end data science solutions.",
    },
    {
        title: "[Arbeon] Senior ML Engineer",
        period: "2020 - 2021",
        description: "Led computer vision research and development projects including logo detection & retrieval using deep metric learning, multi-view object retrieval using self-supervised learning, and unsupervised image retrieval systems.",
    },
];

const researchexperience = [
    {
        title: "Soongsil University - Network Security & Big Data Research",
        period: "2018 - 2021",
        description: "Conducted research on SDN-based cloud security, focusing on EDoS attack detection using deep learning. Published multiple papers in IEEE journals and conferences. Developed big data frameworks for DDoS detection in large-scale SDN networks.",
    },
];

// Publications data - extracted from current website
const dataportfolio = [
    {
        img: "redos",
        title: "R-EDoS: Robust Economic Denial of Sustainability Detection in an SDN-based Cloud through Stochastic Recurrent Neural Network",
        authors: "Trinh Dinh Phuc, Minho Park",
        conference: "IEEE Access - The Multidisciplinary Open Access Journal [Q1 - SCI, IF=5.16]",
        doi: "https://ieeexplore.ieee.org/document/9360795",
        project: "/project/researchProject/",
    },
    {
        img: "bdf",
        title: "BDF-SDN: A Big Data Framework for DDoS Attack Detection in Large-Scale SDN-Based Cloud",
        authors: "Trinh Dinh Phuc, Minho Park",
        conference: "The 2021 IEEE Conference on Dependable and Secure Computing - Japan, Jan 2021",
        doi: "https://ieeexplore.ieee.org/abstract/document/9346269",
        project: "/project/researchProject/",
    },
    {
        img: "edos_gan",
        title: "Economic Denial of Sustainability (EDoS) Detection using GANs in SDN-based Cloud",
        authors: "Trinh Dinh Phuc, Minho Park",
        conference: "2021 IEEE Eighth International Conference on Communications and Electronics - Phu Quoc, Vietnam, Jan 2021",
        doi: "https://ieeexplore.ieee.org/document/9352082",
        project: "/project/researchProject/",
    },
    {
        img: "ecsd",
        title: "ECSD: Enhanced Compromised Switch Detection in an SDN-Based Cloud Through Multivariate Time-Series Analysis",
        authors: "Trinh Dinh Phuc, Minho Park",
        conference: "IEEE Access - The Multidisciplinary Open Access Journal [Q1 - SCIE, IF=5.16]",
        doi: "https://ieeexplore.ieee.org/abstract/document/9122482",
        project: "/project/researchProject/",
    },
    {
        img: "dynamic_edos",
        title: "Dynamic Economic-Denial-of-Sustainability (EDoS) Detection in SDN-based Cloud",
        authors: "Trinh Dinh Phuc, Minho Park",
        conference: "The Fifth International Conference on Fog and Mobile Edge Computing (FMEC 2020), 01 July 2020 - Paris, France",
        doi: "https://ieeexplore.ieee.org/abstract/document/9144972",
        project: "/project/researchProject/",
    },
    {
        img: "syn_flooding",
        title: "An Effective Defense Against SYN Flooding Attack in SDN",
        authors: "Kim D., Trinh Dinh Phuc, Noh Sinchul, Minho Park",
        conference: "The 10th International Conference on ICT Convergence, Ramada Plaza Hotel, Jeju Island, Korea, Sep 2019",
        doi: "https://ieeexplore.ieee.org/document/8939937",
        project: "/project/researchProject/",
    },
    {
        img: "abnormal",
        title: "Abnormal SDN switches detection based on chaotic analysis of network traffic",
        authors: "Trinh Dinh Phuc, TaeHee Lee, Thang Nguyen Canh, Sa Pham Dang, Noh Sinchul, Minho Park",
        conference: "2019 25th Asia-Pacific Conference on Communications (APCC), Ho Chi Minh - Vietnam, Sep 2019",
        doi: "https://ieeexplore.ieee.org/abstract/document/9026485",
        project: "/project/researchProject/",
    },
];

// Projects data with timeline support
const projectportfolio = [
    {
        title: "Unsupervised Image Retrieval",
        description: "Computer Vision project implementing unsupervised learning techniques for image retrieval at Arbeon",
        date: "2021",
        category: "Computer Vision",
        link: "/project/unsupervised_image_retrieval/",
    },
    {
        title: "Multi-view Object Retrieval Using Self-supervised Learning",
        description: "Computer Vision project using self-supervised learning for multi-view object retrieval at Arbeon",
        date: "2021",
        category: "Self-supervised Learning",
        link: "/project/multi-view-object_retrieval/",
    },
    {
        title: "Logo Detection & Retrieval Using Deep Metric Learning",
        description: "Computer Vision project implementing deep metric learning for logo detection and retrieval at Arbeon",
        date: "2020-2021",
        category: "Deep Metric Learning",
        link: "/project/logo-detection-retrieval-using-metric-learning/",
    },
    {
        title: "Masters Research Projects",
        description: "Research projects during my Masters focusing on SDN security, EDoS detection, and big data frameworks [2019-2020]",
        date: "2019-2020",
        category: "Research",
        link: "/project/researchProject/",
    },
    {
        title: "Global Covid19 Analysis",
        description: "Exploring how governments' actions affect the spread of Covid19 - Work published at Nature [2020]",
        date: "2020",
        category: "Data Science",
        link: "/project/GlobalCovid19/",
    },
    {
        title: "Airbnb Price Prediction",
        description: "Global Airbnb Price Prediction using Spark on Scala [2019]",
        date: "2019",
        category: "Big Data",
        github: "https://github.com/TrinhDinhPhuc/AirbnbPredictionWithSpark",
    },
    {
        title: "SHAP - Explainable AI",
        description: "SHAP implementation for model interpretability - Publication work at Nature",
        date: "2020",
        category: "Explainable AI",
        link: "/project/SHAP/",
    },
    {
        title: "ICE & PDP",
        description: "Individual Conditional Expectation & Partial Dependence Plot - Publication work at Nature",
        date: "2020",
        category: "Explainable AI",
        link: "/project/ICEPDP/",
    },
    {
        title: "LIME",
        description: "Local Interpretable Model-Agnostic Explanations - Publication work at Nature",
        date: "2020",
        category: "Explainable AI",
        link: "/project/LIME/",
    },
    {
        title: "Lung Cancer Diagnosis",
        description: "Lung Cancer Diagnosis From X-Ray Images using Deep Learning [2017]",
        date: "2017",
        category: "Computer Vision",
        video: "https://www.youtube.com/watch?v=AyiM4snkxL0&feature=youtu.be",
        github: "https://github.com/TrinhDinhPhuc/ML-by-CBD-Robotics/tree/master/Deep%20Learning",
    },
];

const contactConfig = {
    YOUR_EMAIL: "phuccoi996@gmail.com",
    YOUR_FONE: "-",
    description: "Feel free to reach out for collaborations, job opportunities, or if you want to work together or find a co-founder for a startup!",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/TrinhDinhPhuc",
    scholar: "https://scholar.google.com/citations?user=0kVHSxoAAAAJ",
    linkedin: "https://www.linkedin.com/in/phuccoi96/",
    twitter: "https://twitter.com/phuccoi996",
};

export {
    meta,
    dataabout,
    dataportfolio,
    researchexperience,
    workexperience,
    worktimeline,
    services,
    introdata,
    contactConfig,
    socialprofils,
    projectportfolio,
    logotext,
    awards,
    skills,
};

