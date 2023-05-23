import axios from "axios";

const API_KEY = "AIzaSyDywjkO2i4pNlEgnyTlEd4PjyYkD7IZ78M";

async function authenticate(mode: string, credentials: Credentials) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: credentials.email,
    password: credentials.password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUser(credentials: Credentials) {
  return authenticate("signUp", credentials);
}

export function login(credentials: Credentials) {
  return authenticate("signInWithPassword", credentials);
}
