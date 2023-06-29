import React from 'react';
import {Box, List, ListItemText, Typography} from "@mui/material";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const styles = {
    link: {
        textDecoration: 'none',
    },
};
function NavBarElement({title, list}) {

    return (
        <Box component='div' sx={{display: 'flex', flexDirection: 'column',paddingRight:'70px'}}>
            <Typography variant="body1" component='span' sx={{color:'#FFF', fontSize: '15px', '&:hover': {
                    color:'#DFB48B',
                }}}>
                {title}
            </Typography>
            <List >
                {list.map((item, index) => {
                    return(
                        <Link key={index} to='/' style={styles.link}>
                            <ListItemText primary={item} disableTypography={true}  sx={{paddingBottom:'10px', color:'#C7D9E6',fontFamily:'Montserrat,sans-serif',fontSize:'14px',lineHeight: "17px", fontWeight: '200','&:hover':{color:'#DFB48B'}}} />
                        </Link>

                    )
                })}


            </List>
        </Box>
    );
}
NavBarElement.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};
export default NavBarElement;