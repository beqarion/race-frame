import { singleTrack } from "./single-track/singleTrack";

export const tracks = () => {
  const tracksSection = document.createElement("section");
  tracksSection.className = "tracks-section";

  const tracksHeading = document.createElement("div");
  tracksHeading.className = "tracks-heading";

  const title = document.createElement("h2");
  title.className = "tracks-title";
  title.textContent = "garage ";
  const carQuant = document.createElement("span");
  carQuant.className = "car-quantity";
  carQuant.textContent = "(6)";
  title.append(carQuant);

  const subTitle = document.createElement("h3");
  subTitle.className = "tracks-subtitle";
  subTitle.textContent = "page ";
  const pageNum = document.createElement("span");
  pageNum.className = "page-num";
  pageNum.textContent = "#1";
  subTitle.append(pageNum);

  tracksHeading.append(title, subTitle);

  const tracks = document.createElement("div");
  tracks.className = "tracks";

  tracks.append(singleTrack(), singleTrack());

  tracksSection.append(tracksHeading, tracks);

  return tracksSection;
};
