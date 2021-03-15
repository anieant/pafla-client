import React from 'react';
import {Col, Row, Typography} from 'antd';
import styles from '../../styles/statistics.module.css';
import StatisticsCard from '../StatisticsCard';
import {IMAGE_URL} from '../../helpers/constants';


const {Title, Paragraph} = Typography;


const Statistics = () => {
    return (
        <section className={styles.statistics} id="statistics">
            <Row>
                <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}}>
                    <Row justify="space-between" gutter={20}>
                        <Col xs={{span: 24}} md={{span: 24}} xl={{span: 7}}  className={styles.statistics_heading}>
                            <Title level={2} className="section-title">It's the economy, smarty.</Title>
                            <Paragraph className="section-text">PAFLA gives our members a powerful voice through policy advocacy, benefits, and
                                community. Membership is free and open to freelancers of all kinds.</Paragraph>
                        </Col>
                        <Col xs={{span: 24, offset: 0}} md={{span: 8, offset: 0}} xl={{span: 5, offset: 2}}
                             style={{margin: '0 auto'}}>
                            <StatisticsCard image={`${IMAGE_URL}community.png`} statistic="1000+" title="Total Members"/>
                        </Col>
                        <Col xs={{span: 24}} md={{span: 8}} xl={{span: 5}} style={{margin: '0 auto'}}>
                            <StatisticsCard image={`${IMAGE_URL}sponsors.png`} statistic="100+" title="Sponsors Across World"/>
                        </Col>
                        <Col xs={{span: 24}} md={{span: 8}} xl={{span: 5}} style={{margin: '0 auto'}}>
                            <StatisticsCard image={`${IMAGE_URL}loans.png`} statistic="100+" title="Approved Loans"/>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </section>
    );
};

export default Statistics;
