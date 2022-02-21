interface UserLogin {
    id: number // Lembrando que não precisamos necessariamente incluir ponto e vírgula aqui!
    usuario: string
    senha: string
    token?: string | null
}

export default UserLogin