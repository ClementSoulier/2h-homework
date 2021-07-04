import { AbstractRestEntity, Entity, EntityProperty, RestEntityDescriptor } from 'ng-fluxify';

@Entity(
  new RestEntityDescriptor({
    name: 'User',
    route: 'http://localhost:4200/assets/mock-data/users.json',
  }),
)
export class UserEntity extends AbstractRestEntity {
  @EntityProperty({ type: Number, primary: true })
  public id: number;

  @EntityProperty({ type: String })
  public name: string;
}
