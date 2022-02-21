/* eslint-disable eqeqeq */
import { Box, Grid, TextField, Typography, Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import User from "../../models/User";
import { cadastroUsuario } from '../../services/Service'
import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import'./CadastroUsuario.css';

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/login")
            console.log(userResult)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha && user.senha.length >= 8){
        cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
        alert('Usuário cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit = { onSubmit }>
                        <Typography variant='h6' gutterBottom color ='textPrimary' component='h3' align='center' className='textos2'>Ainda não tem uma conta? Cadastre-se</Typography>
                        <TextField
                            value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            id='nome'
                            label='nome'
                            variant ='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                            placeholder='Insira seu nome completo'
                        />
                        <TextField
                            value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            id='usuario'
                            label='usuario'
                            variant ='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                            placeholder="Insira um e-mail válido"
                        />
                        <TextField
                            value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                            id='senha'
                            label='senha'
                            variant ='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                            placeholder="Mínimo de 8 caracteres"
                            required
                        />
                        <TextField
                            value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha'
                            label='confirmar senha'
                            variant ='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                            placeholder="As senhas devem ser idênticas"
                            required
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>

            </Grid>

        </Grid>
    );
}

export default CadastroUsuario