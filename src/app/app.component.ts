import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slot-counter-angular11';

  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

  mouseenter(): void {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave(): void {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
