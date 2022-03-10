import React, { ChangeEvent, useState, useEffect } from 'react';
import './Login.css';
import {Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/action';
import { toast } from 'react-toastify';

function Login() {
    let history = useHistory();
    const [token, setToken] = useState('');

    const dispatch = useDispatch()

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin, // chama-se spread operator, espalha todos os atributos existentes dentro de 'UserLogin'
            [e.target.name]: e.target.value
        })
    }

        useEffect(() =>{
            if(token !== ''){
                dispatch(addToken(token))
                history.push('/home')
            }
        }, [token])

    async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            await login(`/usuario/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        }catch(error){
            toast.error('Usuário e/ou senha incorretos. Tente novamente', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined
            });

        }

    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems ='center' xs={6}>
                <Box paddingX ={20}>
                    <form onSubmit={ onSubmit }>
                        <Typography variant='h5'  component='h3' align='center' className='textos1'>Que bom te ver de novo :')</Typography>
                        <TextField
                            value={ userLogin.usuario }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => updateModel(e) }
                            id='usuario'
                            label='usuário'
                            variant ='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            className='caixa'
                        />
                        <TextField
                            value={ userLogin.senha }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => updateModel(e) }
                            id='senha'
                            label='senha'
                            variant ='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                            className='caixa'
                        />
                        <Box marginTop={2} textAlign='center'>

                                <Button type='submit' variant='contained' color='primary'>
                                    Entrar
                                </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Ainda não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastroUsuario'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;