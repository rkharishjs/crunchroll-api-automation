//import controller
import controller from '../controller/vehicles.controller';

//test cases for vehicles resource in below describe block
describe('Vechiles', ()=>{

    describe('Get All Vehicles',()=>{
        it('GET /vehicles/',async()=>{
         setTimeout(async ()=>{

            const res= await controller.getVehicles();
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(39);
            expect(res.body.results.length).toBe(10);
        });
        })
       
    });

    describe('Get Vehicles By ID',()=>{
        it('GET /vehicles/ by ID',async()=>{
            const res= await controller.getVehiclesById("4");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe("Sand Crawler");
            expect(res.body.model).toBe("Digger Crawler");
            expect(res.body.manufacturer).toBe("Corellia Mining Corporation");
            expect(res.body.cost_in_credits).toBe("150000");
            expect(res.body.length).toBe("36.8 ");
            expect(res.body.max_atmosphering_speed).toBe("30");
            expect(res.body.crew).toBe("46");
            expect(res.body.passengers).toBe("30");
            expect(res.body.cargo_capacity).toBe("50000");
            expect(res.body.consumables).toBe("2 months");
            expect(res.body.vehicle_class).toBe("wheeled");
            expect(res.body.pilots.length).toBe(0);
            expect(res.body.films.length).toBe(2);
            expect(res.body.created).toBe("2014-12-10T15:36:25.724000Z");
            expect(res.body.edited).toBe("2014-12-20T21:30:21.661000Z");
            expect(res.body.url).toBe("https://swapi.dev/api/vehicles/4/");
        })
    });

    describe('Search Vehicles By Name',()=>{
        it('Search vehicles by Name',async()=>{
            const res= await controller.searchVehiclesByName("Sand Crawler");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            var firstVehicle = res.body.results[0];
            expect(firstVehicle.name).toBe("Sand Crawler");
            expect(firstVehicle.model).toBe("Digger Crawler");
            expect(firstVehicle.manufacturer).toBe("Corellia Mining Corporation");
            expect(firstVehicle.cost_in_credits).toBe("150000");
            expect(firstVehicle.length).toBe("36.8 ");
            expect(firstVehicle.max_atmosphering_speed).toBe("30");
            expect(firstVehicle.crew).toBe("46");
            expect(firstVehicle.passengers).toBe("30");
            expect(firstVehicle.cargo_capacity).toBe("50000");
            expect(firstVehicle.consumables).toBe("2 months");
            expect(firstVehicle.vehicle_class).toBe("wheeled");
            expect(firstVehicle.pilots.length).toBe(0);
            expect(firstVehicle.films.length).toBe(2);
            expect(firstVehicle.created).toBe("2014-12-10T15:36:25.724000Z");
            expect(firstVehicle.edited).toBe("2014-12-20T21:30:21.661000Z");
            expect(firstVehicle.url).toBe("https://swapi.dev/api/vehicles/4/");
        })
       
    });

    describe('Search Vehicles By Model',()=>{
        it('Search vehicles by Model',async()=>{
            const res= await controller.searchVehiclesByModel("Digger Crawler");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            var firstVehicle = res.body.results[0];
            expect(firstVehicle.name).toBe("Sand Crawler");
            expect(firstVehicle.model).toBe("Digger Crawler");
            expect(firstVehicle.manufacturer).toBe("Corellia Mining Corporation");
            expect(firstVehicle.cost_in_credits).toBe("150000");
            expect(firstVehicle.length).toBe("36.8 ");
            expect(firstVehicle.max_atmosphering_speed).toBe("30");
            expect(firstVehicle.crew).toBe("46");
            expect(firstVehicle.passengers).toBe("30");
            expect(firstVehicle.cargo_capacity).toBe("50000");
            expect(firstVehicle.consumables).toBe("2 months");
            expect(firstVehicle.vehicle_class).toBe("wheeled");
            expect(firstVehicle.pilots.length).toBe(0);
            expect(firstVehicle.films.length).toBe(2);
            expect(firstVehicle.created).toBe("2014-12-10T15:36:25.724000Z");
            expect(firstVehicle.edited).toBe("2014-12-20T21:30:21.661000Z");
            expect(firstVehicle.url).toBe("https://swapi.dev/api/vehicles/4/");

        })
       
    });

    // negative test cases below

    describe('Get Vehicles By incorrect ID',()=>{
        it('GET /vehicles/ using incorrect Id',async()=>{
            const res= await controller.getVehiclesById("IncorrectId");

            expect(res.statusCode).toBe(404);
            expect(res.body.detail).toContain("Not found");
            console.log(res.body);

        })
       
    });

    describe('Search Vehicles By invalid Name',()=>{
        it('Search vehicles by invalid Name',async()=>{
            const res= await controller.searchVehiclesByName("IncorrectId");
            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(0);
            expect(res.body.next).toBe(null);
            expect(res.body.previous).toBe(null);

            expect(res.body.results.length).toBe(0);
            console.log(res.body);

        })
       
    });

    describe('Search Vehicles By invalid Model',()=>{
        it('Search vehicles by invalid Model',async()=>{
            const res= await controller.searchVehiclesByModel("IncorrectId");
            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(0);
            expect(res.body.next).toBe(null);
            expect(res.body.previous).toBe(null);

            expect(res.body.results.length).toBe(0);
            console.log(res.body);

        })
       
    });

    
    describe('Get All Vehicles with incorrect path',()=>{
        it('GET /vehicle/ - incorrect path',async()=>{
            const res= await controller.getVehiclesIncorrectPath();
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Get Vehicles By ID with incorrect path',()=>{
        it('GET /vehicle/1 - incorrect path',async()=>{
            const res= await controller.getVehiclesByIdIncorrectPath("1");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Search Vehicles By Name with incorrect path',()=>{
        it('Search vehicles by Name with incorrect path',async()=>{
            const res= await controller.searchVehiclesByNameIncorrectPath("Luke Skywalker");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });
     
})  