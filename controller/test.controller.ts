import * as supertest from 'supertest';
import config from '../config/base.config';
const request = supertest(config.baseUrl);

class VehiclesController{
    getVehicles(){
    return request.get('/vehicles/')
    }

    getVehiclesById(id: string){
        return request.get('/vehicles/'+id);
    }

    searchVehiclesByName(name: string){
        return request.get('/vehicles/?search='+name);
    }

    searchVehiclesByModel(model: string){
        return request.get('/vehicles/?search='+model);
    }

    getVehiclesIncorrectPath(){
        return request.get('/vehicle/')
    }
    
    getVehiclesByIdIncorrectPath(id: string){
        return request.get('/vehicle/'+id);
    }
    
    searchVehiclesByNameIncorrectPath(name: string){
        return request.get('/vehicle/search='+name);
    }

    testPostCallToAdd(data:{[key:string]: string | number}){
        return request.post('/postCall')
        .send(data)
    }

}

export default new VehiclesController();//this spec call will have access to the vehicles controller
