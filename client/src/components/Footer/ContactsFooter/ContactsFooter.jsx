import React from 'react';
import {Box, Link as MaterialUILink, List, ListItemIcon, Typography} from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {format} from 'date-fns'
import {Link as RouterLink} from 'react-router-dom'
import {styled} from '@mui/material/styles';

const StyledTypography = styled(Typography)(() => ({
    color: '#FFF',
    fontSize: '14px',
    fontWeight: '200',
    paddingBottom: '15px',
}));
const HoverStyledTypography = styled(StyledTypography)(() => ({
    '&:hover': {
        textDecoration: 'underline',
    },
}));

function ContactsFooter() {
    return (
        <Box component='div' sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Typography variant="body1" component='span' sx={{
                color: '#FFF',
                fontSize: '20px',
                fontWeight: '600',
                lineHeight: "24px",
                "&:hover": {textDecoration: 'underline'}
            }}>
                <MaterialUILink href="tel:+38 (066) 000 00 00" underline="none" color="inherit">+38 (066) 000 00
                    00</MaterialUILink>
            </Typography>
            <Typography variant="body1" component='span' m={1} sx={{
                color: '#DFB48B',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: "17px",
                "&:hover": {textDecoration: 'underline'}
            }}><MaterialUILink href="mailto:someNew@gmail.com" underline="none"
                               color="inherit">someNew@gmail.com</MaterialUILink>
            </Typography>
            <List sx={{width: '100%', padding: '40px 0 50px 0'}}>
                <ListItemIcon sx={{color: '#b9a897', display: 'flex', justifyContent: 'space-between'}}>
                    <MaterialUILink href='https://facebook.com/' color="inherit" target="_blank"
                                    rel="noopener noreferrer"><FacebookOutlinedIcon/></MaterialUILink>
                    <MaterialUILink href='https://www.twitter.com/' color="inherit" target="_blank"
                                    rel="noopener noreferrer"><TwitterIcon/></MaterialUILink>
                    <MaterialUILink href='https://www.instagram.com/' color="inherit" target="_blank"
                                    rel="noopener noreferrer"><InstagramIcon/></MaterialUILink>
                    <MaterialUILink href='https://www.youtube.com/' color="inherit" target="_blank"
                                    rel="noopener noreferrer"><YouTubeIcon/></MaterialUILink>
                </ListItemIcon>
            </List>
            <Box component='div'>
                <StyledTypography component='p'>
                    © RemontProfi – будівельно-ремонтна <br/>компанія у Києві, 2008 - {format(new Date(), 'yyyy')}
                </StyledTypography>
                <HoverStyledTypography component='p'>
                    <MaterialUILink href='#' color="inherit" underline="none" target="_blank" rel="noopener noreferrer">Розробка
                        та маркетинг- WE</MaterialUILink>
                </HoverStyledTypography>
                <HoverStyledTypography component='p'>
                    <MaterialUILink component={RouterLink} target="_blank" to='privacy' underline="none"
                                    color="inherit">Політика конфіденційності </MaterialUILink>
                </HoverStyledTypography>
            </Box>
        </Box>

    );
}

export default ContactsFooter;