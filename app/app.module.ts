import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import {
	EventsListComponent,
	EventThumbnailComponent,
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator,
	EventsListResolver
} from './events/index'

import { NavBarComponent } from "./nav/navbar.component";
import { ToastService } from "./common/toast.service";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		AppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		EventDetailsComponent,
		CreateEventComponent,
		NavBarComponent,
		Error404Component
	],
	providers: [
		EventService,
		ToastService,
		EventRouteActivator,
		EventsListResolver,
		{
			provide: 'canDeactivateCreateEvent',
			useValue: checkDirtyState
		}
	],
	bootstrap: [AppComponent]
})

export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
	if (component.isDirty) {
		return window.confirm('You have not saved this event. Are you sure you would like to cancel?')
	} else {
		return true
	}
}