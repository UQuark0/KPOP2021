import { Component } from '@angular/core';
import { UserRequest } from './user-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lab7';
  public userData: UserRequest = new UserRequest();

  numberREGEXP = /^\d+$/;
  formatREGEX = /^A\d/;

  nameErr = '';
  nameProdErr = '';
  formatErr = '';
  inkErr = '';
  paperQErr = '';
  ekzQErr = '';
  sidesQErr = '';
  masterQErr = '';

  checkData() {
    this.nameErr = '';
    this.nameProdErr = '';
    this.formatErr = '';
    this.inkErr = '';
    this.paperQErr = '';
    this.ekzQErr = '';
    this.sidesQErr = '';
    this.masterQErr = '';
    let sw = true;

    if (this.userData.name === '') {
      this.nameErr = 'Заполните';
      sw = false;
    }

    if (this.userData.nameProd === '') {
      this.nameProdErr = 'Заполните';
      sw = false;
    }

    if (this.userData.format === '') {
      this.formatErr = 'Заполните';
      sw = false;
    } else if (!this.formatREGEX.test(this.userData.format)) {
      this.formatErr = 'Ошибка';
      sw = false;
    }

    if (this.userData.ink === '') {
      this.inkErr = 'Заполните';
      sw = false;
    }

    if (this.userData.paperQ === '') {
      this.paperQErr = 'Заполните';
      sw = false;
    } else if (!this.numberREGEXP.test(this.userData.paperQ)) {
      this.paperQErr = 'Ошибка';
      sw = false;
    }
    if (this.userData.ekzQ === '') {
      this.ekzQErr = 'Заполните';
      sw = false;
    } else if (!this.numberREGEXP.test(this.userData.ekzQ)) {
      this.ekzQErr = 'Ошибка';
      sw = false;
    }
    if (this.userData.sidesQ === '') {
      this.sidesQErr = 'Заполните';
      sw = false;
    } else if (!this.numberREGEXP.test(this.userData.sidesQ)) {
      this.sidesQErr = 'Ошибка';
      sw = false;
    }
    if (this.userData.masterQ === '') {
      this.masterQErr = 'Заполните';
      sw = false;
    } else if (!this.numberREGEXP.test(this.userData.masterQ)) {
      this.masterQErr = 'Ошибка';
      sw = false;
    }

    if (sw) {
      this.userData = new UserRequest();
      alert(
        'aboba'
      );
    }

    //
  }
}
