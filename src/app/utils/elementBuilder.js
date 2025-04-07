export class ElementBuilder {
  constructor(tag) {
    this.element = document.createElement(tag);
  }

  setProps(props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key === "className") {
        this.element.className = value;
      } else if (key.startsWith("data-")) {
        this.element.setAttribute(key, value);
      } else if (key === "textContent") {
        this.element.textContent = value;
      } else {
        this.element[key] = value;
      }
    });
    return this;
  }

  appendChildren(children) {
    children.forEach((child) => {
      if (typeof child === "string") {
        this.element.append(document.createTextNode(child));
      } else {
        this.element.append(child);
      }
    });
    return this;
  }

  build() {
    return this.element;
  }
}
