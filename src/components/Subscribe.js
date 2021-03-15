import React from 'react';
import styles from '../styles/subscribe.module.css';
import {Button, Col, Form, Input, InputNumber, Row, Typography} from 'antd';
import {IMAGE_URL} from '../helpers/constants';
import {Link} from 'react-router-dom';
import {Fade} from 'react-reveal';

const {Title, Text, Paragraph} = Typography;
const Subscribe = () => {
    const layout = {
        wrapperCol: {
            md: {span: 23},
            xs: {span: 24},
        },
    };
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div className={styles.subscribe}>
            <Row>
                <Col xs={{span: 22, offset: 1}} lg={{span: 12, offset: 6}} md={{span: 16, offset: 4}}
                     style={{margin: '0 auto'}}>

                    <Title level={2} className={styles.subscribe_title}> Join Freelancers PAFLA– it's free!</Title>
                    <Paragraph className={styles.subscribe_text}>Get access to exclusive discounts, valuable
                        resources, and the largest community of freelancers on earth.</Paragraph>
                </Col>
                <Col xs={{span: 22, offset: 1}} lg={{span: 16, offset: 4}} md={{span: 20, offset: 2}}
                     style={{margin: '0 auto'}}>
                    <Form
                        {...layout}
                        name="normal_login"
                        className={styles.subscribe_form}
                        onFinish={onFinish}
                    >
                        <Fade left delay={600}>
                            <Form.Item

                                name="name"
                                rules={[{required: true, message: 'Please input your Full Name!'}]}
                            >
                                <Input size="large" placeholder="Full Name"/>
                            </Form.Item>
                        </Fade>
                        <Fade left delay={300}>
                            <Form.Item

                                name="number"
                                rules={[{required: true, message: 'Please input your number!'}]}
                            >
                                <InputNumber size="large" placeholder="Contact Number" bordered={false}/>
                            </Form.Item>
                        </Fade>
                        <Fade left>
                            <Form.Item
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                                validateTrigger={"onBlur"}
                                name="email"
                            >
                                <Input size="large" placeholder="Email Address"/>
                            </Form.Item>
                        </Fade>
                        <Fade right delay={600}>
                        <Form.Item className="subscribe_btn" wrapperCol={{
                            lg: {span: 20},
                            xs: {span: 24},
                        }}>
                            <Button type="primary" htmlType="submit" className={styles.btn_primary_rounded}>
                                Join Now
                            </Button>
                        </Form.Item>
                        </Fade>
                    </Form>
                    <Text className={styles.subscribe_sign}> Already a member? <Link to={'/'}>Sign In</Link></Text>
                </Col>
                <Col xs={{span: 22, offset: 1}} md={{span: 20, offset: 2}} style={{margin: '0 auto'}}>
                    <div className={styles.subscribe_footer}>
                        <Fade left>
                            <img src={`${IMAGE_URL}office.png`} alt="" style={{width: '55%'}}/>
                        </Fade>
                        <Fade right>
                            <img src={`${IMAGE_URL}stuff.png`} alt="" style={{width: '32%'}}/>
                        </Fade>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Subscribe;
