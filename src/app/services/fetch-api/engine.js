const BASE_URL = "http://localhost:3000";

export async function startEngine(id) {
  const res = await fetch(`${BASE_URL}/engine?id=${id}&status=started`, {
    method: "PATCH",
  });
  return res.json();
}

export async function stopEngine(id) {
  const res = await fetch(`${BASE_URL}/engine?id=${id}&status=stopped`, {
    method: "PATCH",
  });
  return res.json();
}

export async function driveEngine(id) {
  const res = await fetch(`${BASE_URL}/engine?id=${id}&status=drive`, {
    method: "PATCH",
  });
  return res.json();
}
