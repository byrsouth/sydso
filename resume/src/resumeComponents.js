export function skillComponent(id, placeholder) {
	const skillsspan = document.createElement('span');
	const input = document.createElement('input');
	input.id = id;
	input.placeholder = placeholder;
	skillsspan.appendChild(input);
	return skillsspan;
}

export function historyComponent(id, placeholder) {
	const span = document.createElement('span');
	const startDatePicker = document.createElement('input');
	const endDatePicker = document.createElement('input');
	const historyTextArea = document.createElement('textarea');
	const div = document.createElement('div');

	const startDateLabel = document.createElement('label');
	const startDateLabelText = document.createTextNode('Start Date ');
	startDateLabel.appendChild(startDateLabelText);

	const endDateLabel = document.createElement('label');
	const endDateLabelText = document.createTextNode('End Date ');
	endDateLabel.appendChild(endDateLabelText);

	endDatePicker.type = 'date';
	endDatePicker.id = `endDate_${id}`;

	startDatePicker.type = 'date';
	startDatePicker.id = `startDate_${id}`;

	span.appendChild(startDateLabel);
	span.appendChild(startDatePicker);

	span.appendChild(endDateLabel);
	span.appendChild(endDatePicker);

	historyTextArea.id = id;
	historyTextArea.class = 'historyDetials';
	historyTextArea.rows = 10;
	historyTextArea.cols = 60;
	historyTextArea.placeholder = placeholder;

	div.appendChild(span);
	div.appendChild(historyTextArea);

	return div;
}

export function businessReferenceComponent(id){
	const div = document.createElement('div');
	const nameInput = document.createElement('input');
	const contactInput = document.createElement('input');
	
	nameInput.id = `name_${id}`;
	nameInput.placeholder = 'Reference Name'
	nameInput.style.margin = "10px";


	contactInput.id = `contact_${id}`
	contactInput.placeholder = ' Phone Number'

	div.appendChild(nameInput);
	div.appendChild(contactInput);

	return div;
}