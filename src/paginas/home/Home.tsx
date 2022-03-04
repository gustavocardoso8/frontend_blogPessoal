import { Grid, Box, Typography, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Home.css';

function Home () {

    let history = useHistory();

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa fazer login para continuar', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
            history.push('/login')

        }
    }, [token])
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa'>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant='h4' gutterBottom color='textPrimary' component='h3' align='center' className='titulo'>Olá, seja bem vindo(a)!</Typography>
                        <Typography variant='h6' gutterBottom color='textPrimary' component='h5' align='center' className='titulo'>O que você está pensando hoje?</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                    <Box marginRight={1}>
                        <ModalPostagem />
                    </Box>
                    <Link to ='/posts' className='decoracao'>
                        <Button variant='outlined' className='botao'>Ver Postagens</Button>
                    </Link>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                <img src='https://i.imgur.com/LF5mjWY.jpg' alt='Minha capa do LinkedIn' width='683px' height='200px'/>
                </Grid>
                <Grid xs={12} className='postagens'>     
                    <TabPostagem />
                                  
                </Grid>
        </Grid>
        </>
    );
}

export default Home;