export const controlButtons = () => {
  const controlButtons = document.createElement("div");
  controlButtons.className = "garage-controls-buttons";

  const raceBtn = document.createElement("button");
  raceBtn.className = "btn garage-control-race";
  raceBtn.textContent = "race";

  const resetBtn = document.createElement("button");
  resetBtn.className = "btn garage-control-reset";
  resetBtn.textContent = "reset";

  const generateBtn = document.createElement("button");
  generateBtn.className = "btn garage-control-generate";
  generateBtn.textContent = "generate cars";

  controlButtons.append(raceBtn, resetBtn, generateBtn);

  return controlButtons;
};
