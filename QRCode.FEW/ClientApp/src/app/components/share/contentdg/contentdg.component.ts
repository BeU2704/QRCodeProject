import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contentdg',
  templateUrl: './contentdg.component.html',
  styleUrls: ['./contentdg.component.css']
})
export class ContentdgComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContentdgComponent>) { }

  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close();
  }
  
}
