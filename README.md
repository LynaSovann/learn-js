## fetch API 
```bash
https://jsonplaceholder.typicode.com/users
```

### Get all users 
Fetch all users using fetch API with then...catch
```js
const getAllUsers = () => {
  fetch(BASE_URL)
    .then((data) => data.json())
    .then((user) => console.log(user));
};
```
Fetch all users using fetch API with async/await
```js
const fetchUsers = async () => {
  const users = await fetch(BASE_URL);
  const jsonUsers = await users.json();
  console.log(await jsonUsers)
};
fetchUsers();
```
### Get one user
Fetch one user using fetch API then...catch
```js
const getOneUser = (userId) => {
  fetch(`${BASE_URL}/${userId}`)
    .then((data) => data.json())
    .then((data) => console.log(data));
};
```
Fetch one user using fetch API with async/await
```js
const getOneUser = async (userId) => {
  const user = await fetch(`${BASE_URL}/${userId}`);
  const jsonData = await user.json();
  console.log(await jsonData);
};
```
### Add new user
```js
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
```
Result 
![Alt text](imgs/add-result.png)

## XML HttpRequest