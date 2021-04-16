import EtchaSketch from "./etchaSketch";
import PortfolioSite from "./portfolioSite";
import Yasa from "./yasa";

export const projectData = [
    {
        id: 'portfolioSite',
        imgURL: 'images/my_logo.jpg',
        title: "My Portfolio",
        func: PortfolioSite,
        description: "Personal Portfolio Site",
        technologies: 'React, Colorlib',
        navTo: '',
        github:'Full Repository',
        githubRepo: 'https://github.com/razer523/MyPortfolio',
        github2: '',
        githubRepo2: '',
    },
    {
        id: 'yasa',
        imgURL: 'images/project1.png',
        title: "Yasa",
        func: Yasa,
        description: "The Yard Sale Locator App",
        technologies: 'React, Java, full CRUD operations, Auth0',
        navTo: '',
        github: 'Front End Github Repo',
        githubRepo: 'https://github.com/bethel-school-of-technology/team-java-boys-frontend',
        github2: 'Back End Github Repo',
        githubRepo2: 'https://github.com/bethel-school-of-technology/team-java-boys-backend',
    },
    {
        id: 'reactEtch',
        imgURL: 'images/etch.jpg',
        title: "Etch-A-Sketch",
        func: EtchaSketch,
        description: "Etch-A-Sketch with your mouse!",
        technologies: 'React',
        navTo: "etchaSketch",
        github: '',
        githubRepo: '',
        github2: '',
        githubRepo2: '',
    },
]