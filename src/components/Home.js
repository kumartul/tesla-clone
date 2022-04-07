import React from 'react';

import Navbar from './Navbar';
import Section from './Section';
import Footer from './Footer';

import model3Image from '../images/model-3.jpg';
import modelYImage from '../images/model-y.jpg';
import modelSImage from '../images/model-s.jpg';
import modelXImage from '../images/model-x.jpg';
import solarPanelsImage from '../images/solar-panels.jpg';
import solarRoofImage from '../images/solar-roof.jpg';
import accessoriesImage from '../images/accessories.jpg';

import '../style/Home.css';

const Home = () => {
    document.title = 'Electric Cars, Solar & Clean Energy | Tesla';
    
    return (
        <div className="home">
            <Navbar />
            <div className="container">
                <Section title='Model 3' subtitle='Order Online for Touchless Delivery' image={model3Image} btnLeft='Custom Order' btnRight='Existing Inventory' hasDownArrow />
                <Section title='Model Y' subtitle='Order Online for Touchless Delivery' image={modelYImage} btnLeft='Custom Order' btnRight='Existing Inventory' />
                <Section title='Model S' subtitle='Order Online for Touchless Delivery' image={modelSImage} btnLeft='Custom Order' btnRight='Existing Inventory' />
                <Section title='Model X' subtitle='Order Online for Touchless Delivery' image={modelXImage} btnLeft='Custom Order' btnRight='Existing Inventory' />
                <Section title='Solar Panels' subtitle='Lowest Cost Solar Panels in America' image={solarPanelsImage} btnLeft='Order Now' btnRight='Learn More' />
                <Section title='Solar Roof' subtitle='Produce Clean Energy From Your Roof' image={solarRoofImage} btnLeft='Order Now' btnRight='Learn More' />
                <Section title='Accessories' subtitle='' image={accessoriesImage} btnLeft='Shop Now' />
            </div>
            <Footer />
        </div>
    );
}

export default Home;