import axios from "axios";

const snacksApi = axios.create({
    baseURL: 'https://nc-snacks.onrender.com/api/'
});

export const fetchSnacks = () => { 
    return snacksApi.get("snacks").then(({ data: { snacks } }) => { 
        return snacks
    })
};

export const fetchSnackById = (id) => { 
    return snacksApi.get(`snacks/${id}`).then(({ data: { snack } }) => { 
        return snack
    } )
};