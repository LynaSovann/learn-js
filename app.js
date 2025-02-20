const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const deleteUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: "DELETE",
  });
  const jsonRes = await res.json();
  console.log(await jsonRes);
};
deleteUser(1);
