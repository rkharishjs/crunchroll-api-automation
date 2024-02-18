//import controller
import controller from '../controller/species.controller';

//test cases for species resource in below describe block
describe('Species', ()=>{

    describe('Get All Species',()=>{
        it('GET /species/',async()=>{
            const res= await controller.getSpecies();
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(37);
            expect(res.body.results.length).toBe(10);
        })
       
    });

    describe('Get Species By ID',()=>{
        it('GET /species/ by ID',async()=>{
            const res= await controller.getSpeciesById("1");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            var specificSpecies = res.body;

            expect(specificSpecies.name).toBe("Human");
            expect(specificSpecies.classification).toBe("mammal");
            expect(specificSpecies.designation).toBe("sentient");
            expect(specificSpecies.average_height).toBe("180");
            expect(specificSpecies.skin_colors).toBe("caucasian, black, asian, hispanic");
            expect(specificSpecies.hair_colors).toBe("blonde, brown, black, red");
            expect(specificSpecies.eye_colors).toBe("brown, blue, green, hazel, grey, amber");
            expect(specificSpecies.average_lifespan).toBe("120");
            expect(specificSpecies.homeworld).toBe("https://swapi.dev/api/planets/9/");
            expect(specificSpecies.language).toBe("Galactic Basic");
            expect(specificSpecies.people.length).toBe(4);
            expect(specificSpecies.films.length).toBe(6);
            expect(specificSpecies.created).toBe("2014-12-10T13:52:11.567000Z");
            expect(specificSpecies.edited).toBe("2014-12-20T21:36:42.136000Z");
            expect(specificSpecies.url).toBe("https://swapi.dev/api/species/1/");
        })
       
    });

    describe('Search Species By Name',()=>{
        it('Search species by Name',async()=>{
            const res= await controller.searchSpeciesByName("Human");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            var firstSpecies = res.body.results[0];

            expect(firstSpecies.name).toBe("Human");
            expect(firstSpecies.classification).toBe("mammal");
            expect(firstSpecies.designation).toBe("sentient");
            expect(firstSpecies.average_height).toBe("180");
            expect(firstSpecies.skin_colors).toBe("caucasian, black, asian, hispanic");
            expect(firstSpecies.hair_colors).toBe("blonde, brown, black, red");
            expect(firstSpecies.eye_colors).toBe("brown, blue, green, hazel, grey, amber");
            expect(firstSpecies.average_lifespan).toBe("120");
            expect(firstSpecies.homeworld).toBe("https://swapi.dev/api/planets/9/");
            expect(firstSpecies.language).toBe("Galactic Basic");
            expect(firstSpecies.people.length).toBe(4);
            expect(firstSpecies.films.length).toBe(6);
            expect(firstSpecies.created).toBe("2014-12-10T13:52:11.567000Z");
            expect(firstSpecies.edited).toBe("2014-12-20T21:36:42.136000Z");
            expect(firstSpecies.url).toBe("https://swapi.dev/api/species/1/");

        })
       
    });
    
    // negative test cases below

    describe('Get Species By incorrect ID',()=>{
        it('GET /species/ using incorrect Id',async()=>{
            const res= await controller.getSpeciesById("IncorrectId");

            expect(res.statusCode).toBe(404);
            expect(res.body.detail).toContain("Not found");
            console.log(res.body);

        })
       
    });

    describe('Search Species By invalid Name',()=>{
        it('Search species by invalid Name',async()=>{
            const res= await controller.searchSpeciesByName("IncorrectId");

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(0);
            expect(res.body.next).toBe(null);
            expect(res.body.previous).toBe(null);

            expect(res.body.results.length).toBe(0);
            console.log(res.body);

        })
       
    });

    
    describe('Get All Species with incorrect path',()=>{
        it('GET /specie/ - incorrect path',async()=>{
            const res= await controller.getSpeciesIncorrectPath();
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Get Species By ID with incorrect path',()=>{
        it('GET /specie/1 - incorrect path',async()=>{
            const res= await controller.getSpeciesByIdIncorrectPath("1");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Search Species By Name with incorrect path',()=>{
        it('Search species by Name with incorrect path',async()=>{
            const res= await controller.searchSpeciesByNameIncorrectPath("Luke Skywalker");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

     
})  