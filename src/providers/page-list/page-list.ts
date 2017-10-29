import { Injectable } from '@angular/core';
import { PageList }  from '../../interfaces/global';

import { CssAnimationsPage } from '../../pages/css-animations/css-animations';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class PageListProvider {

	pages: PageList[] = [
		{ title: 'Home', component: HomePage },
		{ component: CssAnimationsPage, title: 'Css Animations' }
	];

	constructor() { }

	get(): PageList[]{
		return this.pages;
	}

}
