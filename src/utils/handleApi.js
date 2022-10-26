import axios from 'axios';

const handleApi = axios.create({
  baseURL: 'http://localhost:3333',
});

async function userRegister(name, email, password) {
  const data = await handleApi.post('/user', {
    name,
    email,
    password,
  })
  .then((res) => res.data)
  .catch((err) => console.log(err));
  return data;
};

const userLogin = async (email, password) => {
  const { data } = await handleApi.post('/auth/login', {
    email,
    password,
  });
  return data;
};

export default { userRegister, userLogin };
