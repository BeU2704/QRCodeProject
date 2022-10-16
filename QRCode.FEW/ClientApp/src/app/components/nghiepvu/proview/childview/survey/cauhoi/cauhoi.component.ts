import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { cauhoi } from 'src/app/models/cauhoi';

@Component({
  selector: 'app-cauhoi',
  templateUrl: './cauhoi.component.html',
  styleUrls: ['./cauhoi.component.css']
})
export class CauhoiComponent implements OnInit {

  constructor() { }
  @Input() cauhoi_in: cauhoi = {
    name: '',
    visible_index: 0,
    noidung: '',
    type: '',
    element: [],
    dapan: ''
  };
  @Input() form!: FormGroup;
  ngOnInit(): void {
    console.log(JSON.stringify(this.cauhoi_in));
  }
  them_cautl() {
    debugger;
    let temp_arr = this.cauhoi_in.element;
    temp_arr.push('');
    this.cauhoi_in.element = temp_arr;
  }
}
