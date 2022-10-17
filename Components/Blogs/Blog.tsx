import { FC, ReactElement } from "react";
import { Paragraph } from "@components/Common/Paragraph/Paragraph";
import { Subtitle } from "@components/Common/Title/Subtitle";
import { Tag } from "@components/Common/Tag/Tag";
import classes from "./Blogs.module.css";

interface IBlog {
    title: string;
    description: string;
    date: string;
    time: string;
    tags: string[];
    isNew?: boolean
}

type Props = {
    blogList: IBlog[] | [];
};

export const Blog: FC<Props> = ({ blogList }): ReactElement => {
    return (
        <div className={classes.blogsWrapper}>
            {blogList.map((obj, index) => (
                <div className={classes.blog} key={index}>
                    <Subtitle className={classes.title}>
                        {obj.title}
                    </Subtitle>
                    <Paragraph className={classes.paragraph}>{obj.description}</Paragraph>
                    <h6 className={classes.secondaryText}>
                        {obj.date}
                        <span className={classes.dot}>⬤</span>
                        {obj.time}
                    </h6>
                    <div className={classes.tagsContainer}>
                        {obj.tags.map((tag, idx) => (
                            <Tag key={idx}>{tag}</Tag>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
