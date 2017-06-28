import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastService } from "../common/toast.service";
import { ActivatedRoute } from "@angular/router";
@Component({
	template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
			<div class="row">
				<div class="col-md-5" *ngFor="let event of events">
            		<event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
				</div>
			</div>
        </div>
	`
})
export class EventsListComponent implements OnInit{
	events: any
	constructor(private eventService: EventService, private Toast: ToastService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.events = this.route.snapshot.data['events']
	}

	handleThumbnailClick(eventName) {
		this.Toast.success(eventName);
	}
}