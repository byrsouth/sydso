import { HistoryDetail } from "/src/types.js";
export class HistoryComponent {
   
	div = document.createElement('div');
	

	constructor(id, placeholder){
		const span = document.createElement('span');
		const startDatePicker = document.createElement('input');
		const endDatePicker = document.createElement('input');
		const historyTextArea = document.createElement('textarea');
		
		
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
		
		this.div.appendChild(span);
		this.div.appendChild(historyTextArea);		
	}

	renderComponent() {
		return this.div;
	}

}