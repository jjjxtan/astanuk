import { FC, ReactElement } from "react";
import { Aligner } from "@components/Common/Aligner/Aligner";
import { Footer } from "@components/Common/Footer/Footer";
import { Navigation } from "@components/Common/Navigation/Navigation";
import { SocialLinks } from "@components/Common/Social Links/SocialLinks";
import { NameTitle } from "@components/Common/Title/NameTitle";
import { Title } from "@components/Common/Title/Title";
import { Paragraph } from "@components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@components/Common/ThemeToggle/ThemeToggle";
import SVG from "@public/Assets/SVG";
import { Project } from "./Project";
import { WorkEx } from "./WorkEx";
import classes from "./Experience.module.css";

const links = [
    {
        name: "LeetCode",
        svg: <SVG.LeetCode/>,
        url: "https://leetcode.com/omkathe26/",
    },
    {
        name: "GeeksForGeeks",
        svg: <SVG.GFG/>,
        url: "https://auth.geeksforgeeks.org/user/omkathe26/practice",
    },
    {
        name: "HackerRank",
        svg: <SVG.HackerRank/>,
        url: "https://www.hackerrank.com/omkathe",
    },
];

const text1 =
    "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul. In this journey, I’ve used many programming languages such as Java, JavaScript, Python and getting around with TypeScript lately.";

const text2 =
    "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul. In this journey, I’ve used many programming languages such as Java, JavaScript, Python and getting around with TypeScript lately.";

const text3 =
    "I’m not a competitive programmer, but I do like solving problems related to data structures and algorithms.";

const text4 = "React.js, Redux, Express.js, MongoDB, WebRTC, Socket.io";

const projects = [
    {
        name: "Voicey",
        description: text2,
        techStack: text4,
        links: [
            {
                name: "GitHub",
                svg: <SVG.GitHub/>,
                url: "https://github.com/itsomkathe/Voicey",
            },
        ],
    },
    {
        name: "Snapsprout",
        description: text2,
        techStack: text4,
        links: [
            {
                name: "GitHub",
                svg: <SVG.GitHub/>,
                url: "https://github.com/itsomkathe/snapsprout",
            },
            {
                name: "Live",
                svg: <SVG.Eye/>,
                url: "https://snapsprout.herokuapp.com/",
            },
        ],
    },
];

const experience = [
    {
        company: "NavGurukul",
        role: "Frontend Engineer Intern",
        duration: "Since July 2022",
        description: text2,
        techStack: text4,
    },
    {
        company: "Bitsmith Technologies",
        role: "Software Engineer Intern",
        duration: "Jan 2022 - Mar 2022",
        description: text2,
        techStack: text4,
    },
];

export const Experience: FC = (): ReactElement => {
    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="omkathe | " page="experience" />
                    <ThemeToggle/>
                </div>
                <Navigation />
                <Paragraph>{text1}</Paragraph>
                <div className={classes.workexContainer}>
                    <Title>💼 Work Experience</Title>
                    <WorkEx experience={experience} />
                </div>
                <div className={classes.projects}>
                    <Title>🛠️ Projects</Title>
                    <Paragraph>{text2}</Paragraph>
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            name={project.name}
                            description={project.description}
                            techStack={project.techStack}
                            links={project.links}
                        />
                    ))}
                </div>
                <div className={classes.profiles}>
                    <Title>🏎️ Coding Profiles</Title>
                    <Paragraph>{text3}</Paragraph>
                    <SocialLinks className={classes.socialLinks} links={links} />
                </div>
                <Footer />
            </>
        </Aligner>
    );
};
