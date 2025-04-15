export const controlsForm = (selectedCar) => {
  const selected = !!selectedCar;

  const controlsForm = document.createElement("form");
  controlsForm.className = "garage-controls-form";

  const createContainer = document.createElement("div");
  createContainer.className = "input-container create-container";

  // create name
  const createNameInput = document.createElement("input");
  createNameInput.className = "create-name";
  createNameInput.type = "text";
  createNameInput.name = "createNameInput";

  // create color
  const createColorInput = document.createElement("input");
  createColorInput.className = "create-color";
  createColorInput.type = "color";
  createColorInput.name = "createColorInput";

  // create button
  const createBtn = document.createElement("button");
  createBtn.className = "btn create-car";
  createBtn.type = "button";
  createBtn.textContent = "create";
  createBtn.id = "createCarBtn";

  createContainer.append(createNameInput, createColorInput, createBtn);

  // ============================================== //

  const updateContainer = document.createElement("div");
  updateContainer.className = "input-container update-container";

  // update input
  const updateNameInput = document.createElement("input");
  updateNameInput.className = "update-name";
  updateNameInput.type = "text";
  updateNameInput.name = "updateNameInput";
  updateNameInput.disabled = !selected;
  updateNameInput.value = selected ? selectedCar.name : "";

  // update color
  const updateColorInput = document.createElement("input");
  updateColorInput.className = "update-color";
  updateColorInput.type = "color";
  updateColorInput.name = "updateColorInput";
  updateColorInput.disabled = !selected;
  updateColorInput.value = selected ? selectedCar.color : "#000000";

  // update button
  const updateBtn = document.createElement("button");
  updateBtn.className = "btn update-car";
  updateBtn.type = "button";
  updateBtn.textContent = "update";
  updateBtn.id = "updateCarBtn";
  updateBtn.disabled = !selected;

  updateContainer.append(updateNameInput, updateColorInput, updateBtn);

  controlsForm.append(createContainer, updateContainer);
  return controlsForm;
};
