import React from 'react';
import {Button, Col, Divider, List, Row, Typography} from 'antd';
import styles from '../../styles/home.about.module.css';
import {IMAGE_URL} from '../../helpers/constants';
import Gallery from '../Gallery';
import InsuranceCard from '../InsuranceCard';
import {Fade, Slide} from 'react-reveal';


const {Title, Paragraph, Text} = Typography;


const list = [
    'Ensure no cheque bounces',
    'Repay any existing personal or vehicle loan first',
    'Obtaining testimonials of your work from clients would help you strengthen your case',
    'Try to work on multiple projects simultaneously to avoid getting into a no-income scenario',
]
const left = [
    {
        image: `${IMAGE_URL}gallery_4.png`,
        size: 'large'
    }
]
const right = [
    {
        image: `${IMAGE_URL}gallery_5.png`,
        size: 'medium'
    },
    {
        image: `${IMAGE_URL}gallery_6.png`,
        size: 'small'
    }
]
const shop = [
    {
        image: `${IMAGE_URL}personal_loan.png`,
        title: 'Personal Loan',
        text: 'A Personal Loan PAFLA from  helps you meet your diverse financial needs during an emergency.',
        link: '/',
        buttonText: 'Apply now'
    },
    {
        image: `${IMAGE_URL}car_loan.png`,
        title: 'Car Loan',
        text: 'PAFLA offers Car Loans up to 100% of on-road price of the car, with attractive interest rates and tenure up to 7 years..',
        link: '/',
        buttonText: 'Apply now'
    },
    {
        image: `${IMAGE_URL}home_loan.png`,
        title: 'Home Loan',
        text: 'PAFLA Loans makes it simpler for those who want to realise this dream.',
        link: '/',
        buttonText: 'Apply now'
    }

]
const SelfEmpolyed = () => {
    return (
        <section id="liability">
            <Row justify="space-between">
                <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}}>
                    <Row>

                        <Col xs={{span: 24}} md={{span: 24}} lg={{span: 12}}>
                            <div className={styles.about_text}>
                                <div className={styles.card_item}>
                                    <Slide bottom>
                                        <Title level={2} className="section-title">Personal Loan for Self Employed
                                            with No Income Proof</Title>
                                    </Slide>
                                    <Slide bottom>
                                        <Paragraph className="section-text">
                                            Yes, it is possible for a self-employed to avail a personal loan without
                                            income
                                            proof. I am sure, now you must be curious to know how? So, let me tell you
                                            that
                                            though income proof is important as far as availing a loan is concerned, but
                                            in
                                            some cases, a loan can also be given to self-employed individuals if they
                                            fail
                                            to submit the proof. In that case, the lenders usually offer the secured
                                            personal loan to the applicants by mortgaging their property documents. A
                                            borrower needs to submit his/her property documents to the lender so as to
                                            get
                                            the funds instantly via a secured personal loan.
                                            <Divider style={{visibility: 'hidden', margin: 15}}/>
                                            <b>Check your eligibility before you apply:</b>
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
                                                        title={<Text className={styles.list_text_grey}>{item}</Text>}
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
                                {shop.map((sh,idx) => <InsuranceCard delay={shop.length * 200 / idx} image={sh.image} title={sh.title} text={sh.text}
                                                               link={sh.link}
                                                               buttonText={sh.buttonText ? sh.buttonText : ''}/>)}

                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default SelfEmpolyed;
