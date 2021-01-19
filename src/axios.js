import axios from 'axios'
import config from './config'

const instance = axios.create({})

instance.defaults.baseURL = config.apiURL

instance.interceptors.request.use(config => {
    console.log('Interceptando requisições: ', config)
    config.data = {
        ...config.data,
        curso: 'Vue JS'
    }

    config.headers.common['Authorization'] = 'Bearer token_jwt'
    config.headers.put['Meu-cabecalho'] = 'Curso VueJS'

    return config

    //tornar a interceptação assíncrona:
    /* return new Promise((resolve) => {
        console.log('Fazendo requisição aguardar... ')
        setTimeout(() => {
            console.log('Enviando requisição... ')
            resolve(config)
        }, 2000)
    }) */
}, error => {
    console.log('Erro ao faze requisição: ', error)
    return new Promise.reject(error)
})

export default instance