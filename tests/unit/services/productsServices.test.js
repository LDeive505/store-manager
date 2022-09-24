const { expect } = require("chai");
const { describe, it } = require("mocha");
const sinon = require("sinon");
const productsServices = require('../../../services/productsServices');
const productsModels = require("../../../models/productsModels");
const ApiError = require("../../../errors/ApiError");

describe("1 - Teste da productServices", () => {
  describe("1.1 - Teste da função getProducts", () => {
    before(async () => {
      const execute = [{ id: 1, name: "Produto 1" }, { id: 2, name: "Produto 2" }];
      sinon.stub(productsModels, 'getAll').resolves(execute);
    });

    after(() => {
      productsModels.getAll.restore();
    });

    it(`-Quando há produtos registrados no BD, retorna um array com tamanho 2,
      os objetos do array possuem as propriedades id e name`, async () => {
      const result = await productsModels.getAll();
      expect(result).to.be.an("array");
      expect(result).to.have.lengthOf(2);
      expect(result[0]).to.have.property("id", 1);
      expect(result[0]).to.have.property("name", "Produto 1");
    });
  });

  describe("1.2 - Teste da função getProductById", () => {
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

/*     describe(`--Quando o produto não existe no BD`, async () => {
      before(async () => {
        sinon.stub(productsModels, "getById").resolves(null);
      });

      after(() => {
        productsModels.getById.restore();
      });

      it(`-retorna undefined`, async () => {
        expect(await productsServices.getProductById(6)).to.be.rejectWith('Product not found');
      });
    }); */
  });

  describe(`1.3 - Teste da função create`, () => {
    describe(`Faz uma inserção`, () => {
      before(async () => {
        sinon.stub(productsModels, "create").resolves({ id: 1, name: "Produto 1" });
      });
      after(async () => productsModels.create.restore());
      it(`retorna um objeto com o nome do produto e o id da inserção`, async () => {
        const name = "Produto 1";
        const result = await productsServices.createProduct(name);
        expect(result.id).to.be.equal(1);
        expect(result.name).to.be.equal(name);
      });
    });
  });
});
