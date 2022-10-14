import { FC, ReactElement, CSSProperties } from "react";
import classes from "./Title.module.css";

interface Props{
    text: string,
    style?: CSSProperties
}

export const SectionTitle: FC<Props> = ({text, style}):ReactElement=>{
    return(
        <>
            <h2 style={style} className={classes.sectionTitle}>{text}</h2>
        </>
    )
}