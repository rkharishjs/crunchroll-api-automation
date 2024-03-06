import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(config.baseUrl);

class FilmsController{
    getFilms(){
    return request.get('/films/')
    }

    getFilmsById(id: string){
        return request.get('/films/'+id);
    }

    searchFilmsByName(title: string){
        return request.get('/films/?search='+title);
    }

    getFilmsIncorrectPath(){
        return request.get('/film/')
    }
    
    getFilmsByIdIncorrectPath(id: string){
        return request.get('/film/'+id);
    }
    
    searchFilmsByNameIncorrectPath(title: string){
        return request.get('/films/search='+title);
    }

}

export default new FilmsController();// this spec call will have access to the films controller