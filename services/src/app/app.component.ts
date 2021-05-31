import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'services';
  constructor() {
    window.addEventListener("storage", this.handleStorageEvent);
  }

  ngOnInit() {
    this.product = JSON.parse(localStorage.getItem('data') || '').productSearch;
  }

  product: string;
  add() {
    this.product = JSON.parse(localStorage.getItem('data') || '').productSearch;
  }

  private handleStorageEvent = (event: StorageEvent): void => {
    console.log("changed")
  }
}
