import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

import {
	EventsListComponent,
	EventThumbnailComponent,
	EventService,
	EventDetailsComponent,
	CreateEventComponent,
	CreateSessionComponent,
	EventRouteActivator,
	EventsListResolver,
	SessionListComponent
} from './events/index'

import { NavBarComponent } from "./nav/navbar.component";
import { ToastService } from "./common/toast.service";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		EventDetailsComponent,
		CreateEventComponent,
		CreateSessionComponent,
		NavBarComponent,
		Error404Component,
		SessionListComponent
	],
	providers: [
		EventService,
		ToastService,
		EventRouteActivator,
		EventsListResolver,
		{
			provide: 'canDeactivateCreateEvent',
			useValue: checkDirtyState
		},
		AuthService
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