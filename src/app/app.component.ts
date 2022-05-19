import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'My Deals';
  currentPage: string = "";

  changeTitle(activeComponentTitle: string){
    this.title = activeComponentTitle;
  }

  changePage(pageTitle: string){
    this.currentPage = pageTitle;
  }
}
