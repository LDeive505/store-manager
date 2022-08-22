const { expect } = require("chai");
const { describe, it } = require("mocha");
const sinon = require("sinon");
const productsControllers = require("../../../controllers/productsControllers");
const productsServices = require("../../../services/productsServices");

describe("1 - Testes da productControllers", () => {
  const response = {};
  const request = {};
  
  describe("1.1 - Teste da função getProducts", () => {
    const returned = [{ id: 1, name: "Produto 1" }, { id: 2, name: "Produto 2" }];  
    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsServices, "getProducts").resolves(returned);
    });

    after(() => productsServices.getProducts.restore());

    it(`-Quando há produtos registrados no BD, retorna o status 200`, async () => {
      await productsControllers.getProducts(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });
    
    it('e um array de objetos', async () => {
      await productsControllers.getProducts(request, response);
      expect(response.json.calledWith(returned)).to.be.true;
    });
  });

/*   describe("1.2 - Teste da função getProductById", () => {
    describe(`--Quando o produto existe no BD`, async () => {
      before(async () => {
        const execute = { id: 1, name: "Produto 1" };
        sinon.stub(productsModels, "getById").resolves(execute);
      });
      after(() => {
        productsModels.getById.restore();
      });

      it(`-retorna um objeto com as propriedades id e name`, async () => {
        const result = await productsServices.getProductById(1);
        expect(result).to.be.an("object");
        expect(result).to.have.property("id", 1);
        expect(result).to.have.property("name", "Produto 1");
      });
    });

    describe(`--Quando o produto não existe no BD`, async () => {
      before(async () => {
        sinon.stub(productsModels, "getById").resolves(undefined);
      });

      after(() => {
        productsModels.getById.restore();
      });

      it(`-retorna undefined`, async () => {
        const result = await productsServices.getProductById(6);
        expect(result).to.be.undefined;
      });
    });
  });

  describe(`1.3 - Teste da função create`, () => {
    describe(`Faz uma inserção`, () => {
      before(async () => {
        sinon
          .stub(productsModels, "create")
          .resolves({ id: 1, name: "Produto 1" });
      });
      after(async () => productsModels.create.restore());
      it(`retorna um objeto com o nome do produto e o id da inserção`, async () => {
        const name = "Produto 1";
        const result = await productsServices.createProduct(name);
        expect(result.id).to.be.equal(1);
        expect(result.name).to.be.equal(name);
      });
    });
  }); */
});
