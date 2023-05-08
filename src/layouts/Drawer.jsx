import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from '@mui/material';
import {motion} from 'framer-motion'
export default function Drawer({drawer, toggleDrawer}) {

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: '100vw', 
            height:'100vh', 
            display:'flex', 
            justifyContent:'center', 
            alignContent:'center'}}
    >
      <List sx={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%'}}>
        {['Home', 'Skills', 'Projects', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemText
                  primary={<Typography variant="body2" style={{ color: 'white', fontSize:'2rem', fontFamily:'Cairo'}}>
                      <Link 
                          href={`#${text}`}
                          sx={{ textDecoration: 'none', color: 'white', fontFamily: 'Cairo', cursor:'pointer'}}
                      >
                        {text}
                      </Link>
                    </Typography>}
                  sx={{display:'flex',alignItems:'center',justifyContent:'center'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{background:'black'}}>
        <React.Fragment>
          <SwipeableDrawer
            PaperProps={{
                sx: {
                  backgroundColor: "#0F2027",
                }
              }}
            open={drawer}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
