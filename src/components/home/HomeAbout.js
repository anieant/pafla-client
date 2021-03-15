import React from 'react';
import {Row, Col, Typography, Button, Divider} from 'antd';
import ImageTextCard from '../ImageTextCard';
import {IMAGE_URL, SIGN_UP} from '../../helpers/constants';
import styles from '../../styles/home.about.module.css'
import {Link} from 'react-router-dom';
import {Fade, Slide} from 'react-reveal';

const {Title, Paragraph} = Typography;
const HomeAbout = () => {
    return (
        <section className={styles.section}>
            <Row justify="space-between">
                <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}}>
                    <Row>
                        <Col xs={{span: 24}} md={{span: 12}}>
                            <div className={styles.cart_items}>
                                <div className={styles.vertical_column}>
                                    <Fade left delay={600}>
                                        <div className={styles.card_item}>
                                            <ImageTextCard image={`${IMAGE_URL}policy.png`} title="Policy Advocacy"
                                                           color="#fbeef5"/>
                                        </div>
                                    </Fade>
                                    <Fade left delay={600}>
                                        <div className={styles.card_item}>
                                            <ImageTextCard image={`${IMAGE_URL}membership.png`} title="Free Membership"
                                                           color="#d2f6ec"/>
                                        </div>
                                    </Fade>
                                    <Fade left delay={600}>
                                        <div className={styles.card_item}>
                                            <ImageTextCard image={`${IMAGE_URL}community.png`} title="Community"
                                                           color="#d9eafe"/>
                                        </div>
                                    </Fade>
                                </div>
                                <div className={styles.vertical_column}>
                                    <Fade left delay={300}>
                                        <div className={styles.card_item}>
                                            <ImageTextCard image={`${IMAGE_URL}opportunities.png`}
                                                           title="Providing Opportunities" color="#ffefdb"/>
                                        </div>
                                    </Fade>
                                    <Fade left delay={300}>
                                        <div className={styles.card_item}>
                                            <ImageTextCard image={`${IMAGE_URL}challenges.png`}
                                                           title="Overcome Challenges"
                                                           color="#f8dfec"/>
                                        </div>
                                    </Fade>
                                </div>
                                <div className={styles.vertical_column}>
                                    <Fade left>
                                        <div className={styles.card_item}>
                                            <ImageTextCard image={`${IMAGE_URL}mentoring.png`} title="Mentoring"
                                                           color="#d2f6ec"/>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span: 24, offset: 0}} md={{span: 11, offset: 1}} lg={{span: 9, offset: 2}}>
                            <div className={styles.about_text}>
                                <div className={styles.card_item}>
                                    <Slide bottom>
                                        <Title level={2} className="section-title">Pakistan Freelancers <br/>Association
                                            (PAFLA)
                                        </Title>
                                    </Slide>
                                    <Slide bottom>
                                        <Paragraph className="section-text">
                                            Pakistan Freelancers Association (PAFLA) is a non-profit
                                            founded to empower Pakistani freelancers through
                                            mentoring, providing opportunities, collaborating with
                                            government, industry and academia, and providing them
                                            a platform as well as a support group to help grow their
                                            career and overcome their challenges
                                            <Divider style={{visibility: 'hidden', margin: 15}}/>
                                            PAFLA gives our members a powerful voice through policy
                                            advocacy, benefits, and community. Membership is free
                                            and open to freelancers of all kinds, from graphic designers
                                            and contractors, to entrepreneurs and moonlighters.
                                        </Paragraph>
                                    </Slide>
                                    <Fade right>
                                        <Button size="large" className={`btn_default ${styles.btn_large}`}>

                                            <Link to={SIGN_UP}>Become a member</Link>

                                        </Button>
                                    </Fade>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default HomeAbout;
