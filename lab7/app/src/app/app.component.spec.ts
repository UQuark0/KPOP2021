import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Lab7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lab7');
  });

  it(`check empty name`, () => {
    component.userData.name = '';
    component.checkData();
    fixture.detectChanges();
    let elementText =
      fixture.nativeElement.querySelector('#nameErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty nameProd`, () => {
    component.userData.nameProd = '';
    component.checkData();
    fixture.detectChanges();
    let elementText =
      fixture.nativeElement.querySelector('#nameProdErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty format`, () => {
    component.userData.format = '';
    component.checkData();
    fixture.detectChanges();
    let elementText =
      fixture.nativeElement.querySelector('#formatErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check nonviable format`, () => {
    component.userData.format = '@crab.com';
    component.checkData();
    fixture.detectChanges();
    let elementText =
      fixture.nativeElement.querySelector('#formatErr').textContent;
    expect(elementText).toBe('Ошибка');
  });
  it(`check empty ink`, () => {
    component.userData.ink = '';
    component.checkData();
    fixture.detectChanges();
    let elementText =
      fixture.nativeElement.querySelector('#inkErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty paper q`, () => {
    component.userData.paperQ = '';
    component.checkData();
    fixture.detectChanges();
    let elementText =
      fixture.nativeElement.querySelector('#paperQErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty ekzQ`, () => {
    component.userData.ekzQ = '';
    component.checkData();
    fixture.detectChanges();
    let elementText =
      fixture.nativeElement.querySelector('#ekzQErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check invalid sidesQ`, () => {
    component.userData.sidesQ = '';
    component.checkData();
    fixture.detectChanges();
    let elementText =
      fixture.nativeElement.querySelector('#sidesQErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check invalid masterQ`, () => {
    component.userData.masterQ = '';
    component.checkData();
    fixture.detectChanges();
    let elementText =
      fixture.nativeElement.querySelector('#masterQErr').textContent;
    expect(elementText).toBe('Заполните');
  });
});
