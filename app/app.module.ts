import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { ToastService } from "./common/toast.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventsListResolver } from "./events/events-list-resolver.service";

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