/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import conf from '../conf/conf.js';
import whiteHouse from '../assets/white-house.jpg';
import location from '../assets/map-pin-icon.png';
import bedroom from '../assets/bedroom-icon.png';
import bathroom from '../assets/shower-icon.png';

const Card = (propertyId) => {

    const [property, setProperty] = React.useState({});
    
    axios.get(`${conf.backendUrl}/property/${propertyId}`)
    .then((res) => {
        if (res.status === 200) {
            setProperty(res.data);
        }
    })
    .catch(err => {
        console.log(err);
    })

    return (
        <div className='flex flex-row gap-4'>
            <div name="image" className=''>
                <img src={whiteHouse} className='rounded-2xl h-56 w-80' alt="" />
            </div>
            <div name="details" className='flex flex-col'>
                <span name="title" className='text-2xl'>The White House</span>
                <div name="location" className='flex flex-row gap-2 items-center'>
                    <img src={location} className='h-4 w-4' alt="" />
                    <span name="address" className='tracking-wider text-md opacity-60'>1600 Pennsylvania Avenue N.W. in Washington, D.C</span>
                </div>
                <span name="price" className='bg-blue-200 text-center max-w-32 text-3xl mt-5 rounded-md'>$100</span>
                <div name="additionalInfo" className='flex flex-row gap-5 mt-5'>
                    <div name="bedrooms" className='text-black flex flex-row bg-gray-300 rounded-lg px-1.5 items-center gap-2'>
                        <img src={bedroom} className='h-4 w-4' alt="" />
                        <span className='text-sm font-light tracking-wide opacity-60'>2 Bedroom</span>
                    </div>
                    <div name="bedrooms" className='text-black flex flex-row bg-gray-300 rounded-lg px-1.5 items-center gap-2'>
                        <img src={bathroom} className='h-4 w-4' alt="" />
                        <span className='text-sm font-light py-0.5 opacity-60'>4 Bathroom</span>
                    </div>
                </div>
                <div name="save" className=''>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;