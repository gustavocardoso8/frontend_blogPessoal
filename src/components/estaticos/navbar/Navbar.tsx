import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/action";
import { toast } from 'react-toastify'; // para notificações personalizadas

function Navbar () {
    const token = useSelector< TokenState, TokenState ['tokens'] > (
        ( state ) => state.tokens
    )
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Desconectado com sucesso', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token !== '') {
        navbarComponent =
        <AppBar position='static'>
                <Toolbar variant='dense'>
                    <Box className='cursor'>
                        <Typography variant='h6' color='inherit'>
                            GustaVerso
                        </Typography>
                    </Box>

                    <Box display='flex' justifyContent='start'>
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6' color='inherit'>
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/postagem' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6' color='inherit'>
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/tema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6' color='inherit'>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant='h6' color='inherit'>
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant='h6' color='inherit'>
                                Sair
                            </Typography>

                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
    }


    return (
        <>
            { navbarComponent }
        </>
    );
}

export default Navbar;