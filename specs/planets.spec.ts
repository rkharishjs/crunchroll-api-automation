//import controller
import controller from '../controller/planets.controller';

//test cases for planets resource in below describe block
describe('Planets', ()=>{

    describe('Get All Planets',()=>{
        
        it('GET /planets/',async()=>{
           // setTimeout(async ()=>{
            const res= await controller.getPlanets();
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(60);
            expect(res.body.results.length).toBe(10);
       // },10000); 
        })

    });

    describe('Get Planets By ID',()=>{
        it('GET /planets/ by ID',async()=>{
            const res= await controller.getPlanetsById("1");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe("Tatooine");
            expect(res.body.rotation_period).toBe("23");
            expect(res.body.orbital_period).toBe("304");
            expect(res.body.diameter).toBe("10465");
            expect(res.body.climate).toBe("arid");
            expect(res.body.gravity).toBe("1 standard");
            expect(res.body.terrain).toBe("desert");
            expect(res.body.surface_water).toBe("1");
            expect(res.body.population).toBe("200000");
            expect(res.body.created).toBe("2014-12-09T13:50:49.641000Z");
            expect(res.body.edited).toBe("2014-12-20T20:58:18.411000Z");
            expect(res.body.url).toBe("https://swapi.dev/api/planets/1/");

        })
       
    });

    describe('Search Planets By Name',()=>{
        it('Search Planets by Name',async()=>{
            const res= await controller.searchPlanetsByName("Tatooine");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            var specificPlanet = res.body.results[0];

            expect(specificPlanet.name).toBe("Tatooine");
            expect(specificPlanet.rotation_period).toBe("23");
            expect(specificPlanet.orbital_period).toBe("304");
            expect(specificPlanet.diameter).toBe("10465");
            expect(specificPlanet.climate).toBe("arid");
            expect(specificPlanet.gravity).toBe("1 standard");
            expect(specificPlanet.terrain).toBe("desert");
            expect(specificPlanet.surface_water).toBe("1");
            expect(specificPlanet.population).toBe("200000");
            expect(specificPlanet.created).toBe("2014-12-09T13:50:49.641000Z");
            expect(specificPlanet.edited).toBe("2014-12-20T20:58:18.411000Z");
            expect(specificPlanet.url).toBe("https://swapi.dev/api/planets/1/");

        })
       
    });

    // negative test cases below
    
    describe('Get Planets By incorrect ID',()=>{
        it('GET /planets/ using incorrect Id',async()=>{
            const res= await controller.getPlanetsById("IncorrectId");

            expect(res.statusCode).toBe(404);
            expect(res.body.detail).toContain("Not found");
            console.log(res.body);

        })
       
    });

    describe('Search Planets By invalid Name',()=>{
        it('Search planets by invalid Name',async()=>{
            const res= await controller.searchPlanetsByName("IncorrectId");

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(0);
            expect(res.body.next).toBe(null);
            expect(res.body.previous).toBe(null);

            expect(res.body.results.length).toBe(0);
            console.log(res.body);

        })
       
    });

    
    describe('Get All Planets with incorrect path',()=>{
        it('GET /planet/ - incorrect path',async()=>{
            const res= await controller.getPlanetsIncorrectPath();
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Get Planets By ID with incorrect path',()=>{
        it('GET /planet/1 - incorrect path',async()=>{
            const res= await controller.getPlanetsByIdIncorrectPath("1");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Search Planets By Name with incorrect path',()=>{
        it('Search Planets by Name',async()=>{
            const res= await controller.searchPlanetsByNameIncorrectPath("Tatooine");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

     
})  