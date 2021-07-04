import {Component, Input} from '@angular/core';
import {TicketEntity} from "../../../../../core/entities";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  @Input() ticket: TicketEntity

}
