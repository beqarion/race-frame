const BASE_URL = "http://localhost:3000";

export async function getCars(page = 1, limit = 10) {
  const res = await fetch(`${BASE_URL}/garage?_page=${page}&_limit=${limit}`);
  const totalCars = res.headers.get("X-Total-Count");
  const cars = await res.json();
  return { cars, totalCars };
}

export async function createCar(data) {
  const res = await fetch(`${BASE_URL}/garage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteCar(id) {
  const res = await fetch(`${BASE_URL}/garage/${id}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error(`Failed to delete car with id ${id}`);
  }
  return { success: true, id };
}

export async function updateCar(id, data) {
  const res = await fetch(`${BASE_URL}/garage/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
