import { BusinessComponentRenderer } from "./renders/bizcomponentRenderer.js";

export class BusinessReferenceComponent extends BusinessComponentRenderer{
  div = document.createElement("div");
  constructor(id) {
	super();
	this.div.id = id;
    const nameInput = document.createElement("input");
    const contactInput = document.createElement("input");
    const urlInput = document.createElement("input");

    nameInput.id = `name_${id}`;
    console.log(nameInput.id)
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


  static getDetais(id){

	const name  = document.getElementById(`name_${id}`).value;
	const contact = document.getElementById(`contact_${id}`).value;
	const url =document.getElementById(`url_${id}`).value;

	return {
		id:id,
		name:name,
		contact:contact,
		url:url
	}
  }
}
