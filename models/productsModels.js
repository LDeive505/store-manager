const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getIds = async () => {
  const [result] = await connection.execute('SELECT id FROM StoreManager.products');
  return result;
};

const getById = async (id) => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return result[0];
};

const create = async (name) => {
  const [result] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  return { id: result.insertId, name };
};

module.exports = {
  getAll,
  getIds,
  getById,
  create,
};