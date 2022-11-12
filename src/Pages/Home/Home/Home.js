import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUS/ContactUs';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalDental/>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs/>
        </div>
    );
};

export default Home;