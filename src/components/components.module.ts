import { NgModule } from '@angular/core';
import { BymeFabComponent } from './byme-fab/byme-fab';
import { ButtonExplosionComponent } from './button-explosion/button-explosion';
@NgModule({
	declarations: [
		ButtonExplosionComponent,
		BymeFabComponent
	],
	imports: [],
	exports: [
		ButtonExplosionComponent,
		BymeFabComponent
	]
})
export class ComponentsModule {}
