//import controller
import controller from '../controller/starships.controller';

//test cases for starships resource in below describe block
describe('Starships', ()=>{

    describe('Get All Starships',()=>{
        it('GET /starships/',async()=>{
            const res= await controller.getStartships();
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(36);
            expect(res.body.results.length).toBe(10);
        })
       
    });

    describe('Get Starships By ID',()=>{
        it('GET /starships/ by ID',async()=>{
            const res= await controller.getStartshipsById("2");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe("CR90 corvette");
            expect(res.body.model).toBe("CR90 corvette");
            expect(res.body.manufacturer).toBe("Corellian Engineering Corporation");
            expect(res.body.cost_in_credits).toBe("3500000");
            expect(res.body.length).toBe("150");
            expect(res.body.max_atmosphering_speed).toBe("950");
            expect(res.body.crew).toBe("30-165");
            expect(res.body.passengers).toBe("600");
            expect(res.body.cargo_capacity).toBe("3000000");
            expect(res.body.consumables).toBe("1 year");
            expect(res.body.hyperdrive_rating).toBe("2.0");
            expect(res.body.MGLT).toBe("60");
            expect(res.body.starship_class).toBe("corvette");
            expect(res.body.pilots.length).toBe(0);
            expect(res.body.films.length).toBe(3);
            expect(res.body.created).toBe("2014-12-10T14:20:33.369000Z");
            expect(res.body.edited).toBe("2014-12-20T21:23:49.867000Z");
            expect(res.body.url).toBe("https://swapi.dev/api/starships/2/");
        })
    });

    describe('Search Starships By Name',()=>{
        it('Search starships by Name',async()=>{
            const res= await controller.searchStartshipsByName("CR90 corvette");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            var firstStarship = res.body.results[0];

            expect(firstStarship.name).toBe("CR90 corvette");
            expect(firstStarship.model).toBe("CR90 corvette");
            expect(firstStarship.manufacturer).toBe("Corellian Engineering Corporation");
            expect(firstStarship.cost_in_credits).toBe("3500000");
            expect(firstStarship.length).toBe("150");
            expect(firstStarship.max_atmosphering_speed).toBe("950");
            expect(firstStarship.crew).toBe("30-165");
            expect(firstStarship.passengers).toBe("600");
            expect(firstStarship.cargo_capacity).toBe("3000000");
            expect(firstStarship.consumables).toBe("1 year");
            expect(firstStarship.hyperdrive_rating).toBe("2.0");
            expect(firstStarship.MGLT).toBe("60");
            expect(firstStarship.starship_class).toBe("corvette");
            expect(firstStarship.pilots.length).toBe(0);
            expect(firstStarship.films.length).toBe(3);
            expect(firstStarship.created).toBe("2014-12-10T14:20:33.369000Z");
            expect(firstStarship.edited).toBe("2014-12-20T21:23:49.867000Z");
            expect(firstStarship.url).toBe("https://swapi.dev/api/starships/2/");

        })
       
    });

    describe('Search Starships By Model',()=>{
        it('Search starships by Model',async()=>{
            const res= await controller.searchStartshipsByModel("CR90 corvette");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            var firstStarship = res.body.results[0];

            expect(firstStarship.name).toBe("CR90 corvette");
            expect(firstStarship.model).toBe("CR90 corvette");
            expect(firstStarship.manufacturer).toBe("Corellian Engineering Corporation");
            expect(firstStarship.cost_in_credits).toBe("3500000");
            expect(firstStarship.length).toBe("150");
            expect(firstStarship.max_atmosphering_speed).toBe("950");
            expect(firstStarship.crew).toBe("30-165");
            expect(firstStarship.passengers).toBe("600");
            expect(firstStarship.cargo_capacity).toBe("3000000");
            expect(firstStarship.consumables).toBe("1 year");
            expect(firstStarship.hyperdrive_rating).toBe("2.0");
            expect(firstStarship.MGLT).toBe("60");
            expect(firstStarship.starship_class).toBe("corvette");
            expect(firstStarship.pilots.length).toBe(0);
            expect(firstStarship.films.length).toBe(3);
            expect(firstStarship.created).toBe("2014-12-10T14:20:33.369000Z");
            expect(firstStarship.edited).toBe("2014-12-20T21:23:49.867000Z");
            expect(firstStarship.url).toBe("https://swapi.dev/api/starships/2/");

        })
       
    });

    // negative test cases below

    describe('Get Starships By incorrect ID',()=>{
        it('GET /starships/ using incorrect Id',async()=>{
            const res= await controller.getStartshipsById("IncorrectId");

            expect(res.statusCode).toBe(404);
            expect(res.body.detail).toContain("Not found");
            console.log(res.body);

        })
       
    });

    describe('Search Starships By invalid Name',()=>{
        it('Search starships by invalid Name',async()=>{
            const res= await controller.searchStartshipsByName("IncorrectId");

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(0);
            expect(res.body.next).toBe(null);
            expect(res.body.previous).toBe(null);

            expect(res.body.results.length).toBe(0);
            console.log(res.body);

        })
       
    });

    describe('Search Starships By invalid Model',()=>{
        it('Search starships by invalid Model',async()=>{
            const res= await controller.searchStartshipsByModel("IncorrectId");

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(0);
            expect(res.body.next).toBe(null);
            expect(res.body.previous).toBe(null);

            expect(res.body.results.length).toBe(0);
            console.log(res.body);

        })
       
    });

    
    describe('Get All Starships with incorrect path',()=>{
        it('GET /starship/ - incorrect path',async()=>{
            const res= await controller.getStartshipsIncorrectPath();
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Get Starships By ID with incorrect path',()=>{
        it('GET /starship/1 - incorrect path',async()=>{
            const res= await controller.getStartshipsByIdIncorrectPath("1");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Search Starships By Name with incorrect path',()=>{
        it('Search species by Name with incorrect path',async()=>{
            const res= await controller.searchStartshipsByNameIncorrectPath("Luke Skywalker");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });
     
})  