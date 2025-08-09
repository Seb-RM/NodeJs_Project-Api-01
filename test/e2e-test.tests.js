const chai = require("chai");

const chaiHttp = require("chai-http");
console.log("chaiHttp:", chaiHttp);

chai.use(chaiHttp);
console.log("chai.request existe después del use?", typeof chai.request);

const app = require("../index").app;
const request = chai.request;
const expect = chai.expect;


describe("Suite de pruebas e2e para el buen funcionamiento.", () => {
    it("Esperamos un 'Funcionando en ruta raíz.'", (done) => {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal("Funcionando en ruta raíz.");
                done();
            });
    });
});

const url = "http://localhost:3000";

describe("Inserte el nombre y el precio", ()=>{
    it("Esperamos un name y un price", (done)=>{
        chai.request(url)
        .post("/api/v1/products")
        .send({"name":"Compu", "price":200})
        .end((err,res)=>{
            console.log(res.body);
            expect(res).to.have.status(201);
            done();
        });
    });
});