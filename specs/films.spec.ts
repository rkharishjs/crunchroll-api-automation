//import controller
import controller from '../controller/films.controller';

//test cases for films resource in below describe block
describe('Films', ()=>{

    describe('Get All Films',()=>{
        it('GET /films/',async()=>{
            const res= await controller.getFilms();
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(6);
            expect(res.body.results.length).toBe(6);
        })
       
    });

    describe('Get Films By ID',()=>{
        it('GET /films/ by ID',async()=>{
            const res= await controller.getFilmsById("1");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            expect(res.body.title).toBe("A New Hope");
            expect(res.body.episode_id).toBe(4);
            expect(res.body.director).toBe("George Lucas");
            expect(res.body.producer).toBe("Gary Kurtz, Rick McCallum");
            expect(res.body.release_date).toBe("1977-05-25");
            expect(res.body.characters.length).toBe(18);
            expect(res.body.starships.length).toBe(8);
            expect(res.body.vehicles.length).toBe(4);
            expect(res.body.species.length).toBe(5);
            expect(res.body.created).toBe("2014-12-10T14:23:31.880000Z");
            expect(res.body.edited).toBe("2014-12-20T19:49:45.256000Z");
            expect(res.body.url).toBe("https://swapi.dev/api/films/1/");

        })
       
    });

    describe('Search Films By Name',()=>{
        it('Search Films by Name',async()=>{
            const res= await controller.searchFilmsByName("A New Hope");
            console.log(res.body);

            expect(res.statusCode).toBe(200);
            var specificFilm = res.body.results[0];

            expect(specificFilm.title).toBe("A New Hope");
            expect(specificFilm.episode_id).toBe(4);
            expect(specificFilm.director).toBe("George Lucas");
            expect(specificFilm.producer).toBe("Gary Kurtz, Rick McCallum");
            expect(specificFilm.release_date).toBe("1977-05-25");
            expect(specificFilm.characters.length).toBe(18);
            expect(specificFilm.starships.length).toBe(8);
            expect(specificFilm.vehicles.length).toBe(4);
            expect(specificFilm.species.length).toBe(5);
            expect(specificFilm.created).toBe("2014-12-10T14:23:31.880000Z");
            expect(specificFilm.edited).toBe("2014-12-20T19:49:45.256000Z");
            expect(specificFilm.url).toBe("https://swapi.dev/api/films/1/");

        })
       
    });

    describe('Get Films By incorrect ID',()=>{
        it('GET /films/ using incorrect Id',async()=>{
            const res= await controller.getFilmsById("IncorrectId");

            expect(res.statusCode).toBe(404);
            expect(res.body.detail).toContain("Not found");
            console.log(res.body);

        })
       
    });

    describe('Search Films By invalid Name',()=>{
        it('Search Films by invalid Name',async()=>{
            const res= await controller.searchFilmsByName("IncorrectId");

            expect(res.statusCode).toBe(200);
            expect(res.body.count).toBe(0);
            expect(res.body.next).toBe(null);
            expect(res.body.previous).toBe(null);

            expect(res.body.results.length).toBe(0);
            console.log(res.body);

        })
       
    });

    
    describe('Get All Films with incorrect path',()=>{
        it('GET /film/ - incorrect path',async()=>{
            const res= await controller.getFilmsIncorrectPath();
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Get Films By ID with incorrect path',()=>{
        it('GET /film/1 - incorrect path',async()=>{
            const res= await controller.getFilmsByIdIncorrectPath("1");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });

    describe('Search Films By Name with incorrect path',()=>{
        it('Search Films by Name',async()=>{
            const res= await controller.searchFilmsByNameIncorrectPath("A New Hope");
            console.log(res.body);

            expect(res.statusCode).toBe(404);

        })
       
    });
     
})  