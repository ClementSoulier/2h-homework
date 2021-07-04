import {AbstractRestEntity, Entity, EntityProperty, ManyToOne, RestEntityDescriptor} from 'ng-fluxify';
import {forwardRef} from "@angular/core";
import {UserEntity} from "./user.entity";
import {Observable} from "rxjs";

@Entity(
  new RestEntityDescriptor({
    name: 'Ticket',
    route: 'http://localhost:4200/assets/mock-data/tickets.json',
  }),
)
export class TicketEntity extends AbstractRestEntity {
  @EntityProperty({ type: Number, primary: true })
  public id: number;

  @EntityProperty({ type: Boolean })
  public completed: boolean;

  @EntityProperty({ type: Number })
  public assigneeId: number;

  @ManyToOne({ entity: forwardRef(() => UserEntity), foreignKey: 'assigneeId' })
  public user$: Observable<UserEntity>;

  @EntityProperty({ type: String })
  public description: string;
}
