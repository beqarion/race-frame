import "./nav.css"

export const createNavbar = () => {
  const nav = document.createElement("nav");
  nav.className = "nav";

  const center = document.createElement("div");
  center.className = "center nav-center";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "nav-buttons";

  const toGarageBtn = document.createElement("button");
  toGarageBtn.className = "btn to-garage-btn";
  toGarageBtn.textContent = "to garage";

  const toWinnersBtn = document.createElement("button");
  toWinnersBtn.className = "btn to-winners-btn";
  toWinnersBtn.textContent = "to winners";

  buttonContainer.append(toGarageBtn, toWinnersBtn);
  center.append(buttonContainer);
  nav.append(center);

  return nav;
};
