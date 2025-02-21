"use strict";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const fetchDeleteUser = (userId) => {
  const promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("DELETE", `${BASE_URL}/${userId}`);
    req.onload = () => {
      if (req.status === 200) {
        resolve(`Delete user with id = ${userId} successfully`);
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
      console.log(req.status);
      console.log(req.response);
      resolve(req.response);
    };
    req.send();
  });
  return promise;
};
const deleteUserById = async (userId) => {
  try {
    const res = await fetchDeleteUser(userId);
    console.log(await res);
  } catch (e) {
    console.log(e);
  }
};
deleteUserById(1);
