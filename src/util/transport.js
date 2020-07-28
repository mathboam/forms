import axios from "axios";

// set base URL
axios.defaults.baseURL = `http://test.nbssiyoungafricaworks.com:8081/webresources`;

const Post = (route, payload) => {
  new Promise((resolve, reject) => {
    axios
      .post(route, payload)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

const Put = (route, payload) =>
  new Promise(function (resolve, reject) {
    axios
      .put(route, payload)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

const Get = (route) =>
  new Promise((resolve, reject) => {
    axios
      .get(route)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

const Delete = (route) =>
  new Promise((resolve, reject) => {
    axios
      .delete(route)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export { Get, Post, Put, Delete };
