import axios from "axios";

export default class Service {
    static async getAll() {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const url = new URL(`http://localhost:8080/api/restaurants`);
        console.log("start");
        const response =  await fetch(url, {
            method:'GET',
            headers:{"Access-Control-Allow-Origin":'*'}}).then(response=>response.json()).catch((err)=>console.log(err));
        console.log("end");
        return response;
    }
    static async getById(id) {
        const url = new URL(`http://localhost:8080/api/restaurants/`+id);
        console.log(id);
        const response =  await fetch(url, {
            method:'GET',
            headers:{"Access-Control-Allow-Origin":'*'}}).then(response=>response.json()).catch((err)=>console.log(err));
        console.log(response);
        return response;
        // const response = await axios.get('http://localhost:8080/api/restaurants'+id);
        // return response;
    }
    static async getResByCuts(id) {
        const url = new URL(`http://localhost:8080/api/reservation/customer/`+id);
        const response =  await fetch(url, {
            method:'GET',
            headers:{"Access-Control-Allow-Origin":'*'}}).then(response=>response.json()).catch((err)=>console.log(err));
        console.log(response);
        return response;
    }
    static async postRes() {
        const url = new URL(`http://localhost:8080/api/reservation/`);
        const response =  await fetch(url, {
            method:'POST',
            body: '',
            headers:{"Access-Control-Allow-Origin":'*'}}).then(response=>response.json()).catch((err)=>console.log(err));
        console.log(response);
        return response;
    }
}