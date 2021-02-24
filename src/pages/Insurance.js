import React from 'react';
import Layout from '../components/Layout';
import {Button} from 'antd';
import {IMAGE_URL} from '../helpers/constants';
import Banner from '../components/Banner';
import Liability from '../components/insurance/Liability';
import Subscribe from '../components/Subscribe';

const Insurance = () => {
    return (
        <Layout>
            <div>
                <Banner
                    title="Insurance for Freelancers"
                    text="Get insurance. Support your union."
                    image={`${IMAGE_URL}insurance_banner_img.png`}
                    width={[14, 10]}
                />
                <Liability/>
                <Subscribe/>
            </div>
        </Layout>
    );
};

export default Insurance;
