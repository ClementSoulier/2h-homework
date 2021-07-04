import { AbstractRestEntity, Entity, EntityProperty, RestEntityDescriptor } from 'ng-fluxify';

@Entity(
  new RestEntityDescriptor({
    name: 'Ticket',
    route: 'http://localhost:4200/assets/mock-data/tickets.json',
  }),
)
export class TicketEntity extends AbstractRestEntity {
  @EntityProperty({ type: Number, primary: true })
  public id: number | undefined;

  @EntityProperty({ type: Boolean })
  public completed: boolean | undefined;

  @EntityProperty({ type: Number })
  public assigneeId: number | undefined;

  @EntityProperty({ type: String })
  public description: string | undefined;
}
