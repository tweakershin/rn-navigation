import { BASE_URL, BASE_API_URL } from './base';

async function registerUser(email, password) {
  const url = `${BASE_API_URL}/auth/register`;

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    // console.log(resp);
    const data = await resp.json();
    return data
  }
  catch (err) {
    console.log("Error발생");
    console.log(JSON.stringify(err))
    return err;
  }
  // console.log(data);
}

async function loginUser(email, password) {
  const url = `${BASE_API_URL}/auth/login`;

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    return await resp.json();
  }
  catch (err) {
    console.log("Error발생")
    console.error(err)
    return err
  }
}

export { registerUser, loginUser }