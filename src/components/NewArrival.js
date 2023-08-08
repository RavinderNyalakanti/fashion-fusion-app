import React from 'react';
import newArrivalImage from '../assets/images/NewArrival.jpg';
import Button from '@mui/material/Button';
import { IoSettingsSharp } from 'react-icons/io5';

const NewArrival = () => {
    return (
        <div className='new-Arrival-section new-Arrival-plus'>
            <div className='new-Arrival-image'>
                <img src={newArrivalImage} alt='New Arrival'/>

                <div className='new-arrival-content_box'>
                    <IoSettingsSharp className='arrival-setting-icons'/>
                    <h4>New Arrival</h4>
                    <h2>Sunglasses for Everyone</h2>
                    <Button variant="contained" color="primary">
                        Shop Now !
                    </Button>

                    
                </div>
            </div>
        </div>
    );
};

export default NewArrival;