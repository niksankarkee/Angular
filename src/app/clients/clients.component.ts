import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientList = [
    { clientId: 10, firstName: 'Riajn', lastName: 'Karkee' },
    { clientId: 11, firstName: 'John', lastName: 'Mike' },
    { clientId: 12, firstName: 'Moon', lastName: 'Srini' },
    { clientId: 13, firstName: 'Cherry', lastName: 'Manuel' },
    { clientId: 14, firstName: 'Berry', lastName: 'Karkee' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
