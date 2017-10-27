import { Component } from '@angular/core';

@Component({
	selector: 'byme-fab',
	templateUrl: 'byme-fab.html'
})
export class BymeFabComponent {

	constructor() { }

	activeMenu() {
		document.getElementById('float-button').classList.toggle('pulsed');
		document.getElementById('circular-menu').classList.toggle('expand');
	}

}
