import { FC } from "react";
import { Aligner } from "@components/Common/Aligner/Aligner";
import { Footer } from "@components/Common/Footer/Footer";
import { Navigation } from "@components/Common/Navigation/Navigation";
import { Paragraph } from "@components/Common/Paragraph/Paragraph";
import { ThemeToggle } from "@components/Common/ThemeToggle/ThemeToggle";
import { NameTitle } from "@components/Common/Title/NameTitle";
import { Title } from "@components/Common/Title/Title";
import { Blog } from "./Blog";
import classes from "./Blogs.module.css";
import data from "./BlogsData.json";

const Blogs: FC<BlogProps> = ({ blogList }) => {

    return (
        <Aligner>
            <>
                <div className={classes.titleWrapper}>
                    <NameTitle name="omkathe | " page="blogs" />
                    <ThemeToggle/>
                </div>
                <Navigation/>
                <Paragraph>{data.intro}</Paragraph>
                <div className={classes.blogsContainer}>
                    <Title>✍️ Blogs</Title>
                    <Blog blogList={blogList}/>
                </div>
                <Footer/>
            </>
        </Aligner>
    );
};

export default Blogs;
