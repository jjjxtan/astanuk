import { FC, ReactElement } from "react";
import { Aligner } from "@components/Common/Aligner/Aligner";
import { Footer } from "@components/Common/Footer/Footer";
import { Navigation } from "@components/Common/Navigation/Navigation";
import { SocialLinks } from "@components/Common/SocialLinks/SocialLinks";
import { NameTitle } from "@components/Common/Title/NameTitle";
import { Title } from "@components/Common/Title/Title";
import { Paragraph } from "@components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@components/Common/ThemeToggle/ThemeToggle";
import { Project } from "./Project";
import { WorkEx } from "./WorkEx";
import { codingProfilesLinks } from "@components/Common/SocialLinks/LinkData";
import data from "./ExperienceData.json";
import classes from "./Experience.module.css";

type ProjectList = {
    name: string;
    description: string;
    techStack: string;
    links: ISocialLink[]
}

export const Experience: FC = (): ReactElement => {
    const header : String[] = data.header;
    const experience : Experience[] = data.experience;
    const projectList : ProjectList[] = data.projects.list;

    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="omkathe | " page="experience" />
                    <ThemeToggle />
                </div>
                <Navigation />
                {
                    header.map((item, idx)=><Paragraph key={idx}>{item}</Paragraph>)
                }
                <div className={classes.workexContainer}>
                    <Title>💼 Work Experience</Title>
                    <WorkEx experience={experience} />
                </div>
                <div className={classes.projects}>
                    <Title>🛠️ Projects</Title>
                    <Paragraph>{data.projects.text}</Paragraph>
                    {projectList.map((project, index) => (
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
                    <Title>🎯 Coding Profiles</Title>
                    <Paragraph>{data.codingProfiles}</Paragraph>
                    <SocialLinks
                        className={classes.socialLinks}
                        links={codingProfilesLinks}
                    />
                </div>
                <Footer />
            </>
        </Aligner>
    );
};
