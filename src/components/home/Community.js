import React from 'react';
import styles from '../../styles/community.module.css';
import {Col, Row, Typography} from 'antd';
import CommunityCard from '../CommunityCard';
import {IMAGE_URL} from '../../helpers/constants';
import {Rotate} from 'react-reveal';

const {Title} = Typography;
const Community = () => {
    return (
        <section className={styles.community} id="community">
            <Row justify="space-between">
                <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}}>
                    <Title level={2} className="section-title">When freelancers come together, we win</Title>
                </Col>
                <Rotate bottom right>
                    <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}} className={styles.card_wrapper}>

                        <CommunityCard
                            image={`${IMAGE_URL}community_1.png`}
                            title="PAFLA Events"
                            text="Meet on the first Wednesday of the month in cities across the country to network, workshop your business, and build your freelance community."
                            color="blue"
                        />
                        <CommunityCard image={`${IMAGE_URL}community_2.png`} color="green" title="Community Blog"
                                       text="Make your voice heard and share your knowledge with your fellow freelancers by contributing to the #1 blog for freelancers. Or, read up and learn something new."/>
                        <CommunityCard image={`${IMAGE_URL}community_3.png`} color="orange" title="Freelancers Hub"
                                       text="New York City freelancers, join us for business workshops, legal and financial advice, networking, and more!"/>

                    </Col>
                </Rotate>
            </Row>
        </section>
    );
};

export default Community;
