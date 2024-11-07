import React from 'react'
import { Box } from '@mui/material'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import "./index.css"
import { NavLink, useLocation } from 'react-router-dom';
import { adminSideNavbarData } from './adminSideNavbarData';

const SideNavbar = () => {
  // const location = useLocation();

  const activeStyle = {
    backgroundColor: "#FFE3D4",
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '15px',
    margin: '0px',
    padding: '0px',
    paddingRight: '0px',
    color: '#FE5B00',
    borderRadius: '5px 5px 0px 0px',
    // filter: 'invert(0.5) sepia(1) saturate(5) hue-rotate(0deg)'
  };

  const style = {
    color: '#585F71',
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '15px',
  }

  return (
    <Box className={`sideMenuMain !w-full h-full drop-shadow-md bg-white`}>
      {adminSideNavbarData?.map((item, index) => {
          return (
            <nav key={index}>
              <List className={`navItems `} sx={{ marginBottom: "0.5rem", marginTop: "0.5rem", paddingTop: 0, paddingBottom: "2px" }}>
                <ListItem disablePadding >
                  <NavLink
                    to={item?.link}
                    style={
                      ({ isActive }) => isActive ? activeStyle : style
                    }
                    className={`w-full`}
                    onClick={() => {
                      if (item?.name === "Logout") {
                        localStorage.clear()
                      }
                    }}
                  >
                    <ListItemButton className='py-4'>
                      <ListItemIcon>
                        {/* <img src={location?.pathname === item?.link ? item?.colorIcon : item?.icon} alt="icon" className="" /> */}
                      </ListItemIcon>
                      <p className={`capitalize`}>{item?.name}</p>
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              </List>
            </nav>
          )
        }) 
      }
    </Box>
  )
}

export default SideNavbar