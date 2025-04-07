export const controlsForm = () => {
  const controlsForm = document.createElement("form");
  controlsForm.className = "garage-controls-form";

  const createContainer = document.createElement("div");
  createContainer.className = "input-container create-container";

  const createNameInput = document.createElement("input");
  createNameInput.className = "create-name";
  createNameInput.type = "text";

  const createColorInput = document.createElement("input");
  createColorInput.className = "create-color";
  createColorInput.type = "color";

  const createBtn = document.createElement("button");
  createBtn.className = "btn create-car";
  createBtn.type = "button";
  createBtn.textContent = "create";

  createContainer.append(createNameInput, createColorInput, createBtn);

  const updateContainer = document.createElement("div");
  updateContainer.className = "input-container update-container";

  const updateNameInput = document.createElement("input");
  updateNameInput.className = "update-name";
  updateNameInput.type = "text";

  const updateColorInput = document.createElement("input");
  updateColorInput.className = "update-color";
  updateColorInput.type = "color";

  const updateBtn = document.createElement("button");
  updateBtn.className = "btn update-car";
  updateBtn.type = "button";
  updateBtn.textContent = "update";

  updateContainer.append(updateNameInput, updateColorInput, updateBtn);

  controlsForm.append(createContainer, updateContainer);
  return controlsForm;
};
