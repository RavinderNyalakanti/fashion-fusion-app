/* eslint-disable no-undef */

import React, { useState, useRef, useEffect,useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

// import { MdLocalGroceryStore } from 'react-icons/md';
// import { GiShoppingBag } from 'react-icons/gi'; 

import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'
// import { TbSearch } from 'react-icons/tb'; 

import LinkButton from '../LinkButton';
import websiteLogo from '../../assets/images/collections/web-logo.png' 
import { CartContext } from '../Context/CartContext'; 
import myLogo from '../../assets/images/collections/my-image.jpg'
// import Popup from 'reactjs-popup' 

import './NavBar.css';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Popper from '@mui/material/Popper';
// import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
// import Fade from '@mui/material/Fade';
// import Paper from '@mui/material/Paper';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';
// import SettingsIcon from '@mui/icons-material/Settings';

import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';

import Avatar from '@mui/material/Avatar';
// import FolderIcon from '@mui/icons-material/Folder';
import { fontSize, fontWeight, margin, styled, textAlign } from '@mui/system';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import zIndex from '@mui/material/styles/zIndex';
// import { get, set } from 'mongoose';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



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
  const [username, setUsername] = useState(null); 
  const [cartItems, setCartItems] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]); 
const router=useNavigate()



  const getCartlist=async()=>{
    const res=await fetch(`https://fashion-fusion-backend-vymx.onrender.com/api/orders/?user=${localStorage.getItem("username")}`)
    const data=await res.json() 
    setCartItems(data.length)
  } 

  const globalSearch = async()=>{ 
    router('/search/'+searchInput)
   window.location.reload();
   
    // console.log(data)
  } 

  const handleInputChange = (event) => {
  
    setSearchInput(event.target.value);
  }; 

 
 
  useEffect(() => {
    const storedUsername = localStorage.getItem('username'); 
    console.log(storedUsername);
    if (storedUsername) {
      setUsername(storedUsername);
    }
    getCartlist()
  }, []);  
  // console.log(username)

  
  
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

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
        
    window.location.replace('/login')

  }



  return (
    <header className='main-container' >
<div className='navbar-container'>


      <div className='input-container'>
        <Link to='/'>
          <div className='card-1'>
            <img className='website-logo-img' alt='website-logo' src={websiteLogo} />
          </div>
        </Link>

        <div className='card-2'>
          <div className='search-container'>
            <input placeholder='Search' type='search' className='search-input' value={searchInput} onChange={handleInputChange}  onKeyDown={(e) => e.key === 'Enter' && globalSearch()}/>
            <AiOutlineSearch className='search-icon' onClick={globalSearch} />
          </div>
        </div> 
        <ul className='list-items'> 
          <li  className='user-name-span-card'>
          {username ? (
          <span >Hii, {username}</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
          </li>
          <li> 
            
            <Stack fontSize='10px' direction="row" spacing={2}> 
        
              <Badge style={{marginTop:'10px',fontSize:'7px'}} badgeContent={(cartItems || 0)} color="warning">
              <Avatar style={{ backgroundColor: '#ef5f46' }}>
                <Link to="/cart">
                <ShoppingCartIcon style={{height:'20px',width:'20px'}} className='shop-icon' />
                </Link>
              </Avatar>
              </Badge>
            </Stack>

          </li>
          {/* <li>
          <Stack fontSize='10px' direction="row" spacing={2}>
              <Badge style={{marginTop:'10px',fontSize:'5px'}} badgeContent={2} color="warning">
              <Avatar style={{marginLeft:'10px', backgroundColor: '#ef5f46' }}>
              <AiFillHeart style={{height:'20px',width:'20px'}} className='shop-icon' />
              </Avatar>
              </Badge>
            </Stack>
          </li> */}
          <li>
            <Dropdown>
                          <TriggerButton>
                <Avatar alt="Remy Sharp" src=""/>
              </TriggerButton>
              <Menu slots={{ listbox: StyledListbox }}  className="dropdown-button-profile-card">
                {/* <StyledMenuItem onClick={createHandleMenuClick('product')}>
                  Profile
                </StyledMenuItem>
                <StyledMenuItem onClick={createHandleMenuClick('cart')}>
                  Settings
                </StyledMenuItem> */}
                <StyledMenuItem onClick={handleLogout} color='red' style={{color:'#0b91de',fontWeight:'bold',textAlign:'center'}}> 
                  <i  className="fa fa-sign-out" aria-hidden="true">Logout</i>
                 
                </StyledMenuItem>

              </Menu>
            </Dropdown>
          </li>

        </ul>
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
                id='/mens'
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              >
                MENS
              </LinkButton>

            </li>
            <li>
              <LinkButton
                id='/womens'
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              >
                WOMENS
              </LinkButton>

            </li>

            <li>
              <LinkButton
                id='/category'
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              >
                CATEGORY
              </LinkButton>

            </li>



            {/* <li>
              <Dropdown>
                <TriggerButton><LinkButton
                  id='/category'
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                >
                 
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

            </li> */}

            <li>
              <LinkButton
                id='/contact'
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              >
                CONTACT US
              </LinkButton>
            </li> 
           

            {/* <li>
              <LinkButton
                id='http://localhost:3004/reports'
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              >
                ADMIN PANEL
              </LinkButton>

            </li> */}

          </ul>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
