// src/services/api.ts

export const fetchPosts = async () => {
  const response = await fetch("http://localhost:8080/posts");
  return response.json();
};

export const fetchUsers = async () => {
  const response = await fetch("http://localhost:8080/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const json = await response.json();
  console.log("Fetched users raw response:", json);

  // ✅ handle wrapped response
  if (Array.isArray(json)) {
    return json; // normal list of users
  } else if (Array.isArray(json.data)) {
    return json.data; // if response wrapped inside { data: [...] }
  } else {
    throw new Error("Invalid response: expected array or data array");
  }
};
