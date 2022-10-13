import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Inputcustom } from 'src/app/models/Inputcustom';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogUploadComponent } from 'src/app/shared/dialog-upload/dialog-upload.component';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  DataForm: FormGroup = new FormGroup({});
  payLoad: any;
  data!: Inputcustom[];
  data_macdinh!: Inputcustom[];
  data_mota!: Inputcustom[];
  data_khac!: Inputcustom[];
  dynamic_num = 0;
  ten_input = 'txt';
  src_img = '';
  src_daidien = '';
  src_sanpham = '';
  src_logo = '';
  src_chungchi = '';
  src_mavach = '';
  src_video = '';
  htmlContent = '';
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    //uploadUrl: 'v1/image',
    // upload: (file: File) => { ... },
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  constructor(private dialog: MatDialog) {
    this.data = [{
      Title: 'Mã sản phẩm',
      name: 'Ma_sp',
      is_require: true,
      is_visible: true,
      type: 'text',
      thuoctinh: 'macdinh',
      is_delete: false,
      value_ip: ''
    },
    {
      Title: 'Tên sản phẩm',
      name: 'Ten_sp',
      is_require: true,
      is_visible: true,
      type: 'text',
      thuoctinh: 'macdinh',
      is_delete: false,
      value_ip: ''
    },
    {
      Title: 'Danh mục',
      name: 'Danh_muc',
      is_require: true,
      is_visible: true,
      type: 'dropdown',
      thuoctinh: 'macdinh',
      is_delete: false,
      value_ip: '123'
    },
    {
      Title: 'Giá bán',
      name: 'Gia_sp',
      is_require: true,
      is_visible: true,
      type: 'text',
      thuoctinh: 'macdinh',
      is_delete: false,
      value_ip: ''
    },
    {
      Title: 'Slogan sản phẩm',
      name: 'Slogan_sp',
      is_require: true,
      is_visible: true,
      type: 'text',
      thuoctinh: 'macdinh',
      is_delete: false,
      value_ip: ''
    }];
    this.data_macdinh = this.data.filter(t => t.thuoctinh == 'macdinh');
    this.data_mota = this.data.filter(t => t.thuoctinh == 'mota');
    this.data_khac = this.data.filter(t => t.thuoctinh == 'khac');
    this.DataForm = this.generateFormControls();
  }
  status_type = false;
  ngOnInit(): void {

  }
  PreviewData() {
    this.payLoad = JSON.stringify(this.DataForm.getRawValue());
    // console.log(this.payLoad);
    this.data.forEach(element => {
      element.value_ip = this.DataForm.controls[element.name].value;
    });
    console.log(JSON.stringify(this.data));
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
    if (tmp.thuoctinh == 'khac') {
      this.data_khac.push(tmp);
    }
    if (tmp.thuoctinh == 'mota') {
      this.data_mota.push(tmp);
    }
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
  str_st = '';
  showDialog(gt: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "520px";
    // dialogConfig.height = "310px";
    dialogConfig.panelClass = "pd_dialog_none";
    this.dialog.open(DialogUploadComponent, dialogConfig).afterClosed().subscribe(
      res => {
        if (res != null && res != '' && res != undefined) {
          if (gt == 'daidien') {
            this.src_daidien = '';
            this.src_daidien = res;
          }
          if (gt == 'sanpham') {
            this.src_sanpham = '';
            this.src_sanpham = res;
          }
          if (gt == 'logo') {
            this.src_sanpham = '';
            this.src_logo = res;
          }
        }
      }
    );
  }
}
