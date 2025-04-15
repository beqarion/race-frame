const brands = ["Tesla", "Ford", "Toyota", "BMW", "Audi", "Porsche"];
const models = ["Model S", "Mustang", "Camry", "X5", "A4", "911"];

export function generateCarName() {
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const model = models[Math.floor(Math.random() * models.length)];
  return `${brand} ${model}`;
}
