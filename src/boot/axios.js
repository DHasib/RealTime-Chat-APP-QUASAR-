import Vue from 'vue'
import axios from 'axios'

//  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


const baseURL = axios.create({
    baseURL: 'http://127.0.0.1:8001/'
  })


export default async ({ Vue }) => {
Vue.prototype.$axios = baseURL
}



// Vue.prototype.$axios = axios
