import React from 'react';
import styles from '../styles/card.module.css';
import {Typography} from 'antd';

const {Title, Paragraph} = Typography;

const StatisticsCard = ({image, title, statistic}) => {
    return (
        <div className={styles.statistics_card}>
            <img src={image} alt=""/>
            <Title className="section-title">{statistic}</Title>
            <Paragraph className={styles.statistics_text} >{title}</Paragraph>
        </div>
    );
};

export default StatisticsCard;
