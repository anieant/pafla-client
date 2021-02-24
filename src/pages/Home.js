import React from 'react';
import Layout from '../components/Layout';
import Subscribe from '../components/Subscribe';
import Banner from '../components/Banner';
import {Button} from 'antd';
import {IMAGE_URL} from '../helpers/constants';
import HomeAbout from '../components/home/HomeAbout';
import Blog from '../components/home/Blog';
import Statistics from '../components/home/Statistics';
import Community from '../components/home/Community';

const Home = () => {
    return (
        <Layout>
            <div>
                <Banner
                    title="Freelancers are driving the economy. Let's act like it."
                    text="Providing freelancers a platform as well as a support group to help grow their career and overcome their challenges."
                    button={<Button type="primary" className="ant-btn-orange mb-5">
                        Become a member
                    </Button>}
                    background={`${IMAGE_URL}home_banner_bg.png`}
                    image={`${IMAGE_URL}home_banner_img.png`}
                    width={[9, 14]}
                />
                <HomeAbout/>
                <Blog/>
                <Statistics/>
                <Community/>
                <Subscribe/>
            </div>
        </Layout>
    );
};

export default Home;
