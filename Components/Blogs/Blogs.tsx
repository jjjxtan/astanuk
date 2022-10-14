import { ReactElement } from "react";
import { Aligner } from "../Common/Aligner/Aligner";
import { Footer } from "../Common/Footer/Footer";
import { Navigation } from "../Common/Navigation/Navigation";
import { SocialLinks } from "../Common/Social Links/SocialLinks";
import { NameTitle } from "../Common/Title/NameTitle";
import { Title } from "../Common/Title/Title";
import classes from "./Experience.module.css";

export const Blogs = (): ReactElement => {
    return (
        <Aligner>
            <>
                <NameTitle name="omkathe | " page="blogs" />
                <Navigation />

                <Footer />
            </>
        </Aligner>
    );
};
