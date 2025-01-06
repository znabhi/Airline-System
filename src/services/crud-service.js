class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("some error while creating serives,crud service");
    }
  }

  async getById(id) {
    try {
      const response = await this.repository.getById(id);
      return response;
    } catch (error) {
      console.log("some error while getting by id serives,crud service");
    }
  }

  async getAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      console.log("some error while getting all serives,crud service");
    }
  }

  async update(data, id) {
    try {
      const update = await this.repository.update(data, id);
      return update;
    } catch (error) {
      console.log("error in crud service", error);
    }
  }

  async destroy(id) {
    try {
      const response = await this.repository.destroy(id);
      return response;
    } catch (error) {
      console.log("some error while deleting serives,crud service");
    }
  }
}
module.exports = CrudService;
