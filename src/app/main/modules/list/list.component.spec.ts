import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { take } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgFluxifyModule } from 'ng-fluxify';
import { environment } from '../../../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'twohours-core';
import { HttpMockInterceptor } from '../../../http-mock-interceptor';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        CoreModule,
        HttpClientModule,
        NgFluxifyModule.initialize({
          enableStoreLogger: false,
          enableDynamicStateMutability: true,
        }),
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpMockInterceptor,
          multi: true,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect tickets to be loaded', async () => {
    const tickets = await component.tickets$.pipe(take(1)).toPromise();
    expect(tickets).toBeTruthy();
  });
});
