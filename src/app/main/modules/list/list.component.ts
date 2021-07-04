import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketEntity } from '../../../core/entities';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tickets$: Observable<TicketEntity[]>;

  constructor() {}

  ngOnInit() {
    this.tickets$ = TicketEntity.readAll<TicketEntity>();
  }
}
