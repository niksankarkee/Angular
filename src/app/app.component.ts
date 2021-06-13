import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'practical-project';

  pageHeading = 'Welcome to Angular world!';

  successMsg = true;
  successFlag = true;

  superPower = 'heMan';

  colVal = 2;

  imgUrl = 'test.png';
  imgAlt = 'This is missing Image text';
  textColorVal = 'blue';
  pageCount = 10;

  userObject = { firstName: 'Niksan', lastName: 'Karkee' };
  isUserLoggedIn = true;

  styleProp = 'red';

  username = '';
  month = 12;

  txtColor = '';

  lowerCaseExample = 'NIKSAN KARKEE';
  upperCaseExample = 'niksan karkee';
  dateExample = Date.now();
  jsonExample = { userName: 'niksan', major: 'Angular', remarks: 'Nothing' };
  currencyExample = 123;
  percentExample = 0.6454;

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

  sayHello() {
    console.log('Hello from Angular');
  }

  highlightBGColor(a: number, b: number, c: number) {
    console.log('I am being highlighted!!' + (a + b + c));
  }

  inputBox() {
    console.log('This is inputbox');
  }
}
