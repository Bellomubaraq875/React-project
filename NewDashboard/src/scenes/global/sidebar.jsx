import { React, useContext, useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, colors, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../themes';
import User from "../../data/user.jpg"
// import { ColorModeContext } from '../../themes/ColorModeContext';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutline'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';




const Item = ( {title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const Colors = tokens(theme.palette.mode)
  return(
    <MenuItem 
    active={ selected === title} 
    style={{color: colors.grey[100]}}
    onClick={()=> setSelected(title)}
    icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
  )
}

const  sidebar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');


  return (
    <Box 
    sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },

      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-inner-item.active": {
        color: "#6870fa !important", 
      },
    }}
    >   
    <ProSidebar collapsed= {isCollapsed}>
      <Menu iconShape = "square">
        {/* logo and menu icon */}
        <MenuItem 
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.gray[100],
          }}
        >

          {!isCollapsed && (
            <Box
              display= "flex"
              justifyContent="space-between"
              alignItems= "center"
              ml= "15px"
            >
              <Typography variant ='h5' color={colors.gray[100]}>
                Admin
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>

            </Box>
          )}
        </MenuItem>

        {/* user */}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display='flex' justifyContent= "center" alignItems= "center">
              <img
              alt = "profile-user"
              width = "100px"
              height = "100px"
              src={User}
              style= {{cursor: "pointer", borderRadius: "50%"}}
              />
            </Box>


            <Box textAlign="center">
              <Typography 
              variant='h3'
              color={colors.gray[100]}
              fontWeight="bold"
              sx={{m: "10px 0 0 0"}}
              >
                Bello Mubarak
              </Typography>
              <Typography variant ="h5" color={colors.greenAccent[500]}>
                President Manzee
              </Typography>
            </Box>
          </Box>
        )}

        {/* Menu item */}
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title= "Dashboard"
            to="/"
            icon={<HomeOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant='h6'
            color={colors.gray[300]}
            sx={{m: "15px 0 5px 20px"}}>
            Date
          </Typography>
          
          <Item
            title= "Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title= "Contact Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title= "Invoices Balance"
            to="/invoices"
            icon={<ReceiptOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant='h6'
            color={colors.gray[300]}
            sx={{m: "15px 0 5px 20px"}}>
            Pages
          </Typography>

          <Item
            title= "User Profile"
            to="/form"
            icon={<PersonOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title= "Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title= "FAQ pages"
            to="/faq"
            icon={<HelpOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant='h6'
            color={colors.gray[300]}
            sx={{m: "15px 0 5px 20px"}}>
            Charts
          </Typography>
          <Item
            title= "Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title= "Pie Chart"
            to="/pie"
            icon={<PieChartOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title= "Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title= "Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </ProSidebar>
    </Box>
  )
}

export default sidebar