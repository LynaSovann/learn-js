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
getAllUsers();
```

Fetch all users using fetch API with async/await

```js
const fetchUsers = async () => {
  const users = await fetch(BASE_URL);
  const jsonUsers = await users.json();
  console.log(await jsonUsers);
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
getOneUser(1);
```

Fetch one user using fetch API with async/await

```js
const getOneUser = async (userId) => {
  const user = await fetch(`${BASE_URL}/${userId}`);
  const jsonData = await user.json();
  console.log(await jsonData);
};
getOneUser(1);
```

### Add new user

Add new user using fetch API then...catch

```js
const addNewUser = (user) => {
  fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(user),
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

Add new user using fetch API with async/await

```js
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
```

### Result

![Add new user result](imgs/add-result.png)

### Delete new user

Delete user by id using fetch API then...catch

```js
const deleteUser = (userId) => {
  fetch(`${BASE_URL}/${userId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
deleteUser(1);
```

Delete user using fetch API with async/await

```js
const deleteUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/${userId}`, {
    method: "DELETE",
  });
  const jsonRes = await res.json();
  console.log(await jsonRes);
};
deleteUser(1);
```

### Result

![Add new user result](imgs/delete-result.png)

## Update user Info

Update user using fetch API then...catch

```js
const updateUser = (userId, body) => {
  fetch(`${BASE_URL}/${userId}`, {
    method: "PUT",
    body: JSON.stringify(body),
  })
    .then((data) => data.json())
    .then((res) => console.log(res));
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
```

Update user using fetch API with async/await

```js
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
```

### Result

![Update new user info](imgs/update-result.png)

## XML HttpRequest

## Get all Users

Fetch all users using XMLHttpRequest with then...catch

```js
const getAllUsers = () => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
    };
    xhr.send();
  });
  return promise;
};

getAllUsers()
  .then((data) => data)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

Fetch all users using XMLHttpRequest with async/await

```js
const getAllUsers = () => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
    };
    xhr.send();
  });
  return promise;
};
const fetchAllUsers = async () => {
  try {
    const users = await getAllUsers();
    console.log(await users);
  } catch (e) {
    console.log(e);
  }
};
fetchAllUsers();
```

Fetch one user using XMLHttpRequest with then...catch

```js
const fetchOneUser = () => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", BASE_URL);
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
    };
    xhr.send();
  });
  return promise;
};

fetchOneUser()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Fetch one user using XMLHttpRequest with async/await

```js
const fetchOneUser = (userId) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${BASE_URL}/${userId}`);
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
    };
    xhr.send();
  });
  return promise;
};
const getOneUser = async (userId) => {
  try {
    const user = await fetchOneUser(userId);
    console.log(await user);
  } catch (e) {
    console.log(e);
  }
};
getOneUser(1);
```

Add new user using XMLHttpRequest then...catch

```js
const addNewUserRequest = (body) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL);
    xhr.responseText = "json";
    xhr.onload = function () {
      if (xhr.status === 201) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
    };
    xhr.send(JSON.stringify(body));
  });
  return promise;
};

addNewUserRequest({
  name: "Lyna",
  username: "lyna_sovann",
  email: "sovannlyna2004@gmail.com",
  address: {},
  phone: "0123456789",
  website: "myblog.fake.website",
  company: {},
})
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
```

Add new user using XMLHttpRequest async/await

```js
const addNewUserRequest = (body) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL);
    xhr.responseText = "json";
    xhr.onload = function () {
      if (xhr.status === 201) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
    };
    xhr.send(JSON.stringify(body));
  });
  return promise;
};
const fetchAddNewUser = async () => {
  try {
    const res = await addNewUserRequest({
      name: "Lyna",
      username: "lyna_sovann",
      email: "sovannlyna2004@gmail.com",
      address: {},
      phone: "0123456789",
      website: "myblog.fake.website",
      company: {},
    });
    console.log(await res);
  } catch (e) {
    console.log(e);
  }
};
fetchAddNewUser();
```

Update user using XMLHttpRequest then...catch

```js
const fetchUpdateUser = ({ userId, body }) => {
  const promsie = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.responseType = "json";
    req.open("PUT", `${BASE_URL}/${userId}`);
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
    };

    req.send(JSON.stringify(body));
  });
  return promsie;
};
fetchUpdateUser({
  userId: 1,
  body: {
    name: "Lyna",
    username: "lyna_sovann",
    email: "sovannlyna2004@gmail.com",
    address: {},
    phone: "0123456789",
    website: "myblog.fake.website",
    company: {},
  },
})
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
```

Update user using XMLHttpRequest async/await

```js
const fetchUpdateUser = ({ userId, body }) => {
  const promsie = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.responseType = "json";
    req.open("PUT", `${BASE_URL}/${userId}`);
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
    };

    req.send(JSON.stringify(body));
  });
  return promsie;
};

const updateUser = async ({ userId, body }) => {
  try {
    const res = await fetchUpdateUser({ userId, body });
    console.log(await res);
  } catch (e) {
    console.log(e);
  }
};
updateUser({
  userId: 1,
  body: {
    name: "Lyna",
    username: "lyna_sovann",
    email: "sovannlyna2004@gmail.com",
    address: {},
    phone: "0123456789",
    website: "myblog.fake.website",
    company: {},
  },
});
```

Delete user using XMLHttpRequest then...catch

```js
const fetchDeleteUser = (userId) => {
  const promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("DELETE", `${BASE_URL}/${userId}`);
    req.onload = () => {
      if (req.status === 200) {
        resolve(`Delete user with id = ${userId} successfully`);
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
      console.log(req.status);
      console.log(req.response);
      resolve(req.response);
    };
    req.send();
  });
  return promise;
};

fetchDeleteUser(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

Delete user using XMLHttpRequest async/await

```js
const fetchDeleteUser = (userId) => {
  const promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("DELETE", `${BASE_URL}/${userId}`);
    req.onload = () => {
      if (req.status === 200) {
        resolve(`Delete user with id = ${userId} successfully`);
      } else {
        reject({
          message: "Please try again",
          error: "Failed to retrive data",
        });
      }
      console.log(req.status);
      console.log(req.response);
      resolve(req.response);
    };
    req.send();
  });
  return promise;
};
const deleteUserById = async (userId) => {
  try {
    const res = await fetchDeleteUser(userId);
    console.log(await res);
  } catch (e) {
    console.log(e);
  }
};
deleteUserById(1);
```
