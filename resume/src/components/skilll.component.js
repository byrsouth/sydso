export class SkillComponent{

	skillsspan = document.createElement('span');

	constructor(id, placeholder){
		const input = document.createElement('input');
		input.id = id;
		input.placeholder = placeholder;
		this.skillsspan.appendChild(input);
	}

	renderComponent(){
		return this.skillsspan;	
	}
}
