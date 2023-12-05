// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import language from './../languages.json'

const Navbar = (props) => {
    const content = language.portugues;
  return (
    <AppBar position="static" className="bg-blue-500">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {language.contact.name}
        </Typography>
        <Button href={'/'} color="inherit">{content.home}</Button>
        <Button color="inherit">{content.about}</Button>
        <Button color="inherit">{content.services}</Button>
        <Button href={'/contact'} color="inherit">{content.contact}</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
