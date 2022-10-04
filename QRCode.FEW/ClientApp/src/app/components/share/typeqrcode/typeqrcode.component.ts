import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { image_obj } from 'src/app/models/image_obj';

@Component({
  selector: 'app-typeqrcode',
  templateUrl: './typeqrcode.component.html',
  styleUrls: ['./typeqrcode.component.css']
})
export class TypeqrcodeComponent implements OnInit {

  constructor() { }
  _pprofesional = false;
  _hinh_chon = 'circle';
  _mau_chon = 'exist';
  img_select = '';

  options_circle: image_obj[] = [
    {
      name: 'IMG1',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/3/caf15228ac8c3fb07ab2f9fd631e23f6.png'
    },
    {
      name: 'IMG2',
      link_img: 'https://assets.icheck.vn/image/2022/appId_null/1/a43b5b91c65a75536877212714bb1ec7.png'
    },
    {
      name: 'IMG3',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/1/09f122c99c040f09f278be0872ee2044.png'
    },
    {
      name: 'IMG4',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/1/7e90f5c8437cd261d7712c73f5dddd49.png'
    },
    {
      name: 'IMG5',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/1/a4c2d9b6a49cdb608df42df58fc2ed7c.png'
    },
    {
      name: 'IMG6',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/1/daeb53172c3a465e040cf4b435c5de56.png'
    },
  ];
  options_square: image_obj[] = [
    {
      name: 'IMG1',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/82552e6141c33dc923fa0b7526ad135d.png'
    },
    {
      name: 'IMG2',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/a92567e79a5ee4cf5adff7ce941ae0fe.png'
    },
    {
      name: 'IMG3',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/6d078cf79f1b4e85412fa942eb22488b.png'
    },
    {
      name: 'IMG4',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/e0ed62508cc6717a4acac0eeda43a783.png'
    },
    {
      name: 'IMG5',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/342fd0a309a1d949eef1e14a38580b9d.png'
    },
    {
      name: 'IMG6',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/7c4923185c02702fc2efc7b2df2c77c7.png'
    },
  ];
  shape_out = '';
  image_out = '';
  mau_nen = '#ffffff';
  mau_code = '#000000';
  profesional = true;

  ngOnInit(): void {
  }
  onHinhChange(gt: string) {
    this._hinh_chon = gt;
  }
  onMauChange(gt: string) {
    this._mau_chon = gt;
  }
  change_maunen() {
    console.log(this.mau_nen);
  }
  change_maucode() {
    console.log(this.mau_code);
  }
  select_img(img_name: string) {
    this.img_select = img_name;
  }
}
