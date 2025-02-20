const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const updateUser = async (userId, body) => {
  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  const jsonRes = await res.json();
  console.log(await jsonRes);
};
updateUser(1, {
  name: "Lyna",
  username: "lyna_sovann",
  email: "sovannlyna2004@gmail.com",
  address: {},
  phone: "0123456789",
  website: "myblog.fake.website",
  company: {},
});
