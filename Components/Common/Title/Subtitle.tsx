import { FC, ReactElement, CSSProperties } from "react";
import classes from "./Title.module.css";

interface Props{
    children: string,
    style?: CSSProperties,
    className?: string
}

export const Subtitle: FC<Props> = ({children, style, className}):ReactElement=>{
    return(
        <>
            <h2 style={style} className={`${classes.subTitle} ${className}`}>{children}</h2>
        </>
    )
}