import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss']
})
export class PageBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'My Deals';
  currentPage: string = "myDeals";

  changeTitle(activeComponentTitle: string){
    this.title = activeComponentTitle;
  }

  changePage(pageTitle: string){
    this.currentPage = pageTitle;
  }
}
