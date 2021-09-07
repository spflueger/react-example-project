const API_ENDPOINT = "http://localhost:8000/api";

export async function signin(username, password) {
  await new Promise((r) => setTimeout(r, 1000));
  return fetch(API_ENDPOINT + "/token/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw res;
    }
  });
}
