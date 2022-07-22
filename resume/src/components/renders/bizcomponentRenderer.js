import { ComponentUtils } from "../utils.component.js";

export class BusinessComponentRenderer {
  static renderReadOnly(element) {
    if (element.childNodes.length > 0) {
      let children = element.childNodes;
      for (let child of children) {
        this.transformElement(child);
      }
    } else {
      this.transformElement(element);
    }
  }

  static renderEditable(e) {
    const parent = e.parentElement;
    console.log("RE Parent: " + parent);
    element.value = e.innerText;
    element.addEventListener("blur", () => {
      console.log("onblur");
      this.renderReadOnly(element);
    });
    parent.replaceChild(element, e);
  }

  static transformElement(child) {
    const elementId = child.id;
    const parent = child.parentElement;
    console.log("RRO Parent: " + parent);
    const span = document.createElement("span");
    const text = document.createTextNode(child.value);
    span.classList.add("readOnlyLink");
    span.appendChild(text);

    span.addEventListener("click", () => {
      this.renderEditable(span);
    });
    parent.replaceChild(span, child);
  }
}
