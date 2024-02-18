import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(config.baseUrl);

class SpeciesController{
    getSpecies(){
    return request.get('/species/')
    }

    getSpeciesById(id: string){
        return request.get('/species/'+id);
    }

    searchSpeciesByName(name: string){
        return request.get('/species/?search='+name);
    }

    getSpeciesIncorrectPath(){
        return request.get('/specie/')
    }
    
    getSpeciesByIdIncorrectPath(id: string){
        return request.get('/specie/'+id);
    }
    
    searchSpeciesByNameIncorrectPath(name: string){
        return request.get('/specie/search='+name);
    }

}

export default new SpeciesController();//this spec call will have access to the brand controller
