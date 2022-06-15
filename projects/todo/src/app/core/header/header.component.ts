import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'isi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title!: string;
  constructor() {}

  ngOnInit(): void {
    this.title = 'Learning Angular';
  }

  getTitle() {
    return this.title;
  }
}
