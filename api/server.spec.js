const supertest = require('supertest');
const server = require("./server.js");

describe('server', () => {
 it("can run tests", () => {
            expect(true).toBeTruthy();
        });

    describe('GET /', () => {
        it('should return status 200', () =>{
            supertest(server)
            .get('/').then(response => {
                expect(response.status).toBe(200);
            })
        })

        it('should run api up', () => {
            return supertest(server)
            .get('/')
            .then(response =>{
                expect(response.body).toEqual({ api: "up"});
                expect(response.body.api).toBeDefined();
                expect(response.body.api).toBe("up");
            })
        })

        it("should return an array", () => {
            return supertest(server)
              .get("/warriors")
              .then(response => {
                expect(Array.isArray(response.body)).toBe(true);
              });
          })



    })
        // describe('get /warriors', () => {
        //     supertest(server)
        //     it('should get array', () =>{
        //         expect(Array.isArray(response.body)).toBe(true);
        //     }
        //     )
        // })


})
