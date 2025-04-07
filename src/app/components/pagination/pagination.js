import "./pagination.css";

export const pagination = () => {
  const container = document.createElement("nav");
  container.className = "pagination";

  const center = document.createElement("div");
  center.className = "center pagination-center";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "pagination-buttons";

  const prevBtn = document.createElement("button");
  prevBtn.className = "btn prev";
  prevBtn.textContent = "prev";

  const nextBtn = document.createElement("button");
  nextBtn.className = "btn next";
  nextBtn.textContent = "next";

  buttonContainer.append(prevBtn, nextBtn);

  center.append(buttonContainer);

  container.append(center);

  return container;
};
