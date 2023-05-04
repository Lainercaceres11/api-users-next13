export async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const response = await res.json();
  return response.data;
}

export async function getUser(id) {
  const user = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await user.json();
  return data.data;
}
