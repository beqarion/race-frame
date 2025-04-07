import carImg from "../../../../../assets/images/car.svg";

export const winnersBody = () => {
  const carImage = document.createElement("div");
  carImage.className = "winner-img";
  carImage.innerHTML = `<img class="img" src=${carImg} alt=""
                    style="filter: brightness(0) invert(100%); width:50px">`;
  const DUMMYDATA = {
    number: 1,
    car: carImage,
    name: "Tesla",
    wins: 1,
    time: 10,
  };

  const tBody = document.createElement("tbody");

  const dataArr = Array.from(Object.values(DUMMYDATA)).map((cellData) => {
    const cell = document.createElement("td");
    cell.append(cellData);
    return cell;
  });

  tBody.append(...dataArr);

  return tBody;
};
