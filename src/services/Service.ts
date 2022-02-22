import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://gustaverso.herokuapp.com'
})
// model de cadastro de usuário
    export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
        const resposta = await api.post(url, dados)
        setDados(resposta.data)
    }
// model de login de usuário
    export const login = async(url: any, dados: any, setDados: any) => {
        const resposta = await api.post(url, dados)
        setDados(resposta.data.token)
    }