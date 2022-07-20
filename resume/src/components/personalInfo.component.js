export class PersonlInfoComponent {
  
  mainDiv = null;

  constructor() {
    this.mainDiv = document.createElement('div');
   
    const nameInput = this.createInputComponent('name', "Name", "Enter Name");
    const cityInput = this.createInputComponent('city', 'City', 'Enter City');
    const stateInput = this.createInputComponent('state', 'State', 'Enter State');
    const zipCodeInput = this.createInputComponent('zip', 'Zip Code', 'Enter Zip Code');
    const phoneNumberInput = this.createInputComponent('zip', 'Zip Code', 'Enter Zip Code');
    const emailInput = this.createInputComponent('zip', 'Zip Code', 'Enter Zip Code');
    const socialMediaInput = this.createInputComponent('zip', 'Zip Code', 'Enter Zip Code');

    const nameRow = document.createElement('span');    
    const addressRow = document.createElement('span');
    const contactRow = document.createElement('span');

    

    nameRow.appendChild(nameInput);

    addressRow.appendChild(cityInput);
    addressRow.appendChild(stateInput);
    addressRow.appendChild(zipCodeInput);

    contactRow.appendChild(phoneNumberInput);
    contactRow.appendChild(emailInput);
    contactRow.appendChild(socialMediaInput);
    

    this.mainDiv.appendChild(
      document.createElement('div').appendChild(nameRow)
    );

    this.mainDiv.appendChild(
      document.createElement('div').appendChild(addressRow)
    );

    this.mainDiv.appendChild(
      document.createElement('div').appendChild(contactRow)
    );

    // this.mainDiv.appendChild(
    //   document.createElement('div').appendChild(zipCodeInput)
    // );
    
    // this.mainDiv.appendChild(nameInput);
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

    labelspan.classList.add("block");
    textspan.classList.add("block");

    labelspan.appendChild(nameLabel);
    textspan.appendChild(nameText);

    div.appendChild(labelspan);
    div.appendChild(textspan);
    return div;
  }
}
