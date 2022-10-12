import { ReactElement } from "react";
import { Aligner } from "../Common/Aligner/Aligner";
import { Footer } from "../Common/Footer/Footer";
import { Navigation } from "../Common/Navigation/Navigation";
import { SocialLinks } from "../Common/Social Links/SocialLinks";
import { NameTitle } from "../Common/Title/NameTitle";
import { SectionTitle } from "../Common/Title/SectionTitle";
import classes from "./Experience.module.css";

const links = [
    {
        name: "LeetCode |",
        svg: "/Assets/leetcode.svg",
        url: "https://leetcode.com/omkathe26/",
    },
    {
        name: "GeeksForGeeks |",
        svg: "/Assets/GeeksforGeeks.svg",
        url: "https://auth.geeksforgeeks.org/user/omkathe26/practice",
    },
    {
        name: "Codeforces |",
        svg: "/Assets/code-forces.svg",
        url: "https://codeforces.com/profile/omkathe",
    },
];

const text1 =
    "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul. In this journey, I’ve used many programming languages such as Java, JavaScript, Python and getting around with TypeScript lately.";

const text2 = "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul. In this journey, I’ve used many programming languages such as Java, JavaScript, Python and getting around with TypeScript lately.";

const text3 = "I’m not a competitive programmer, but I do like solving problems related to data structures and algorithms."

export const Experience = (): ReactElement => {
    return (
        <Aligner>
            <>
                <NameTitle name="omkathe | " page="experience" />
                <Navigation/>
                <p className={classes.paragraph}>{text1}</p>
                <div className={classes.workex}>
                    <SectionTitle
                        style={{ marginBottom: "1.5rem" }}
                        text="💼 Work Experience"
                    />
                </div>
                <div className={classes.projects}>
                    <SectionTitle
                        style={{ marginBottom: "1.5rem" }}
                        text="🛠️ Projects"
                    />
                    <p className={classes.paragraph}>{text2}</p>
                </div>
                <div className={classes.profiles}>
                    <SectionTitle
                        style={{ marginBottom: "1.5rem" }}
                        text="🏎️ Coding Profiles"
                    />
                    <p className={classes.paragraph}>{text3}</p>
                    <SocialLinks style={{marginTop: "10px"}} links={links}/>
                </div>
                <Footer/>
            </>
        </Aligner>
    );
};
