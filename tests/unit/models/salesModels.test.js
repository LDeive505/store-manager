const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../models/connection");
const salesModels = require("../../../models/salesModels");

describe("Teste da salesModels", () => {
  describe("1.1 - Teste da função getAll", () => {
    describe(`-Quando há vendas registrados no BD`, async () => {
      before(async () => {
        const execute = [
          [
            {
              id: 3,
              itemsSold: [
                {
                  productId: 1,
                  quantity: 1,
                },
                {
                  productId: 2,
                  quantity: 5,
                },
              ],
            },
          ],
          [],
        ];
        sinon.stub(connection, "execute").resolves(execute);
      });

      after(() => {
        connection.execute.restore();
      });

      it(`-retorna um array de objetos`, async () => {
        const result = await salesModels.getAll();
        expect(result).to.be.an("array");
        expect(result[0]).to.be.an("object");
      });
      it(`-retorna um array de objetos com as propriedades id e itemsSold`, async () => {
        const result = await salesModels.getAll();
        expect(result[0]).to.have.property("id", 3);
        expect(result[0]).to.have.property("itemsSold");
      });
    });
  });

  describe("1.2 - Teste da função getById", () => {
    describe(`-Quando a venda existe`, async () => {
      const execute = [
        {
          id: 3,
          itemsSold: [
            {
              productId: 1,
              quantity: 1,
            },
            {
              productId: 2,
              quantity: 5,
            },
          ],
        },
        [],
      ];
      before(async () => {
        sinon.stub(connection, "execute").resolves(execute);
      });

      after(() => {
        connection.execute.restore();
      });

      it(`-retorna um objeto com a venda`, async () => {
        const result = await salesModels.getById();
        expect(result).to.be.an("object");
      });
      it(`-o objeto possui as propriedades id e itemsSold`, async () => {
        const result = await salesModels.getById();
        expect(result).to.have.property("id", 3);
        expect(result).to.have.property("itemsSold");
      });
    });

    describe(`--Quando a venda não existe no BD`, async () => {
      before(async () => {
        const execute = [[], []];
        sinon.stub(connection, "execute").resolves(execute);
      });

      after(() => {
        connection.execute.restore();
      });

      it(`-retorna undefined`, async () => {
        const result = await salesModels.getById(6);
        expect(result[0]).to.be.undefined;
      });
    });
  });

  describe(`1.3 - Teste da função getISalesIds`, () => {
    describe(`Faz uma inserção`, () => {
      before(async () => {
        sinon.stub(connection, "execute").resolves([[{ id: 1 }, { id: 2 }], []]);
      });

      after(async () => connection.execute.restore());

      it(`retorna um array com o id dos produtos`, async () => {
        const result = await salesModels.getSalesIds();
        expect(result).to.be.an("array");
        expect(result).to.have.lengthOf(2);
        expect(result[0]).to.have.property("id", 1);
        expect(result[0].id).to.equal(1);
      });
    });
  });

  describe(`1.4 - Teste da função create`, () => {
    describe(`Faz uma inserção`, () => {
      before(async () => {
        sinon.stub(connection, "execute").resolves([{ insertId: 1 }, []]);
      });
      after(async () => connection.execute.restore());
      it(`retorna um objeto com o nome do produto e o id da inserção`, async () => {
        const sale = [{ productId: 1, quantity: 1,},{ productId: 2, quantity: 5,}];
        const result = await salesModels.create(sale);
        expect(result).to.be.equal(1);
      });
    });
  });
});
