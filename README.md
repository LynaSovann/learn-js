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

## XML HttpRequest