import "./nav.css";

export const createNavbar = () => {
  const nav = document.createElement("nav");
  nav.className = "nav";

  const center = document.createElement("div");
  center.className = "center nav-center";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "nav-buttons";

  const toGarageBtn = document.createElement("a");
  toGarageBtn.className = "btn to-garage-btn";
  toGarageBtn.textContent = "to garage";
  toGarageBtn.setAttribute("href", "#garage");

  const toWinnersBtn = document.createElement("a");
  toWinnersBtn.className = "btn to-winners-btn";
  toWinnersBtn.textContent = "to winners";
  toWinnersBtn.setAttribute("href", "#winners");

  buttonContainer.append(toGarageBtn, toWinnersBtn);
  center.append(buttonContainer);
  nav.append(center);

  return nav;
};
