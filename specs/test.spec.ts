//import controller
import controller from '../controller/test.controller';

//test cases for vehicles resource in below describe block
describe('Test', ()=>{

    describe('test', ()=>{
        it('post test', async()=>{
            const body1 = {
                name : 'harish',
                age : 20
            }

            const response = await controller.testPostCall(body1);

            expect(response.statusCode).toBe(200);
            expect(response.body.name).toBe('harish');
            expect(response.body.age).toBe('20');

        })
    })
     
})  