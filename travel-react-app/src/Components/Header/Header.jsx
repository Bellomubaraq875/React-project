import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import { Search } from '@mui/icons-material'

import useStyles from './style'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5">Travel Advisor</Typography>

        <Box display="flex" alignItems="center">
          <Typography variant="h6" className={classes.title} sx={{ mr: 2 }}>
            Explore new places
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search here…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
