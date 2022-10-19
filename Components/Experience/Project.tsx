import { FC, ReactElement } from "react";
import { Paragraph } from "@components/Common/Paragraph/Paragraph";
import { SocialLinks } from "@components/Common/SocialLinks/SocialLinks";
import { Subtitle } from "@components/Common/Title/Subtitle";
import classes from "./Experience.module.css";

type ProjectProps = {
    name: string;
    description: string;
    techStack: string;
    links?: ISocialLink[];
    key?: number;
};

export const Project: FC<ProjectProps> = ({
    name,
    description,
    techStack,
    links,
}): ReactElement => {
    return (
        <div className={classes.projectWrapper}>
            <Subtitle>{name}</Subtitle>
            <Paragraph>{description}</Paragraph>
            <Paragraph>
                <span className={classes.techStack}>Tech Stack: </span>
                {techStack}
            </Paragraph>
            {links && <SocialLinks isActive links={links}/>}
        </div>
    );
};
