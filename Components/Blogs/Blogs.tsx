import { ReactElement } from "react";
import { Aligner } from "@components/Common/Aligner/Aligner";
import { Footer } from "@components/Common/Footer/Footer";
import { Navigation } from "@components/Common/Navigation/Navigation";
import { Paragraph } from "@components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@components/Common/ThemeToggle/ThemeToggle";
import { NameTitle } from "@components/Common/Title/NameTitle";
import { Title } from "@components/Common/Title/Title";
import { Blog } from "./Blog";
import classes from "./Blogs.module.css";

const text =
    "I’ve been coding since 2017. Currently, I’m pursuing Bachelors in Computer Engineering. Also, I’m interning at NavGurukul. In this journey, I’ve used many programming languages such as Java, JavaScript, Python and getting around with TypeScript lately.";

const blogList = [
    {
        title: "Leverage agile frameworks",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
        date: "October 10, 2022",
        time: "5 Minutes Read",
        tags: ["JavaScript", "GraphQL", "Microservices"],
        isNew: true
    },
]

export const Blogs = (): ReactElement => {
    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="omkathe | " page="blogs" />
                    <ThemeToggle/>
                </div> 
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
