import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ActivatedRoute } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgFluxifyModule } from 'ng-fluxify';
import { HttpMockInterceptor } from '../../../http-mock-interceptor';
import { take } from 'rxjs/operators';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [
        HttpClientModule,
        NgFluxifyModule.initialize({
          enableStoreLogger: false,
          enableDynamicStateMutability: true,
        }),
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpMockInterceptor,
          multi: true,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1, // represents the bookId
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect ticket to have same id as route', async () => {
    await component.ngOnInit();
    expect(component.ticket.id).toEqual(1);
  });

  it('expect assignee to have expected ID', async () => {
    await component.ngOnInit();
    const user = await component.ticket.user$.pipe(take(1)).toPromise();
    expect(component.ticket.assigneeId).toEqual(user.id);
  });
});
