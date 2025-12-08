const BASE_URL = `https://api.escuelajs.co/api/v1`;
const formEl = document.querySelector("form");
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailEl = formEl.querySelector(".email");
  const passwordEl = formEl.querySelector(".password");
  const email = emailEl.value;
  const password = passwordEl.value;
  const token = await requestLogin(email, password);
  if (token) {
    localStorage.setItem("access_token", token.access_token);
    localStorage.setItem("refresh_token", token.refresh_token);
    window.location.href = "ex02.html";
  }
});

const requestLogin = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("unauthorize");
    }
    const data = await response.json();
    return data;
  } catch {
    return false;
  }
};
