import { ReactElement } from "react";
import classes from "./Footer.module.css";

export const Footer = (): ReactElement => {
    return (
        <>
            <footer className={classes.container}>
                <span>
                    Built with{" "}
                    <a
                        href="https://nextjs.org/"
                        rel="noreferrer"
                        target="_blank"
                        className={classes.link}
                    >
                        Next.js
                    </a>
                </span>
                <span className={classes.dot}>⬤</span>
                <span>
                    View Source on{" "}
                    <a
                        href="https://github.com/itsomkathe/omkathe"
                        rel="noreferrer"
                        target="_blank"
                        className={classes.link}
                    >
                        GitHub
                    </a>
                </span>
            </footer>
        </>
    );
};
