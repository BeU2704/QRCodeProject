import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Inputcustom } from 'src/app/models/Inputcustom';

@Component({
  selector: 'app-addinput',
  templateUrl: './addinput.component.html',
  styleUrls: ['./addinput.component.css']
})
export class AddinputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() out_data = new EventEmitter<Inputcustom>();
  @Output() out_exist = new EventEmitter<boolean>();
  @Output() out_delete = new EventEmitter<string>();
  @Input() dynamic_num = 0;
  @Input() type_input = 'text';
  add_input(tieude: any, _value: any) {
    this.dynamic_num = this.dynamic_num + 1;
    let tmp = {
      Title: tieude.value,
      name: 'txt_dynamic_' + this.dynamic_num,
      is_require: true,
      is_visible: true,
      type: 'text',
      element: [],
      is_delete: true,
      value_ip: _value.value
    };
    this.out_data.emit(tmp);
    tieude.value = '';
  }
  exit_form() {
    this.out_exist.emit(false);
  }
  delete_input(gt: string) {
    this.out_delete.emit(gt);
  }
}
