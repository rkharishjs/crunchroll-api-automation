//import controller
import controller from '../controller/people.controller';

//test cases for vechiles resource in below describe block
describe('People', ()=>{

    describe('Get All People',()=>{
        it('GET /people/',async()=>{
            const res= await controller.getPeople();
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(82);
            expect(res.body.results.length).toBe(10);
        })
       
    });

    describe('Get People By ID',()=>{
        it('GET /people/ by ID',async()=>{
            const res= await controller.getPeopleById("1");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe("Luke Skywalker");
            expect(res.body.height).toBe("172");
            expect(res.body.mass).toBe("77");
            expect(res.body.hair_color).toBe("blond");
            expect(res.body.skin_color).toBe("fair");
            expect(res.body.eye_color).toBe("blue");
            expect(res.body.birth_year).toBe("19BBY");
            expect(res.body.gender).toBe("male");
            expect(res.body.homeworld).toBe("https://swapi.dev/api/planets/1/");
            expect(res.body.films.length).toBe(4);
            expect(res.body.species.length).toBe(0);
            expect(res.body.vehicles.length).toBe(2);
            expect(res.body.starships.length).toBe(2);
            expect(res.body.created).toBe("2014-12-09T13:50:51.644000Z");
            expect(res.body.edited).toBe("2014-12-20T21:17:56.891000Z");
            expect(res.body.url).toBe("https://swapi.dev/api/people/1/");
        })
       
    });

    describe('Search People By Name',()=>{
        it('Search people by Name',async()=>{
            const res= await controller.searchPeopleByName("Luke Skywalker");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            var specificPerson = res.body.results[0];

            expect(res.body.results.length).toBe(1);
            expect(specificPerson.name).toBe("Luke Skywalker");
            expect(specificPerson.height).toBe("172");
            expect(specificPerson.mass).toBe("77");
            expect(specificPerson.hair_color).toBe("blond");
            expect(specificPerson.skin_color).toBe("fair");
            expect(specificPerson.eye_color).toBe("blue");
            expect(specificPerson.birth_year).toBe("19BBY");
            expect(specificPerson.gender).toBe("male");
            expect(specificPerson.homeworld).toBe("https://swapi.dev/api/planets/1/");
            expect(specificPerson.films.length).toBe(4);
            expect(specificPerson.species.length).toBe(0);
            expect(specificPerson.vehicles.length).toBe(2);
            expect(specificPerson.starships.length).toBe(2);
            expect(specificPerson.created).toBe("2014-12-09T13:50:51.644000Z");
            expect(specificPerson.edited).toBe("2014-12-20T21:17:56.891000Z");
            expect(specificPerson.url).toBe("https://swapi.dev/api/people/1/");
        })
       
    });

        // negative test cases below


    describe('Get People By incorrect ID',()=>{
        it('GET /people/ using incorrect Id',async()=>{
            const res= await controller.getPeopleById("IncorrectId");

            expect(res.statusCode).toBe(404);
            expect(res.body.detail).toContain("Not found");
            console.log(res.body);

        })
       
    });

    describe('Search People By invalid Name',()=>{
        it('Search people by invalid Name',async()=>{
            const res= await controller.searchPeopleByName("IncorrectId");

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(0);
            expect(res.body.next).toBe(null);
            expect(res.body.previous).toBe(null);

            expect(res.body.results.length).toBe(0);
            console.log(res.body);

        })
       
    });

    
    describe('Get All People with incorrect path',()=>{
        it('GET /peopl/ - incorrect path',async()=>{
            const res= await controller.getPeopleIncorrectPath();
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Get Films By ID with incorrect path',()=>{
        it('GET /peopl/1 - incorrect path',async()=>{
            const res= await controller.getPeopleByIdIncorrectPath("1");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Search Films By Name with incorrect path',()=>{
        it('Search people by Name with incorrect path',async()=>{
            const res= await controller.searchPeopleByNameIncorrectPath("Luke Skywalker");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

     
})  