import axios from 'axios';

const baseURL = `https://goblinman-api.herokuapp.com/`

export interface ReturnType {
    id: number,
    name: string,
    turnBonus: number,
    level: number
}

const requests = {
    test: (): Promise<ReturnType[]> => axios.get(`${baseURL}something`).then(res => res.data)
}

export default requests;