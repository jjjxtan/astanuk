import { ReactElement } from "react";
import Image from "next/image";
import { Aligner } from "../Common/Aligner/Aligner";
import { Footer } from "../Common/Footer/Footer";
import { Navigation } from "../Common/Navigation/Navigation";
import { SocialLinks } from "../Common/Social Links/SocialLinks";
import { NameTitle } from "../Common/Title/NameTitle";
import { Title } from "../Common/Title/Title";
import classes from "./Home.module.css";
import { Paragraph } from "../Common/Paragraph/Paragraph";
import TopRight from "../../public/Assets/top-right.svg";

const skills = [
    {
        name: "React.js ",
        description: ": My go to library for single-page applications",
        url: "https://reactjs.org/",
    },
    {
        name: "Redux ",
        description: ": When state gets complex",
        url: "https://redux.js.org/",
    },
    {
        name: "Next.js ",
        description: ": Learned for making this website ;-)",
        url: "https://nextjs.org/",
    },
    {
        name: "Express.js ",
        description: ": Make a server in minutes",
        url: "https://expressjs.com/",
    },
    {
        name: "MySQL ",
        description: ": Good old RDBMS",
        url: "https://www.mysql.com/",
    },
    {
        name: "MongoDB ",
        description: ": Simple, fast, scalable",
        url: "https://www.mongodb.com/",
    },
];

const links = [
    {
        name: "LinkedIn",
        svg: "/Assets/linkedin.svg",
        url: "https://www.linkedin.com/in/omkathe/",
    },
    {
        name: "Dev.to",
        svg: "/Assets/dev-to.svg",
        url: "#",
    },
    {
        name: "Instagram",
        svg: "/Assets/instagram.svg",
        url: "https://www.instagram.com/omkatheofficial/",
    },
    {
        name: "Facebook",
        svg: "/Assets/facebook.svg",
        url: "https://www.facebook.com/omisonline/",
    },
    {
        name: "GitHub",
        svg: "/Assets/github.svg",
        url: "https://github.com/itsomkathe",
    },
];

const text1 = "Hi! 👋 I’m Om. I’m a Software Engineer.";

const text2 =
    "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul. In this journey, I’ve used many programming languages such as Java, JavaScript, Python and getting around with TypeScript lately.";

const text3 =
    "I like solving problems, related to data structures and algorithms. Currently, I’m learning about design principles and software architecture. I also write blogs related to all the above topics and when I feel I’ve learned something interesting.";

const text4 = "... and a lot more to get the work done.";

const text5 = "Feel free to reach out to me on any of these";
export const Home = (): ReactElement => {
    return (
        <Aligner>
            <>
                <NameTitle name="omkathe | " page="home" />
                <Navigation />
                <Paragraph>{text1}</Paragraph>
                <Paragraph>{text2}</Paragraph>
                <Paragraph>{text3}</Paragraph>
                <div className={classes.technologies}>
                    <Title>👨‍💻 Technologies</Title>
                    {skills.map((skill, index) => (
                        <Paragraph key={index} className={classes.skills}>
                            <a
                                href={skill.url}
                                rel="noreferrer"
                                target="_blank"
                                className={classes.link}
                            >
                                {skill.name}
                            </a>
                            <TopRight className={classes.topRight}/>
                            {skill.description}
                        </Paragraph>
                    ))}
                    <Paragraph>{text4}</Paragraph>
                </div>
                <div className={classes.connect}>
                    <Title>🔗 Connect With Me</Title>
                    <Paragraph className={classes.paragraph}>{text5}</Paragraph>
                    <SocialLinks className={classes.socialLinks} links={links} />
                </div>
                <Footer />
            </>
        </Aligner>
    );
};
