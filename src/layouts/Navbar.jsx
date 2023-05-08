import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
import { motion } from 'framer-motion';

const pages = ['Home', 'Skills', 'Projects', 'Contact'];

const Navbar = ({toggleDrawer})=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar 
        component={motion.div}
        initial={{y:'-20vh'}}
        animate={{y:'0vh'}}
        transition={{type:'spring', stiffness:70}}
        position="fixed"
        elevation={0}
        sx={{background:'rgb(0,0,0,0)'}}
        >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        {/* Big screen name*/}
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/youssef-mokhtar"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Cairo',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Youssef Mokhtar
          </Typography>

        {/* Mobile screen menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
          </Box>


        {/* Mobile screen name */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Cairo',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Youssef Mokhtar
          </Typography>


        {/* Big screen menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end' }}>
            {pages.map((page) => (
                <Link
                    whileHover={{rotate:10}}
                    whileTap={{rotate:0}}
                    component={motion.a}
                    href={"#"+page}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ textDecoration: 'none', mx:2, my: 3, color: 'white', display: 'block', fontFamily: 'Cairo', cursor:'pointer'}}
                >
                    {page}
                </Link>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
