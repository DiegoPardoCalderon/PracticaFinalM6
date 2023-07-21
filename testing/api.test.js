const chai = require('chai');
const chaiHttp = require('chai-http');

const { app } = require('./../index.js');

chai.use(chaiHttp);

describe('Prueba de Ruta GET /', function () {
    it('Retornar coodigo 200', function (done) {
        chai.request(app).get('/').end(function (err, res) {
            chai.expect(res).to.have.status(200); 
            done();
        })
    })
})
describe('Prueba de ruta GET /:id', function () {
  it('Retorna propiedades nombre, genero, año, autor y id',
  done => chai.request(app).get('/2').end((_, res) => {
      const properties = ['nombre', 'genero', 'año', 'autor', 'id']
      properties.forEach(attr => chai.expect(res.body).to.have.property(attr))
      done();
  })
)
})