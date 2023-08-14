/* eslint-disable no-undef */
import React, { useState, useRef, useEffect } from 'react';
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

import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  z-index: 1;
  `,
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;
  
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  transition-property: all;
 
  transition-duration: 120ms;

  
  `,
);


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

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

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
          <li>
          <Dropdown>
                <TriggerButton>
                <img className='image-logo' alt='logo' src={myLogo} />
                </TriggerButton>
                <Menu slots={{ listbox: StyledListbox }}>
                  <StyledMenuItem onClick={createHandleMenuClick('product')}>
                    Profile
                  </StyledMenuItem>
                  <StyledMenuItem onClick={createHandleMenuClick('cart')}>
                    Settings
                  </StyledMenuItem>
                  <StyledMenuItem onClick={createHandleMenuClick('checkout')}>
                       Logout
                  </StyledMenuItem>
                  
                </Menu>
              </Dropdown>
          </li>

        </ul>
      </div>
      <div className='input-container'>
        <Link to='/'>
          <div className='card-1'>
            <img className='website-logo-img' alt='website-logo' src={websiteLogo} />
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
              {/* <LinkButton
              id='/shoping'
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            >
              SHOPING
            </LinkButton> */}
              <Dropdown>
                <TriggerButton><LinkButton
              id='/shoping'
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            >
              SHOPING
            </LinkButton></TriggerButton>
                <Menu slots={{ listbox: StyledListbox }}>
                  <StyledMenuItem onClick={createHandleMenuClick('product')}>
                    PRODUCT DETAILS
                  </StyledMenuItem>
                  <StyledMenuItem onClick={createHandleMenuClick('cart')}>
                    CART
                  </StyledMenuItem>
                  <StyledMenuItem onClick={createHandleMenuClick('checkout')}>
                   CHEKOUT
                  </StyledMenuItem>
                  <StyledMenuItem onClick={createHandleMenuClick('payment')}>
                   PAYMENT
                  </StyledMenuItem>
                </Menu>
              </Dropdown>
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
            <Dropdown>
                <TriggerButton><LinkButton
              id='/category'
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            >
              CATEGORY
            </LinkButton></TriggerButton>
                <Menu slots={{ listbox: StyledListbox }}>
                  <StyledMenuItem onClick={createHandleMenuClick('men')}>
                   MEN
                  </StyledMenuItem>
                  <StyledMenuItem onClick={createHandleMenuClick('women')}>
                    WOMEN
                  </StyledMenuItem>
                  <StyledMenuItem onClick={createHandleMenuClick('gadgets')}>
                    GADGETS
                  </StyledMenuItem>
                  <StyledMenuItem onClick={createHandleMenuClick('accessories')}>
                        ACCESSORIES
                  </StyledMenuItem>
                </Menu>
              </Dropdown>

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
