import { FC, ReactElement } from "react";
import { SocialLinks } from "../Common/Social Links/SocialLinks";
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
            <h3 className={classes.projectTitle}>{name}</h3>
            <p className={classes.projectText}>{description}</p>
            <p className={classes.projectText}>
                <span className={classes.techStack}>Tech Stack: </span>
                {techStack}
            </p>
            {links && <SocialLinks style={{marginTop: "0.5rem"}} isActive links={links}/>}
        </div>
    );
};
