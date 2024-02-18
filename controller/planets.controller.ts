import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(config.baseUrl);

class PlanetsController{
    getPlanets(){
    return request.get('/planets/')
    }

    getPlanetsById(id: string){
        return request.get('/planets/'+id);
    }

    searchPlanetsByName(name: string){
        return request.get('/planets/?search='+name);
    }

    getPlanetsIncorrectPath(){
        return request.get('/planet/')
    }
    
    getPlanetsByIdIncorrectPath(id: string){
        return request.get('/planet/'+id);
    }
    
    searchPlanetsByNameIncorrectPath(name: string){
        return request.get('/planet/search='+name);
    }

}

export default new PlanetsController();//this spec call will have access to the brand controller
