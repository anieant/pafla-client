import React from 'react';
import styles from '../styles/card.module.css';
import {Link} from 'react-router-dom';
import {Button, Card} from 'antd';

const {Meta} = Card;

const CommunityCard = ({image,title,text,link,color}) => {
    return (
        <Card
            className={`${styles.blog_card} card_${color} ${styles.community_card}`}
            bordered={false}
            cover={
                <img
                    alt="example"
                    src={image}
                />
            }
        >
            <Meta
                title={<div className={`${styles.community_heading} custom-heading`} data-after={title}>{title}</div>}
                description={text}
            />
            <Button zise="large" className={styles.community_btn}><Link to={link} >See Events</Link></Button>
        </Card>
    );
};

export default CommunityCard;
