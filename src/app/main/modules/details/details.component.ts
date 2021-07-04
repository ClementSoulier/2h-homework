import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketEntity } from '../../../core/entities';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  ticket: TicketEntity;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const ticketId = this.route.snapshot.paramMap.get('id');

    this.ticket = await TicketEntity.read<TicketEntity>(ticketId).pipe(take(1)).toPromise();
  }
}
