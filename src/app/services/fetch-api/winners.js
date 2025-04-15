const BASE_URL = "http://localhost:3000";

export async function getWinners(page = 1, limit = 4) {
  const res = await fetch(`${BASE_URL}/winners?_page=${page}&_limit=${limit}`);
  return res.json();
}

export async function getWinner(id) {
  const res = await fetch(`${BASE_URL}/winners`);
  return res.json();
}

export async function addWinner(data) {
  const res = await fetch(`${BASE_URL}/winners`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateWinner(id, data) {
  const res = await fetch(`${BASE_URL}/winners/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteWinner(id) {
  const res = await fetch(`${BASE_URL}/winners/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to delete winner with id ${id}`);
  }
  return { success: true, id };
}
