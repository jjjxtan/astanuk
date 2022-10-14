import { FC, ReactElement } from "react";
import Image from "next/image";
import classes from "./SocialLinks.module.css";

export const SocialLinks: FC<SocialLinksProps>  = ({links, style, isActive, className}): ReactElement => {
    return (
        <>
            <ul style={style} className={`${classes.list} ${className}`}>
                {links.map((link, index) => (
                    <li className={classes.listItem} key={index}>
                        {link.svg &&
                            <Image
                                width={16}
                                height={16}
                                className={classes.image}
                                src={link.svg}
                                alt="logo"
                            />
                        }
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className={isActive ? classes.linkActive : classes.link}
                        >
                            {link.name}
                        </a>
                        {(index < links.length-1) && <span> | </span>}
                    </li>
                ))}
            </ul>
        </>
    );
};
