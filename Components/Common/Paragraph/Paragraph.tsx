import { FC, ReactElement, CSSProperties } from "react";
import classes from "./Paragraph.module.css";

interface Props{
    children: any;
    style?: CSSProperties;
    className?: string;
}

export const Paragraph: FC<Props> = ({ children, style, className }): ReactElement => {
    return (
        <p style={style} className={`${classes.paragraph} ${className}`}>
            {children}
        </p>
    );
};