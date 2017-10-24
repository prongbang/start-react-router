import axios from 'axios';
import {apiUrl, awesome, config} from '../config';

let createHeader = ()=> {
    let header = {
      'Content-type': 'application/json; charset=utf-8',
      'Accept': 'application/json'
    }
    let accessToken = sessionStorage.getItem("access_token")
    if (!!accessToken) header['Authorization'] = `Bearer ${accessToken}`
    return header
}

export default axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: createHeader()
});