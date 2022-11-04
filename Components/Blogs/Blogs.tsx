import { ReactElement, useEffect, useState } from "react";
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

export const Blogs = (): ReactElement => {
    const [blogList, setBlogList] = useState<IBlog[]>([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch("https://dev.to/api/articles?username=itsomkathe");
                const data = await response.json();
                const blogList =  data.map((blog: any) => {
                    let { title, description, published_at, reading_time_minutes, tag_list }: IBlog = blog;
                    const blogObj = { title, description, published_at, reading_time_minutes, tag_list };
                    return blogObj;
                });
                setBlogList(blogList);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);
    
    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="omkathe | " page="blogs" />
                    <ThemeToggle/>
                </div>
                <Navigation/>
                <Paragraph>{text}</Paragraph>
                <div className={classes.blogsContainer}>
                    <Title>✍️ Blogs</Title>
                    <Blog blogList={blogList}/>
                </div>
                <Footer/>
            </>
        </Aligner>
    );
};
