## fetch API 

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

## XML HttpRequest