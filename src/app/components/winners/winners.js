import { winnersTable } from "./winners-table/winnersTable";
import "./winners.css";

export const winners = () => {
  const winners = document.createElement("article");
  winners.className = "winners";

  const center = document.createElement("div");
  center.className = "center winner-center";

  const winnersHeading = document.createElement("div");
  winnersHeading.className = "winners-heading";

  const h2 = document.createElement("h2");
  h2.className = "winners-title";
  h2.textContent = "winners ";

  const carSpan = document.createElement("span");
  carSpan.className = "car-quantity";
  carSpan.textContent = "(3)";
  h2.appendChild(carSpan);

  const h3 = document.createElement("h3");
  h3.className = "winners-subtitle";
  h3.textContent = "page #";

  const pageSpan = document.createElement("span");
  pageSpan.className = "page-num";
  pageSpan.textContent = "1";
  h3.appendChild(pageSpan);

  winnersHeading.append(h2, h3);

  const table = winnersTable();

  center.append(winnersHeading, winnersTable());

  winners.append(center);

  return winners;
};
