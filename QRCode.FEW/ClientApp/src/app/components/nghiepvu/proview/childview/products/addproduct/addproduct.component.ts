import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Inputcustom } from 'src/app/models/Inputcustom';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  DataForm: FormGroup = new FormGroup({});
  payLoad: any;
  data!: Inputcustom[];
  dynamic_num = 0;
  ten_input = 'txt';
  constructor() {
    this.data = [{
      Title: 'Mã sản phẩm',
      name: 'Ma_sp',
      is_require: true,
      is_visible: true,
      type: 'text',
      element: [],
      is_delete: false,
      value_ip:'1'
    },
    {
      Title: 'Tên sản phẩm',
      name: 'Ten_sp',
      is_require: true,
      is_visible: true,
      type: 'text',
      element: [],
      is_delete: false,
      value_ip:'2'
    }];
    this.DataForm = this.generateFormControls();
  }
  status_type = false;
  ngOnInit(): void {

  }
  PreviewData() {
    this.payLoad = JSON.stringify(this.DataForm.getRawValue());
    console.log(this.payLoad);
  }
  generateFormControls() {
    let tempGroup: FormGroup = new FormGroup({});
    this.data.forEach(element => {
      tempGroup.addControl(element.name, new FormControl(''));
    });
    return tempGroup;
  }
  add_input(tmp: Inputcustom) {
    console.log(tmp);
    this.dynamic_num = this.dynamic_num + 1;
    this.data.push(tmp);
    this.DataForm.addControl(tmp.name, new FormControl(''));
  }
  exit_thempro(gt: boolean) {
    this.status_type = gt;
  }
  delete_input_temp(gt: string) {
    console.log(gt);
    let index = this.data.findIndex(t => t.name == gt);
    this.data.splice(index, 1);
  }
}
