const urlBase = 'http://localhost:3000/api';

class AbstractRepository {
  constructor($http, resourceName) {
    'ngInject';

    this.$http = $http;
    this.urlBase = `${urlBase}/${resourceName}`;
  }

  getList(params) {
    return this.$http.get(this.urlBase, {
      params
    }).then((response) => {
      return response.data;
    });
  }

  get(id, params) {
    const endpoint = `${this.urlBase}/${id}`;

    return this.$http.get(endpoint, {
      params
    }).then((response) => {
      return response.data;
    });
  }

  insert(data) {
    return this.$http.post(this.urlBase, data);
  }

  update(id, data) {
    const endpoint = `${this.urlBase}/${id}`;

    return this.$http.put(endpoint, data);
  }

  partialUpdate(id, data) {
    const endpoint = `${this.urlBase}/${id}`;

    return this.$http.patch(endpoint, data);
  }

  remove(id) {
    const endpoint = `${this.urlBase}/${id}`;

    return this.$http.delete(endpoint);
  }
}

export { AbstractRepository };
