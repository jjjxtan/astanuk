import { FC, ReactElement } from "react";
import { Paragraph } from "../Common/Paragraph/Paragraph";
import { Subtitle } from "../Common/Title/Subtitle";
import classes from "./Experience.module.css";

interface Experience{
    company: string,
    role: string,
    duration: string,
    description: string,
    techStack: string
}

type Props = {
    experience: Experience[] | []
}

export const WorkEx: FC<Props> = ({experience}):ReactElement => {
    return (
        <div className={classes.timelineContainer}>
            {
                experience.map((obj, index)=>(
                    <div className={classes.workex} key={index}>
                        <Subtitle>
                            {obj.company}
                        </Subtitle>
                        <h6 className={classes.secondaryText}>{obj.role}</h6>
                        <h6 className={classes.secondaryText}>{obj.duration}</h6>
                        <Paragraph className={classes.workDescription}>{obj.description}</Paragraph>
                        <Paragraph className={classes.workDescription}>
                            <span className={classes.techStack}>Tech Stack: </span>
                            {obj.techStack}
                        </Paragraph>
                        <span className={classes.circle} />
                    </div>
                ))
            }
        </div>
    );
};