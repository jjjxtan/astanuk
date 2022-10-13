import { FC, ReactElement, CSSProperties } from "react";
import Image from "next/image";
import classes from "./SocialLinks.module.css";

interface LinkFormat{
    name: string,
    svg: string,
    url: string
}

interface Props{
    style?: CSSProperties,
    links: LinkFormat[]
}

export const SocialLinks: FC<Props>  = ({links, style}): ReactElement => {
    return (
        <>
            <ul style={style} className={classes.list}>
                {links.map((link, index) => (
                    <li className={classes.listItem} key={index}>
                        <Image
                            width={16}
                            height={16}
                            className={classes.image}
                            src={link.svg}
                            alt="logo"
                        ></Image>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className={classes.link}
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
