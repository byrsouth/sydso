export class PersonlInfoComponent {
  
  mainDiv = null;

  constructor() {
    this.mainDiv = document.createElement('div');
   
    const nameInput = this.createInputComponent('name', "Name", "Enter Name");
    const cityInput = this.createInputComponent('city', 'City', 'Enter City');
    const stateInput = this.createInputComponent('state', 'State', 'Enter State');
    const zipCodeInput = this.createInputComponent('zip', 'Zip Code', 'Enter Zip Code');
    const phoneNumberInput = this.createInputComponent('phoneNumber', 'Phone Number', 'Enter Phone Number');
    const emailInput = this.createInputComponent('email', 'E-Mail', 'Enter e-mail');
    const socialMediaInput = this.createInputComponent('socialMedia', 'Social Media', 'Enter Social Media');

    const table = document.createElement('table');    

    const nameRow = this.createTableRow(this.createTableData(nameInput));
    const addressRow = this.createTableRow(this.createTableData(cityInput));
    addressRow.appendChild(this.createTableData(stateInput))
    addressRow.appendChild(this.createTableData(zipCodeInput));
    
    const contactRow = this.createTableRow(this.createTableData(phoneNumberInput));
    contactRow.append(this.createTableData(emailInput));
    contactRow.appendChild(this.createTableData(socialMediaInput));
                                ;
    table.appendChild(nameRow);
    table.appendChild(addressRow);
    table.appendChild(contactRow);
    this.mainDiv.appendChild(table);   
  }
  
  renderComponent() {
    return this.mainDiv;
  }
  
  createInputComponent(id, lableText, placeholder) {    
    const div = document.createElement("span");
    const labelspan = document.createElement("span");
    const textspan = document.createElement("span");
    const nameLabel = document.createElement("label");
    const nameText = document.createElement("input");

    nameLabel.innerText = lableText;
    nameText.id = id;
    nameText.placeholder = placeholder;

    labelspan.classList.add('personalInfo');
    textspan.classList.add('personalInfo');

    labelspan.appendChild(nameLabel);
    textspan.appendChild(nameText);

    div.appendChild(labelspan);
    div.appendChild(textspan);
    return div;
  }

  createTableData(element){
   const td = document.createElement('td');
   td.appendChild(element);
   return td;
  }

  createTableRow(td){
    const tr = document.createElement('tr');
    tr.appendChild(td);
    return tr;
  }
}
