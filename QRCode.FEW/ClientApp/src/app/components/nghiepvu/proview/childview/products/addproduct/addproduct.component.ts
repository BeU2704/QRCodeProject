import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Inputcustom } from 'src/app/models/Inputcustom';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogUploadComponent } from 'src/app/shared/dialog-upload/dialog-upload.component';

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
  src_img = '';

  constructor(private dialog: MatDialog) {
    this.data = [{
      Title: 'Mã sản phẩm',
      name: 'Ma_sp',
      is_require: true,
      is_visible: true,
      type: 'text',
      element: [],
      is_delete: false,
      value_ip: ''
    },
    {
      Title: 'Tên sản phẩm',
      name: 'Ten_sp',
      is_require: true,
      is_visible: true,
      type: 'text',
      element: [],
      is_delete: false,
      value_ip: ''
    },
    {
      Title: 'Giá bán',
      name: 'Gia_sp',
      is_require: true,
      is_visible: true,
      type: 'text',
      element: [],
      is_delete: false,
      value_ip: ''
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
  get_image_upload(gt: any) {
    this.src_img = gt.value;
  }
  str_st='';
  showDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "520px";
    // dialogConfig.height = "310px";
    dialogConfig.panelClass = "pd_dialog_none";
    this.dialog.open(DialogUploadComponent, dialogConfig).afterClosed().subscribe(
      res => {
        this.str_st=res;
        console.log(this.str_st);
      }
    );
  }
}
