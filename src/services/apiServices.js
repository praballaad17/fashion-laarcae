export async function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("displayName");
  localStorage.removeItem("email");
  localStorage.removeItem("username");
  window.location = "/";
}
