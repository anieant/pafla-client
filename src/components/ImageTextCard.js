import React from 'react';
import styles from '../styles/card.module.css'
import {Typography} from 'antd';

const {Paragraph} = Typography

const ImageTextCard = ({image, title, color}) => {
    return (
        <div className={styles.image_text_card}>
            <div className={styles.card_image_bg} style={{backgroundColor: color}}>
                <img src={image} alt="card"/>
            </div>
            <Paragraph className={styles.card_text}>{title}</Paragraph>
        </div>
    );
};

export default ImageTextCard;
