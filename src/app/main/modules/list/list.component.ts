import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketEntity } from '../../../core/entities';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tickets$: Observable<TicketEntity[]>;
  ticketsToDo$: Observable<TicketEntity[]>;
  ticketsDone$: Observable<TicketEntity[]>;

  ngOnInit(): void {
    this.tickets$ = TicketEntity.readAll<TicketEntity>();
    this.ticketsToDo$ = this.tickets$.pipe(map((tickets) => tickets.filter((ticket: TicketEntity) => !ticket.completed)));
    this.ticketsDone$ = this.tickets$.pipe(map((tickets) => tickets.filter((ticket: TicketEntity) => ticket.completed)));
  }
}
