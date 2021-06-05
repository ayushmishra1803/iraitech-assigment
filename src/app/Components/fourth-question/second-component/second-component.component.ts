import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss'],
})
export class SecondComponentComponent implements OnInit {
  @Input() sendData: string;

  constructor() {}

  ngOnInit(): void {}
}
