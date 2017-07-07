import { Component, OnInit } from '@angular/core';
import { AuthService } from "../user/auth.service";
import { ISession } from "../events/shared/event.model";
import { EventService } from "../events/shared/event.service";

@Component({
	selector: 'navbar',
	templateUrl: 'app/nav/navbar.component.html',
	styles: [`
		.nav.navbar-nav {font-size: 15px}
		#searchForm {margin-right: 100px;}
		@media (max-width: 1200px) {
			#searchForm {display: none;}
        }
		li > a.active {color: #f97924}
	`]
})

export class NavBarComponent implements OnInit {
	searchTerm: string = '';
	foundSessions: ISession[];

	constructor(private auth: AuthService, private eventService: EventService) {	}

	ngOnInit() {
	}

	searchSessions(searchTerm) {
		this.eventService.searchSessions(searchTerm).subscribe(
			sessions => {
				this.foundSessions = sessions;
				console.log(this.foundSessions);
			}
		)
	}
}