import React from 'react';
import {Button, Col, Row, Typography} from 'antd';
import styles from '../styles/footer.module.css';
import {IMAGE_URL, INSURANCE, LOANS} from '../helpers/constants';
import {Link} from 'react-router-dom';


const {Text} = Typography;
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Row>
                <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}} className={styles.footer_wrapper}>
                    <Row gutter={20}>
                        <Col sm={{span: 24}} md={{span: 8}} className={styles.footer_left}>
                            <Text className={styles.text_top}>Pakistan Freelancers Association (PAFLA) </Text>
                            <Text className={styles.text_bottom}>A platform as well as a support group to help grow
                                their career and overcome their challenges</Text>
                        </Col>
                        <Col sm={{span: 24}} md={{span: 8}} className={styles.footer_logo_wrapper}>
                            <img src={`${IMAGE_URL}logo.png`} alt="" className={styles.footer_logo}/>
                        </Col>
                        <Col sm={{span: 24}} md={{span: 8}} className={styles.footer_right}>
                            <Text className={styles.footer_social}>
                                <a href="#" target="_blank" className={styles.footer_social_item}>
                                    <img src={`${IMAGE_URL}facebook.png`} alt=""/>
                                </a>
                                <a href="#" target="_blank" className={styles.footer_social_item}>
                                    <img src={`${IMAGE_URL}twitter.png`} alt=""/>
                                </a>
                                <a href="#" target="_blank" className={styles.footer_social_item}>
                                    <img src={`${IMAGE_URL}linkedin.png`} alt=""/>
                                </a>
                                <a href="#" target="_blank" className={styles.footer_social_item}>
                                    <img src={`${IMAGE_URL}instagram.png`} alt=""/>
                                </a>
                            </Text>
                            <Text className={styles.text_bottom}>
                                <Link to={'/'}>Terms and Conditions </Link> • <Link to={'/'}>Privacy Policy</Link>
                            </Text>
                            <Text className={styles.copyright}>© {new Date().getFullYear()} pafla.org</Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
