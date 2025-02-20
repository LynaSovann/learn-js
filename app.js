const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const getOneUser = async (userId) => {
  const user = await fetch(`${BASE_URL}/${userId}`);
  const jsonData = await user.json();
  console.log(await jsonData);
};

getOneUser(2);
