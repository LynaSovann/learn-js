const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const addNewUser = (user) => {
  fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(user)
  })
    .then((data) => data.json())
    .then((data) => console.log(data));
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
