import React from 'react';
import {Button, Col, Row, Typography} from 'antd';
import styles from '../../styles/blog.module.css'
import BlogCard from '../BlogCard';
import {IMAGE_URL} from '../../helpers/constants';
import {Link} from 'react-router-dom';
import {Zoom} from 'react-reveal';

const {Title} = Typography;

const Blog = () => {
    return (
        <section className={styles.blog} id="blog">
            <Row justify="space-between">
                <Col xs={{span: 22}} md={{span: 22}} style={{margin: '0 auto'}}>
                    <Title level={2} className="section-title">When freelancers come together, we win</Title>
                    <Zoom left>
                        <div className={styles.card_items}>

                            <BlogCard
                                image={`${IMAGE_URL}win_1.png`}
                                title="Providing Opportunities"
                                text="PAFLA gives our members a powerful voice through policy advocacy, benefits, and community. Membership is free and open to freelancers of all kinds,"
                                link="/"
                            />
                            <BlogCard
                                image={`${IMAGE_URL}win_2.png`}
                                title="Overcome Challenges"
                                text="PAFLA gives our members a powerful voice through policy advocacy, benefits, and community. Membership is free and open to freelancers of all kinds,"
                                link="/"
                            />
                            <BlogCard
                                image={`${IMAGE_URL}win_3.png`}
                                title="Policy Advocacy"
                                text="PAFLA gives our members a powerful voice through policy advocacy, benefits, and community. Membership is free and open to freelancers of all kinds,"
                                link="/"
                            />

                        </div>
                    </Zoom>
                    <Button className="btn_default"><Link to={'/'}>View all blogs</Link></Button>
                </Col>
            </Row>
        </section>
    );
};

export default Blog;
