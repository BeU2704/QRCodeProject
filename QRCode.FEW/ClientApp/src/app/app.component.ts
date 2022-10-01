import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContentdgComponent } from './components/share/contentdg/contentdg.component';
import { optioncs } from './models/optioncs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  shownav: boolean = false;
  status = '';
  constructor(private dialog: MatDialog) {

  }
  drawer_click() {
    this.shownav = !this.shownav;
  } 
}
