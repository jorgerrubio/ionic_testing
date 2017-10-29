import { Component, Input } from '@angular/core';


@Component({
	selector: 'button-explosion',
	templateUrl: 'button-explosion.html'
})
export class ButtonExplosionComponent {

	@Input('iconNane') iconName: string;

	htmlBoxStyles: StylesCss = new StylesCss();
	htmlIconStyles: StylesCss = new StylesCss();

	@Input('boxColor') set _boxColor (boxColor: string){
		this.htmlBoxStyles.color = boxColor;
	}
	@Input('iconColor') set _iconColor (iconColor: string){
		this.htmlIconStyles.color = iconColor;
	}

	constructor() {
		if(!this.iconName)
			this.iconName  = 'favorite';
	}

	explosion(box: HTMLElement) {
		box.classList.add('animate');
		box.addEventListener('animationend', () => box.classList.remove('animate'));
	}

	getBoxStyles(){
		return this.htmlBoxStyles;
	}

	getIconStyles(){
		return this.htmlIconStyles;
	}

}

export class StylesCss{
	'color': string;

	constructor(color?: string){
		this.color = (color) ? color : 'chocolate';
	}
}
