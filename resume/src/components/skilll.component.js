export class SkillComponent {
  skillsspan = document.createElement("span");

  constructor(id, placeholder) {
    const input = document.createElement("input");
    input.id = id;
    input.placeholder = placeholder;
    this.skillsspan.appendChild(input);
  }

  renderComponent() {
    return this.skillsspan;
  }

  static renderReadOnly(e) {
    const skillId = e.id;
    const parent = e.parentElement;
    const element = document.createElement("span");
    const text = document.createTextNode(e.value);
    element.classList.add("readOnlyLink");
    element.appendChild(text);

    element.addEventListener("click", () => {
      this.renderEditable(element);
    });

    const button = document.createElement("button");

    parent.replaceChild(element, e);
    //return element;
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
