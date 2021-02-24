import React from 'react';
import styles from '../../styles/home.about.module.css';
import {Button, Col, Divider, List, Row, Typography} from 'antd';
import {IMAGE_URL} from '../../helpers/constants';
import Gallery from '../Gallery';
import InsuranceCard from '../InsuranceCard';
import {Fade, Slide} from 'react-reveal';

const {Title, Paragraph, Text} = Typography;
const list = [
    'How Professional Liability Insurance protects Freelancers',
    'Freelancers liability insurance: What you need to know',
    'Freelancer Professional Liability claim example',
    'How General Liability Insurance can cover your equipment',
]
const left = [
    {
        image: `${IMAGE_URL}gallery_3.png`,
        size: 'large'
    }
]
const right = [
    {
        image: `${IMAGE_URL}gallery_2.png`,
        size: 'medium'
    },
    {
        image: `${IMAGE_URL}gallery_1.png`,
        size: 'small'
    }
]
const shop = [
    {
        image: `${IMAGE_URL}health.png`,
        title: 'health',
        text: 'See plan options based on your location, age, and average income.',
        link: '/'
    },
    {
        image: `${IMAGE_URL}dental.png`,
        title: 'dental',
        text: 'Protect your smile with dental insurance.',
        link: '/'
    },
    {
        image: `${IMAGE_URL}vision.png`,
        title: 'vision',
        text: 'Ensure you can always see clearly.',
        link: '/'
    },
    {
        image: `${IMAGE_URL}term_life.png`,
        title: 'term life',
        text: 'Protect your family\'s future.',
        link: '/'
    },
    {
        image: `${IMAGE_URL}disability.png`,
        title: 'disability',
        text: 'Secure your income — get a plan B.',
        link: '/'
    },
    {
        image: `${IMAGE_URL}liability.png`,
        title: 'liability',
        text: 'Protect your business from legal action.',
        link: '/'
    }

]
const Liability = () => {
    return (
        <section id="liability">
            <Row justify="space-between">
                <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}}>
                    <Row>
                        <Col xs={{span: 24}} md={{span: 24}} lg={{span: 12}}>
                            <div className={styles.about_text}>
                                <div className={styles.card_item}>
                                    <Slide bottom>
                                        <Title level={2} className="section-title">Get Freelancer Liability Insurance
                                            today!</Title>
                                    </Slide>
                                    <Slide bottom>
                                        <Paragraph className="section-text">
                                            As a freelancer you help your clients improve their performance by solving
                                            problems and improving processes. At PAFLA we make it easy for you to get
                                            specialized insurance coverage that's tailored to your field.
                                            <Divider style={{visibility: 'hidden', margin: 15}}/>
                                            Get a fast, free quote now and get that PAFLA confidence behind your
                                            consulting/
                                            freelance business. If you prefer, you can call us
                                            at <b>1-866-283-7545</b> and
                                            speak
                                            with a PAFLA licensed agent.
                                        </Paragraph>
                                    </Slide>
                                    <List
                                        itemLayout="horizontal"
                                        split={false}
                                        dataSource={list}
                                        renderItem={(item, idx) => (
                                            <Fade left delay={idx * 200}>
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<img src={`${IMAGE_URL}check_circle_black.png`}
                                                                     alt=""/>}
                                                        title={<Text className={styles.list_text}>{item}</Text>}
                                                    />
                                                </List.Item>
                                            </Fade>
                                        )}
                                    />
                                    <Fade bottom>
                                        <Button size="large" className={`ant-btn-orange ${styles.btn_large}`}>get a
                                            quote</Button>
                                    </Fade>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span: 24}} md={{span: 24}} lg={{span: 12}}>
                            <Gallery left={left} right={right}/>
                        </Col>
                        <Col xs={{span: 24}}>
                            <div className="liability-shop">
                                {shop.map((sh,idx) => <InsuranceCard delay={shop.length * 200 / idx} image={sh.image} title={sh.title}
                                                                          text={sh.text}
                                                                          link={sh.link}/>)}

                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default Liability;
