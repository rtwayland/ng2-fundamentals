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
		NavBarComponent
	],
	providers: [
		EventService,
		ToastService
	],
	bootstrap: [AppComponent]
})

export class AppModule {
}