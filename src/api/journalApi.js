import axios from "axios"

export const baseUrl ='https://vue-journalapp-7f401-default-rtdb.firebaseio.com'


const journalApi = axios.create({
    baseURL : baseUrl,
})


export default journalApi