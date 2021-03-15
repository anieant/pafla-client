import React from 'react';
import styles from '../styles/card.module.css'
import {Button, Typography} from 'antd';
import {Link} from 'react-router-dom';
import {Fade} from 'react-reveal';


const {Title, Paragraph} = Typography;
const InsuranceCard = ({image, title, text, link, buttonText,delay}) => {
    return (
        <Fade left delay={delay}>
            <div className={styles.insurance_card}>
                <div className={styles.insurance_card_image}>
                    <img src={image} alt="card image"/>
                </div>
                <Title className={styles.insurance_card_title} level={4}> {title}</Title>
                <Paragraph className={styles.insurance_card_ext}> {text}</Paragraph>
                <Button zise="large" className={styles.insurance_btn} type="primary"><Link
                    to={link}>{buttonText ? buttonText : `Shop ${title} insurance`}</Link></Button>
            </div>
        </Fade>
    );
};

export default InsuranceCard;
