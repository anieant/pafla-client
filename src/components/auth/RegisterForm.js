import React from 'react';
import {Button, Checkbox, Form, Input, Typography} from 'antd';
import {Link} from 'react-router-dom';
import styles from '../../styles/signUp.module.css'
import {passwordRule} from '../../helpers/rules';

const layout = {
    wrapperCol: {
        lg: {span: 12, offset: 6},
        xs: {span: 16, offset: 0},
        md: {span: 16, offset: 4},
        sm: {span: 16, offset: 4}
    },
};

const {Text} = Typography;
const RegisterForm = () => {
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <Form
            {...layout}
            name="normal_login"
            className={styles.reg_form}
            initialValues={{agree: false}}
            onFinish={onFinish}
        >
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
            <Form.Item

                name="username"
                rules={[{required: true, message: 'Please input your Username!'}]}
            >
                <Input size="large" placeholder="Username"/>
            </Form.Item>
            <Form.Item
                rules={passwordRule}
                name="password"
                validateTrigger={"onBlur"}
            >
                <Input
                    size="large"
                    type="password"
                    placeholder="Password (min 8 characters)"
                />
            </Form.Item>
            <Form.Item
            >
                <Form.Item name="agree"
                           valuePropName="checked"
                           rules={[{
                               required: true,
                               message: 'Please agree with terms & conditions!',
                               transform: value => (value || undefined),
                               type: 'boolean'
                           }]}
                           noStyle>
                    <Checkbox>I agree to the terms & conditions</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.btn_primary_large}>
                    Log in
                </Button>
            </Form.Item>
            <Text>
                Already a member?
                <Link to={'/'} className="text-green"> Sign In </Link>
            </Text>
        </Form>
    );
};

export default RegisterForm;
