export const authenticate = async() => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const login = async (email, password) => {
  const response = await fetch ('/api/auth/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return await response.json();
};

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await response.json();
}

export const signUp = async (username, email, password, location, artist) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      location,
      artist,
    }),
  });
  return await response.json();
}

export const editBasicInfo = async (payload, id) => {
  const response = await fetch(`/api/auth/basicinfo/${id}`, {
    method: 'PATCH',
    body: payload
  });
  return await response.json();
}

export const editUserName = async (payload, id) => {
  const response = await fetch(`/api/auth/basicinfo/username/${id}`, {
    method: 'PATCH',
    body: payload
  });
  return await response.json();
}

export const uploadProfilePic = async (payload) => {
  const response = await fetch(`/api/auth/basicinfo/profile_pic/upload`, {
    method: 'POST',
    body: payload
  });
  return await response.json();
}

export const editProfilePic = async (payload, id) => {
  const response = await fetch(`/api/auth/basicinfo/profile_pic/${id}`, {
    method: 'PATCH',
    body: payload
  })
  return await response.json();
}