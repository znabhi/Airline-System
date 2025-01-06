const { where } = require("sequelize");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log(
        "can not be created, some error in crud Repository layer",
        error
      );
    }
  }

  async getById(modelId) {
    try {
      const result = await this.model.findOne({
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log("can not be getting, some error in crud Repository layer");
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log(
        "can not be getting All, some error in crud Repository layer"
      );
    }
  }

  async update(modelId, data) {
    try {
      const update = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      const updatedResponse = await this.model.findOne({
        where: {
          id: modelId,
        },
      });
      return updatedResponse;
    } catch (error) {
      console.log("error on crud repository", error);
    }
  }

  async destroy(modelId) {
    try {
      const dataToDelete = await this.model.findOne({ where: { id: modelId } });
      await this.model.destroy({ where: { id: modelId } });
      return dataToDelete;
    } catch (error) {
      console.log("can not be deleting, some error in crud Repository layer");
    }
  }
}

module.exports = CrudRepository;
