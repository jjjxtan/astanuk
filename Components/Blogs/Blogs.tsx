import { ReactElement } from "react";
import { Aligner } from "../Common/Aligner/Aligner";
import { Footer } from "../Common/Footer/Footer";
import { Navigation } from "../Common/Navigation/Navigation";
import { Paragraph } from "../Common/Paragraph/Paragraph";
import { NameTitle } from "../Common/Title/NameTitle";
import { Title } from "../Common/Title/Title";
import { Blog } from "./Blog";
import classes from "./Blogs.module.css";

const text =
    "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul. In this journey, I’ve used many programming languages such as Java, JavaScript, Python and getting around with TypeScript lately.";

const blogList = [
    {
        title: "Why Consistent Learning Is Important",
        description: "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul.",
        date: "October 10, 2022",
        time: "5 Minutes Read",
        tags: ["JavaScript", "GraphQL", "Microservices"],
        isNew: true
    },
    {
        title: "Why Consistent Learning Is Important",
        description: "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul.",
        date: "October 10, 2022",
        time: "5 Minutes Read",
        tags: ["Mental Health", "Entrepereneurship", "Business", "Business", "Business"],
        isNew: true
    },
    {
        title: "How to build a billion dollar firm",
        description: "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul.",
        date: "October 10, 2022",
        time: "5 Minutes Read",
        tags: ["JavaScript", "GraphQL", "Microservices"],
        isNew: true
    }
]

export const Blogs = (): ReactElement => {
    return (
        <Aligner>
            <>
                <NameTitle name="omkathe | " page="blogs" />
                <Navigation />
                <Paragraph>
                    {text}
                </Paragraph>
                <div className={classes.blogsContainer}>
                    <Title>✍️ Blogs</Title>
                    <Blog blogList={blogList}/>
                </div>
                
                <Footer />
            </>
        </Aligner>
    );
};
