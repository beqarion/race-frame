import { winnersBody } from "./winners-body/winnersBody";
export const winnersTable = () => {
  const table = document.createElement("table");
  table.className = "winners-data";

  const columNames = ["Number", "Car", "Name", "Wins", "Best time (seconds)"];

  const tHead = document.createElement("thead");
  const tRow = rowMaker(true, columNames);
  tHead.append(tRow);

  const tBody = winnersBody();

  table.append(tHead, tBody);

  return table;
};

export function rowMaker(head, cellDataArray) {
  const tRow = document.createElement("tr");
  const tagName = head ? "th" : "td";
  const cellArray = cellDataArray.map((cellData) => {
    const cell = document.createElement(tagName);
    cell.textContent = cellData;
    return cell;
  });

  tRow.append(...cellArray);
  return tRow;
}
