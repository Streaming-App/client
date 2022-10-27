import axios from 'axios';

const handleApi = axios.create({
  baseURL: 'http://localhost:3333',
});

export async function userRegister(name, email, password) {
  const data = await handleApi
    .post('/user', {
      name,
      email,
      password,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
}

export async function userLogin(email, password) {
  const data = await handleApi
    .post('/auth/login', {
      email,
      password,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
}
