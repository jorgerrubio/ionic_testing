import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ButtonExplosionComponent } from '../components/button-explosion/button-explosion';
import { BymeFabComponent } from '../components/byme-fab/byme-fab';
import { PageListProvider } from '../providers/page-list/page-list';

import { CssAnimationsPage } from '../pages/css-animations/css-animations';
import { HomePage } from '../pages/home/home';

@NgModule({
	declarations: [
		MyApp,
		CssAnimationsPage,
		HomePage,
		ButtonExplosionComponent,
		BymeFabComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		CssAnimationsPage,
		HomePage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
    	PageListProvider,
	]
})
export class AppModule { }
