import React from 'react';
import Banner from '../components/Banner';
import {IMAGE_URL} from '../helpers/constants';
import Liability from '../components/insurance/Liability';
import Subscribe from '../components/Subscribe';
import Layout from '../components/Layout';
import SelfEmpolyed from '../components/loans/SelfEmpolyed';



const Loans = () => {
    return (
        <Layout>
            <div>
                <Banner
                    title="Compare loans and find the best one"
                    text="Fill out one request form, get access to exclusive deals and see your chance of being accepted"
                    image={`${IMAGE_URL}loans_banner_img.png`}
                    width={[11, 12]}
                    imagePosition="center"
                />
                <SelfEmpolyed/>
                <Subscribe/>
            </div>
        </Layout>
    );
};

export default Loans;
