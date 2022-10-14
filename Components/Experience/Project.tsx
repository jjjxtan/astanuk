import { FC, ReactElement } from "react";
import { Paragraph } from "../Common/Paragraph/Paragraph";
import { SocialLinks } from "../Common/Social Links/SocialLinks";
import { Subtitle } from "../Common/Title/Subtitle";
import classes from "./Experience.module.css";

interface LinkFormat{
    name: string,
    svg: string,
    url: string
}

interface ProjectProps{
    name: string,
    description: string,
    techStack: string,
    links?: LinkFormat[],
    key?: number
}

export const Project: FC<ProjectProps> = ({name, description, techStack, links}):ReactElement => {
    return (
        <div className={classes.projectWrapper}>
            <Subtitle>
                {name}
            </Subtitle>
            <Paragraph>
                {description}
            </Paragraph>
            <Paragraph>
                <span className={classes.techStack}>Tech Stack: </span>
                {techStack}
            </Paragraph>
            {links && <SocialLinks isActive links={links}/>}
        </div>
    );
};
