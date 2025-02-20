const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = () => {
  fetch(BASE_URL)
    .then((data) => data.json())
    .then((user) => console.log(user));
};

getAllUsers();
