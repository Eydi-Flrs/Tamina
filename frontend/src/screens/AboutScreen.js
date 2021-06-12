import React from 'react'
import about from '../brandimage/about.jpg';
const AboutScreen = () => {
    return (
        <div className='aboutPage'>
            <img src={about} alt='' className ='about' style={{height:"500px"}}/>
            <h4>Tamina Korean Store is a Specialty Grocery Store that provides variety of korean products and services giving satisfaction to every Hallyu Fan
            </h4>
            <br/>
            <h5>Located at 834 Nicanor Reyes St, Sampaloc, Manila, 1008 Metro Manila</h5>
            <br/>
            <h5> Open Hours: 10:00 AM - 5:00 PM</h5>
        </div>
    )
}

export default AboutScreen
