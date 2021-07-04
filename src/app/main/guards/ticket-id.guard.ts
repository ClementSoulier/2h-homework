import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';
import { TicketEntity } from '../../core/entities';

@Injectable()
export class TicketIdGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const tickets = await TicketEntity.readAll<TicketEntity>().pipe(take(1)).toPromise();
    if (tickets.some((ticket: TicketEntity) => ticket.id === +route.paramMap.get('id'))) {
      return true;
    } else {
      this.router.navigateByUrl('/list');
      return false;
    }
  }
}
