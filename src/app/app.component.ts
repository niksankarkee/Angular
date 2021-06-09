import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'practical-project';

  successMsg = true;
  successFlag = true;

  superPower = 'heMan';

  styleProp = 'red';

  txtColor = '';

  cssClassExample = 'c3';
  conditionClsProp = 'c4';

  contacts = [
    {
      firstName: 'Niksan',
      lastName: 'Karkee',
      contactId: 1234,
    },
    {
      firstName: 'Pratima',
      lastName: 'Tamang',
      contactId: 4567,
    },
    {
      firstName: 'Rijan',
      lastName: 'Karkee',
      contactId: 98742,
    },
  ];

  getClsName() {
    return 'c3';
  }
}
