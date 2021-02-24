import React from 'react';
import styles from '../styles/signUp.module.css';
import {Avatar, Col, List, Row, Typography} from 'antd';
import {IMAGE_URL} from '../helpers/constants';
import RegisterForm from '../components/auth/RegisterForm';

const avatars = Array.from(Array(10).keys());
const list = [
    {title: 'Insurance plans hand-picked for freelancers'},
    {title: 'Community networking and training events'},
    {title: 'Advocacy to support the new workforce'},
    {title: 'Resources to grow your business'},
    {title: 'Exclusive member discounts'},
]
const {Title, Text} = Typography;
const MemberSignup = () => {
    return (
        <div className={styles.sign_up}>
            <Row style={{width: '100%'}}>
                <Col xs={{span: 24}} md={{span: 12}} className={styles.sign_up_left}>

                    <img src={`${IMAGE_URL}logo.png`} alt="" className={styles.auth_logo}/>
                    <div className={styles.sign_up_form}>
                        <Title level={2} className={styles.heading}>Join Freelancers PAFLA</Title>
                        <Avatar.Group className={styles.avatar_group}>
                            {avatars.map(av => <Avatar
                                key={av}
                                size={50}
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            )}
                        </Avatar.Group>
                        <Text>Join these and 1034,00 other freelancers </Text>
                        <RegisterForm/>
                    </div>

                </Col>
                <Col xs={{span: 24}} md={{span: 12}} className={styles.sign_up_info}
                     style={{backgroundImage: `url(${IMAGE_URL}logo_bg.png)`}}>
                    <Title level={2} className={styles.heading}>Join Freelancers PAFLA</Title>
                    <Row style={{width: '100%'}}>
                        <Col xs={{span: 20, offset: 2}} sm={{span: 18, offset: 6}} md={{span: 16, offset: 5}}>
                            <List
                                className={styles.reg_list}
                                itemLayout="horizontal"
                                split={false}
                                dataSource={list}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<img src={`${IMAGE_URL}check_circle.png`} alt=""
                                                         className={styles.list_img}/>}
                                            title={<Text>{item.title}</Text>}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                    <div className={styles.img_bottom}>
                        <img src={`${IMAGE_URL}stuff.png`} alt=""/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MemberSignup;
