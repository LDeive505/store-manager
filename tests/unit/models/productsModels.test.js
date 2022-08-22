const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../models/connection");
const productsModels = require("../../../models/productsModels");

describe("1 - Teste da productModels", () => {
  describe("1.1 - Teste da função getAll", () => {
    before(async () => {
      const execute = [
        [
          { id: 1, name: "Produto 1" },
          { id: 2, name: "Produto 2" },
        ],
        [],
      ];
      sinon.stub(connection, "execute").resolves(execute);
    });

    after(() => {
      connection.execute.restore();
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

  describe("1.2 - Teste da função getById", () => {
    describe(`--Quando o produto existe no BD`, async () => {
      before(async () => {
        const execute = [[{ id: 1, name: "Produto 1" }], []];
        sinon.stub(connection, "execute").resolves(execute);
      });
      after(() => {
        connection.execute.restore();
      });

      it(`-retorna um objeto com as propriedades id e name`, async () => {
        const result = await productsModels.getById(1);
        expect(result).to.be.an("object");
        expect(result).to.have.property("id", 1);
        expect(result).to.have.property("name", "Produto 1");
      });
    });

    describe(`--Quando o produto não existe no BD`, async () => {
      before(async () => {
        const execute = [[], []];
        sinon.stub(connection, "execute").resolves(execute);
      });

      after(() => {
        connection.execute.restore();
      });

      it(`-retorna undefined`, async () => {
        const result = await productsModels.getById(6);
        expect(result).to.be.undefined;
      });
    });
  });

  describe(`1.3 - Teste da função create`, () => {
    describe(`Faz uma inserção`, () => {
      before(async () => {
        sinon.stub(connection, "execute").resolves([{ insertId: 1 }, []]);
      });
      after(async () => connection.execute.restore());
      it(`retorna um objeto com o nome do produto e o id da inserção`, async () => {
        const product = "bolina de gorfe";
        const result = await productsModels.create(product);
        expect(result.id).to.be.equal(1);
      });
    });
  });

  describe(`1.4 - Teste da função getIds`, () => {
    describe(`Faz uma inserção`, () => {
      before(async () => {
        sinon
          .stub(connection, "execute")
          .resolves([[{ id: 1 }, { id: 2 }], []]);
      });
      after(async () => connection.execute.restore());
      it(`retorna um array com o id dos produtos`, async () => {
        const result = await productsModels.getIds();
        expect(result).to.be.an("array");
        expect(result).to.have.lengthOf(2);
        expect(result[0]).to.have.property("id", 1);
        expect(result[0].id).to.equal(1);
      });
    });
  });

  describe(`1.5 - Teste da função update`, () => {
    describe(`Faz um update`, () => {
      before(async () => {
        sinon.stub(connection, "execute").resolves([{ insertId: 1 }, []]);
      });
      after(async () => connection.execute.restore());
      it(`retorna um objeto com o nome do produto atualizado e o id`, async () => {
        const result = await productsModels.update(1, 'bolina de gorfe nova');
        expect(result.name).to.equal('bolina de gorfe nova');
        expect(result.id).to.be.equal(1);
      });
    });
  });

  describe(`1.5 - Testa a função deleteById`, () => {
    describe(`Faz um update`, () => {
      before(async () => {
        sinon.stub(connection, "execute").resolves([{ insertId: 1 }, []]);
      });
      after(async () => connection.execute.restore());
      it(`retorna um objeto com o id do produto deletado`, async () => {
        const idForDeletion = 1;
        const result = await productsModels.deleteById(idForDeletion);
        expect(result.id).to.be.equal(1);
      });
    });
  });

});
