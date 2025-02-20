const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const addNewUser = async (body) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const user = await res.json();
  console.log(await user);
};

addNewUser({
  name: "Lyna",
  username: "lyna_sovann",
  email: "sovannlyna2004@gmail.com",
  address: {},
  phone: "0123456789",
  website: "myblog.fake.website",
  company: {},
});
