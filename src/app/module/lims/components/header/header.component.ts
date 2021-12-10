import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  showFiller: boolean = true;
  labs: { name: string; value: string }[] = [
    { name: 'chennai', value: 'chennai' },
    { name: 'UK', value: 'UK' },
  ];
  logopath: string = './assets/logo/dedaluslogo.png';
  ngOnInit(): void {}
}
