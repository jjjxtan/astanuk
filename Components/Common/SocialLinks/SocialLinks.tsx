import { FC, ReactElement } from "react";
import { LinkTo } from "@components/Common/LinkTo/LinkTo";
import classes from "./SocialLinks.module.css";

export const SocialLinks: FC<SocialLinksProps>  = ({links, style, isActive, className}): ReactElement => {
    return (
        <>
            <ul style={style} className={`${classes.listContainer} ${className}`}>
                {links.map((link, index) => (
                    <li className={classes.listItem} key={index}>
                        {link.svg}
                        <LinkTo className={classes.link} href={link.url} target="_blank">{link.name}</LinkTo>
                        {(index < links.length-1) && <span> | </span>}
                    </li>
                ))}
            </ul>
        </>
    );
};
