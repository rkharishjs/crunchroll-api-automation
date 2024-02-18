import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(config.baseUrl);

class StarshipsController{
    getStartships(){
    return request.get('/starships/')
    }

    getStartshipsById(id: string){
        return request.get('/starships/'+id);
    }

    searchStartshipsByName(name: string){
        return request.get('/starships/?search='+name);
    }

    searchStartshipsByModel(model: string){
        return request.get('/starships/?search='+model);
    }

    getStartshipsIncorrectPath(){
        return request.get('/startship/')
    }
    
    getStartshipsByIdIncorrectPath(id: string){
        return request.get('/startship/'+id);
    }
    
    searchStartshipsByNameIncorrectPath(name: string){
        return request.get('/startship/search='+name);
    }

}

export default new StarshipsController();//this spec call will have access to the brand controller
