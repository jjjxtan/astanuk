import { ReactElement } from "react";
import { Aligner } from "@components/Common/Aligner/Aligner";
import { Footer } from "@components/Common/Footer/Footer";
import { Navigation } from "@components/Common/Navigation/Navigation";
import { SocialLinks } from "@components/Common/SocialLinks/SocialLinks";
import { NameTitle } from "@components/Common/Title/NameTitle";
import { Title } from "@components/Common/Title/Title";
import { Paragraph } from "@components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@components/Common/ThemeToggle/ThemeToggle";
import { LinkTo } from "@components/Common/LinkTo/LinkTo";
import { homePageSocialLinks } from "@components/Common/SocialLinks/LinkData";
import classes from "./Home.module.css";
import data from "./HomeData.json";

type TechList = {
    name: string;
    description: string;
    url: string;
};

export const Home = (): ReactElement => {
    const header: String[] = data.header;
    const techList: TechList[] = data.technologies.list;

    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="omkathe | " page="home" />
                    <ThemeToggle className={classes.themeToggle} />
                </div>
                <Navigation />
                {header.map((item, idx) => (
                    <Paragraph key={idx}>{item}</Paragraph>
                ))}
                <div className={classes.technologies}>
                    <Title>👨‍💻 Technologies</Title>
                    {techList.map((skill, index) => (
                        <Paragraph key={index} className={classes.skills}>
                            <LinkTo
                                href={skill.url}
                                target="_blank"
                                isActive
                                isArrow
                                className={classes.link}
                            >
                                {skill.name}
                            </LinkTo>
                            {skill.description}
                        </Paragraph>
                    ))}
                    <Paragraph>{data.technologies.text}</Paragraph>
                </div>
                <div className={classes.connect}>
                    <Title>🔗 Connect With Me</Title>
                    <Paragraph className={classes.paragraph}>
                        {data.connectMeText}
                    </Paragraph>
                    <SocialLinks
                        className={classes.socialLinks}
                        links={homePageSocialLinks}
                    />
                </div>
                <Footer/>
            </>
        </Aligner>
    );
};
