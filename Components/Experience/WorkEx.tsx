import { FC, ReactElement } from "react";
import classes from "./Experience.module.css";

interface Experience{
    company: string,
    role: string,
    duration: string,
    description: string,
    techStack: string
}

interface Props{
    experience: Experience[] | []
}

export const WorkEx: FC<Props> = ({experience}):ReactElement => {
    return (
        <div className={classes.timelineContainer}>
            {
                experience.map((obj, index)=>(
                    <div className={classes.workex} key={index}>
                        <h3 className={classes.companyName}>{obj.company}</h3>
                        <h6 className={classes.secondaryText}>{obj.role}</h6>
                        <h6 className={classes.secondaryText}>{obj.duration}</h6>
                        <p className={classes.workDescription}>{obj.description}</p>
                        <p className={classes.workDescription}>
                            <span className={classes.techStack}>Tech Stack: </span>
                            {obj.techStack}
                        </p>
                        <span className={classes.circle} />
                    </div>
                ))
            }
        </div>
    );
};