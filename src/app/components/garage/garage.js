import "./garage.css";

export const garage = () => {
  const garage = document.createElement("article");
  garage.className = "garage";

  const center = document.createElement("div");
  center.className = "center garage-center";

  garage.append(center);

  return { element: garage, center };
};
