export class ComponentUtils {

static renderReadOnly(element) {
    let elementId = element.id;
    let children = element.childNodes;
    console.log(element);
    console.log(children[0].value);

    for (let child of children) {
      const elementId = child.id;
      const parent = child.parentElement;
      console.log("Parent: " + parent);
      const span = document.createElement("span");
      const text = document.createTextNode(child.value);
      span.classList.add("readOnlyLink");
      span.appendChild(text);

      const button = document.createElement("button");

      parent.replaceChild(span, child);
    }
  }

  static renderEditable(e) {
    //alert(e.innerText);
    const parent = e.parentElement;
    const element = document.createElement("input");
    element.value = e.innerText;
    element.addEventListener("blur", () => {
      console.log("onblur");
      this.renderReadOnly(element);
    });
    parent.replaceChild(element, e);
  }
}