export class BusinessReferenceComponent {
  div = document.createElement("div");
  constructor(id) {
    const nameInput = document.createElement("input");
    const contactInput = document.createElement("input");
    const urlInput = document.createElement("input");

    nameInput.id = `name_${id}`;
    nameInput.placeholder = "Reference Name";
    nameInput.style.margin = "10px";

    contactInput.id = `contact_${id}`;
    contactInput.placeholder = " Phone Number";

    urlInput.id = `url_${id}`;
    urlInput.placeholder = "URL";
    urlInput.style.margin = "10px";
	
    this.div.appendChild(nameInput);
    this.div.appendChild(contactInput);
    this.div.appendChild(urlInput);
  }

  renderComponent() {
    return this.div;
  }
}
