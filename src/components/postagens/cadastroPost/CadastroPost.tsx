import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroPost() {

    let history = useHistory();
    const {id} = useParams<{id: string}> ();
    const [tema, setTema] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa fazer login para continuar', {
                position: 'top-right',
                autoClose: 2000,
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

    const [temas, setTemas] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: temas
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagem/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatePostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: temas
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso :)', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso :)', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        }
        back()

    }

    function back() {
        history.push('/posts')
    }

    return (
        <Container maxWidth='sm' className='topo'>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' color='textSecondary' component='h2' align='center'>
                    No que você está pensando?
                </Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatePostagem(e)}  id='titulo' label=' titulo' variant='outlined' name='titulo' margin='normal' fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatePostagem(e)} id='texto' label='texto' variant='outlined' name='texto' margin='normal' fullWidth />

                <FormControl>
                    <InputLabel id='demo-simple-select-helper-label'>
                        Tema
                    </InputLabel>
                    <Select labelId='demo-simple-select-helper-label' 
                    id='demo-simple-select-helper'
                    onChange={(e) => buscaId(`/tema/${e.target.value}`, setTemas, {
                        headers: {
                            'Authorization': token
                        }
                    })}>
                        {
                            tema.map(temas => (
                                <MenuItem value={temas.id}>{temas.descricao}</MenuItem>
                            ))
                        }

                    </Select>
                    <FormHelperText>
                        Escolha um tema para a postagem
                    </FormHelperText>
                    <Button type='submit' variant='contained' color='primary'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroPost