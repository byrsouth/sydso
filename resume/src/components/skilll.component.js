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

  static renderRenderReadOnly(e) {
    console.log("Parent = " + e.parentElement.id);
    let parent = e.parentElement;

    const element = document.createElement("span");
    const text = document.createTextNode(e.value);
    element.classList.add("readOnlyLink");  

    parent.replaceChild(element, e);
    //return element;
  }
}
