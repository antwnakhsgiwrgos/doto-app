import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list: string[] = [
    'Sub@SteZTalk',
    'Sub@SteZTalk',
    'Sub@SteZTalk',
    'Sub@SteZTalk',
    'Sub@SteZTalk',
  ];

  constructor() { }

  ngOnInit() {
  }

}
