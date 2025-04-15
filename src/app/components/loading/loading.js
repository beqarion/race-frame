import "./loading.css";

export function loadingComponent() {
  const div = document.createElement("div");
  div.className = "loading";

  const center = document.createElement("div");
  center.className = "center";

  const span = document.createElement("span");
  span.className = "loading-text";
  span.innerText = "Loading";

  center.append(span);
  div.append(center);

  return div;
}
