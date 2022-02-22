import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display='flex' alignItems='center' justifyContent='center'>
                            <Typography variant='h5' align='center' gutterBottom className='textos'>Siga-me nas redes sociais
                            </Typography>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='center'>
                            <a href="https://www.facebook.com/maspoxagu/" target='_blank' rel='noreferrer'>
                                <FacebookIcon className='redes' />
                            </a>
                            <a href='https://www.instagram.com/eeuguu/' target='_blank' rel='noreferrer'>
                                <InstagramIcon className='redes' />
                            </a>
                            <a href='https://www.linkedin.com/in/gustavo-cardoso08/' target='_blank' rel="noreferrer">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a href='https://github.com/gustavocardoso8' target='_blank' rel='noreferrer'>
                                <GitHubIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant='subtitle2' gutterBottom  className='textos' align="center">© 2022 Copyright: All Rights Reserved</Typography>
                        </Box>
                        <Box>
                            <a href='https://brasil.generation.org'>
                                <Typography variant="subtitle2" gutterBottom  className='textos' align='center'>brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;