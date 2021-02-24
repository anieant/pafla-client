import React from 'react';
import styles from '../styles/subscribe.module.css';
import {Button,  Col, Form, Input, Row, Typography} from 'antd';
import {IMAGE_URL} from '../helpers/constants';
import {Link} from 'react-router-dom';

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
                <Col xs={{span: 22, offset: 1}} lg={{span: 12, offset: 6}} md={{span: 16, offset: 4}} style={{margin: '0 auto'}}>

                        <Title level={2} className={styles.subscribe_title}> Join Freelancers PAFLA– it's free!</Title>
                        <Paragraph className={styles.subscribe_text}>Get access to exclusive discounts, valuable
                            resources, and the largest community of freelancers on earth.</Paragraph>
                        <Form
                            {...layout}
                            name="normal_login"
                            className={styles.subscribe_form}
                            onFinish={onFinish}
                        >
                            <Form.Item

                                name="name"
                                rules={[{required: true, message: 'Please input your Full Name!'}]}
                            >
                                <Input size="large" placeholder="Full Name"/>
                            </Form.Item>
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
                            <Form.Item className="subscribe_btn" wrapperCol={{
                                lg: {span: 20},
                                xs: {span: 24},
                            }}>
                                <Button type="primary" htmlType="submit" className={styles.btn_primary_rounded}>
                                    Join Now
                                </Button>
                            </Form.Item>
                        </Form>
                        <Text className={styles.subscribe_sign}> Already a member? <Link to={'/'}>Sign In</Link></Text>
                </Col>
                <Col xs={{span: 22, offset: 1}} md={{span: 20, offset: 2}} style={{margin: '0 auto'}}>
                    <div className={styles.subscribe_footer}>
                        <img src={`${IMAGE_URL}office.png`} alt="" style={{width: '55%'}}/>
                        <img src={`${IMAGE_URL}stuff.png`} alt="" style={{width: '32%'}}/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Subscribe;
