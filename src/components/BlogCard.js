import React from 'react';
import {Card} from 'antd';
import styles from '../styles/card.module.css'
import {Link} from 'react-router-dom';


const {Meta} = Card;

const BlogCard = ({image,title,text,link}) => {
    return (
        <Card
            className={styles.blog_card}
            bordered={false}
            cover={
                <img
                    alt="example"
                    src={image}
                />
            }
        >
            <Meta
                title={title}
                description={text}
            />
            <Link to={link} className={styles.blog_link}>Know Your Rights</Link>
        </Card>
    );
};

export default BlogCard;
