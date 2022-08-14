import axios from "axios";

export default {
  GET_BRANDS_FROM_API({ commit }) {
    return axios("brand/list/", {
      method: "GET",
    })
      .then((brands) => {
        commit("SET_BRANDS_TO_STATE", brands.data);
        return brands;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  GET_CATEGORIES_FROM_API({ commit }) {
    return axios("catalog/", {
      method: "GET",
    })
      .then((categories) => {
        commit("SET_CATEGORIES_TO_STATE", categories.data);
        return categories;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
