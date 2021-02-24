import React from 'react';
import {Col, Row, Typography} from 'antd';
import styles from '../styles/banner.module.css';

const {Title, Paragraph} = Typography;

const Banner = ({title, text, button, background, image, width,imagePosition,...rest}) => {

    return (
        <section className={styles.banner} style={{backgroundImage: background ? `url(${background})` : ''}}>
            <Row justify="space-between">
                <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}}>
                    <Row justify="space-between">
                        <Col xs={{span: 24}} md={{span: 12}} lg={{span: width[0] ? width[0] : 12}}  className={styles.banner_left}>
                            {title ?
                                <Title level={1} className={styles.banner_title}>
                                    {title}
                                </Title> : ''
                            }
                            {text ?
                                <Paragraph className={styles.banner_text}>
                                    {text}
                                </Paragraph> : ''
                            }
                            {button ?
                                button : ''
                            }
                        </Col>
                        <Col xs={{span: 0}}  md={{span: 12}} lg={{span: width[1] ? width[1] : 12}}  className={`${styles.banner_right} ${imagePosition ? styles['img_'+imagePosition] : '' }`}>
                            <img src={image} alt=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default Banner;
