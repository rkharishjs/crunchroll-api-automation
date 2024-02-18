import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(config.baseUrl);

class PeopleController{
    getPeople(){
    return request.get('/people/')
    }

    getPeopleById(id: string){
        return request.get('/people/'+id);
    }

    searchPeopleByName(name: string){
        return request.get('/people/?search='+name);
    }

    getPeopleIncorrectPath(){
        return request.get('/peopl/')
    }
    
    getPeopleByIdIncorrectPath(id: string){
        return request.get('/peopl/'+id);
    }
    
    searchPeopleByNameIncorrectPath(name: string){
        return request.get('/peopl/search='+name);
    }

}

export default new PeopleController();// this spec call will have access to the brand controller