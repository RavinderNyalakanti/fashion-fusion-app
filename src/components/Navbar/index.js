/* eslint-disable no-undef */
import React, { useState,useRef,useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLocalGroceryStore } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { TbSearch } from 'react-icons/tb'; 
import LinkButton from '../LinkButton'; 
import websiteLogo from '../../assets/images/collections/web-logo.png'
import myLogo from '../../assets/images/collections/my-image.jpg' 
import Popup from 'reactjs-popup'
import './NavBar.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [activeButton, setActiveButton] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };  

  const popupRef = useRef(null);
  
  useEffect(() => {
    // Add a click event listener to close the pop-up when clicked outside
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Close the pop-up by setting its state to closed
        // Assuming you have a state to manage the pop-up
        // setPopupOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const onClickShow = () => {
    setShow(!show);
  }


  return (
    <header className='main-container' >
      <div className='welcome-container'>
        <h1 className='heading'>Welcome to our fashion store</h1>
        <ul className='list-items'>
          <li>
            <MdLocalGroceryStore className='icon' />
          </li>
          <li>
            <AiFillHeart className='icon' />
          </li> 
          <li ref={popupRef}> {/* Reference for detecting clicks inside pop-up */}
            <PopupState variant="popper" popupId="demo-popup-popper">
              {(popupState) => (
                <div>
                  <Button {...bindToggle(popupState)}>
                    <img className='image-logo' alt='logo' src={myLogo}/> 
                  </Button>
                  <Popper className='pop-up-text-container' {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          <Typography className='pop-up-text-container'  sx={{ p: 2 }}>
                            
                              
                          <div> 
                                <AccountCircleIcon className='pop-up-icon'/>
                              <p>Profile</p>
                                </div>
                              
                               <div> 
                                <SettingsIcon className='pop-up-icon'/>
                              <p>Settings</p>
                                </div>
                               

                                
                              <div> 
                                <LogoutIcon className='pop-up-icon'/>
                              <p>Logout</p>
                                </div>
                              
                             
                             
                            
                          </Typography>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
          </li>
        
        </ul>
      </div>
      <div className='input-container'>
        <Link to='/'>
          <div className='card-1'>
            <img className='website-logo-img' alt='website-logo' src={websiteLogo}/>
          </div>
        </Link>

        <div className='card-2'>
          <div className='search-container'>
            <input placeholder='Search' type='search' className='search-input' />
            <AiOutlineSearch className='search-icon' />
          </div>
        </div>
      </div>
      <div className='nav-container'>
               <div className='search-mobile'>
                     <div className='m-box'>
                          <GiHamburgerMenu className='burger-icon' onClick={toggleSidebar} />
                      </div>
                    <div className='m-boxs'>
                         <input type='search' className='input2' placeholder='search ' /> 
                    </div>
              </div>
        <div className={isSidebarOpen ? 'nav-menu active' : 'nav-menu'}>
          <AiOutlineClose className='close-icon' onClick={toggleSidebar} />
          <ul className='nav-card' onClick={toggleSidebar}> 
          <AiOutlineClose className='close-icon2' onClick={toggleSidebar} /> 
            <li> 

            <LinkButton
              id='/'
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            > 

              HOME
            </LinkButton> 
            
            </li>
              <li>
              <LinkButton
              id='/shoping'
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            >
              SHOPING
            </LinkButton>
              </li>

            

              <li>
              <LinkButton
              id='/accessories'
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            >
              ACCESSORIES
            </LinkButton>

              </li>
            


              <li>
              <LinkButton
              id='/category'
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            >
              CATEGORIES
            </LinkButton>

              </li> 

              <li>
              <LinkButton
              id='/contact'
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            >
              CONTACT US
            </LinkButton>
              </li> 

              <li>
              <LinkButton
              id='/admin-panel'
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            >
              ADMIN PANEL
            </LinkButton>

              </li>
          </ul>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
