const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  const users = await fetch(BASE_URL);
  const jsonUsers = await users.json();
  console.log(await jsonUsers)
};
fetchUsers();
