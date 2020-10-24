import SERVER_URL from "./constants.js";
let URL = SERVER_URL;

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function getAllPersons() {
    return fetch(URL + "all")
    .then(handleHttpErrors)
}

function getPersonsByTel(num){
    return fetch(URL + num)
    .then(handleHttpErrors);
}

function getPersonsByZip(zip){
    return fetch(URL + "zip/" + zip)
    .then(handleHttpErrors);
}

function getPersonsByStreet(street){
    return fetch(URL + "street/" + street)
    .then(handleHttpErrors);
}

function getAddressByEmail(email){
    return fetch(URL + "address/" + email)
    .then(handleHttpErrors);
}

function getPersonByHobbyName(name){
    return fetch(URL + "hobby/" + name)
    .then(handleHttpErrors);
}

function countPersonByHobbyName(name){
    return fetch(URL + "count/" + name)
    .then(handleHttpErrors);
}

function addPerson(person) {
    const options = makeOptions("POST", person)
    return fetch(URL + "addperson", options)
    .then(handleHttpErrors)
}

function getAllHobbies(){
    return fetch(URL + "hobby/all")
    .then(handleHttpErrors);
}

function getSingleHobbyName(name){
    return fetch(URL + "singlehobby/" + name)
    .then(handleHttpErrors);
}

const personFacade = {
    getAllPersons,
    getPersonsByTel,
    getPersonsByZip,
    getPersonsByStreet,
    getAddressByEmail,
    getPersonByHobbyName,
    countPersonByHobbyName,
    getAllHobbies,
    getSingleHobbyName,
    addPerson
}

export default personFacade;




