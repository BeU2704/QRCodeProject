import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { image_obj } from 'src/app/models/image_obj';
import { optioncs } from 'src/app/models/optioncs';

@Component({
  selector: 'app-typeqrcode',
  templateUrl: './typeqrcode.component.html',
  styleUrls: ['./typeqrcode.component.css']
})
export class TypeqrcodeComponent implements OnInit, OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.change_val();
  }
  _mau_chon = 'exist';
  img_select = '';
  @ViewChild("file")
  file!: ElementRef;
  @ViewChild("filepro")
  filepro!: ElementRef;
  openfile() {
    console.log(this.file.nativeElement);
    this.file.nativeElement.click();
  }
  openfilepro() {
    console.log(this.filepro.nativeElement);
    this.filepro.nativeElement.click();
  }
  options_circle: image_obj[] = [
    {
      name: 'IMG1',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/3/caf15228ac8c3fb07ab2f9fd631e23f6.png',
      dotstyle: 'dots',
      cornerSquareType: 'dots',
      cornersDot_type: 'dots',
      background_color: '#229b30',
      dotcolor: '#ffffff'
    },
    {
      name: 'IMG2',
      link_img: 'https://assets.icheck.vn/image/2022/appId_null/1/a43b5b91c65a75536877212714bb1ec7.png',
      dotstyle: 'classy',
      cornerSquareType: 'extra-rounded',
      cornersDot_type: 'None',
      background_color: '#2874af',
      dotcolor: '#ffffff'
    },
    {
      name: 'IMG3',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/1/09f122c99c040f09f278be0872ee2044.png',
      dotstyle: 'square',
      cornerSquareType: 'None',
      cornersDot_type: 'dots',
      background_color: '#b35719',
      dotcolor: '#ffffff'
    },
    {
      name: 'IMG4',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/1/7e90f5c8437cd261d7712c73f5dddd49.png',
      dotstyle: 'classy-rounded',
      cornerSquareType: 'None',
      cornersDot_type: 'None',
      background_color: '#cc1414',
      dotcolor: '#ffffff'
    },
    {
      name: 'IMG5',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/1/a4c2d9b6a49cdb608df42df58fc2ed7c.png',
      dotstyle: 'rounded',
      cornerSquareType: 'None',
      cornersDot_type: 'None',
      background_color: '#4853ea',
      dotcolor: '#d79523'
    },
    {
      name: 'IMG6',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/1/daeb53172c3a465e040cf4b435c5de56.png',
      dotstyle: 'dots',
      cornerSquareType: 'extra-rounded',
      cornersDot_type: 'None',
      background_color: '#201980',
      dotcolor: '#e7dfe7'
    },
  ];
  options_square: image_obj[] = [
    {
      name: 'IMG1',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/82552e6141c33dc923fa0b7526ad135d.png',
      dotstyle: 'square',
      cornerSquareType: 'square',
      cornersDot_type: 'square',
      background_color: '#229b30',
      dotcolor: '#ffffff'
    },
    {
      name: 'IMG2',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/a92567e79a5ee4cf5adff7ce941ae0fe.png',
      dotstyle: 'classy',
      cornerSquareType: 'extra-rounded',
      cornersDot_type: 'None',
      background_color: '#2874af',
      dotcolor: '#ffffff'
    },
    {
      name: 'IMG3',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/6d078cf79f1b4e85412fa942eb22488b.png',
      dotstyle: 'square',
      cornerSquareType: 'None',
      cornersDot_type: 'dots',
      background_color: '#b35719',
      dotcolor: '#ffffff'
    },
    {
      name: 'IMG4',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/e0ed62508cc6717a4acac0eeda43a783.png',
      dotstyle: 'classy-rounded',
      cornerSquareType: 'None',
      cornersDot_type: 'None',
      background_color: '#cc1414',
      dotcolor: '#ffffff'
    },
    {
      name: 'IMG5',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/342fd0a309a1d949eef1e14a38580b9d.png',
      dotstyle: 'rounded',
      cornerSquareType: 'None',
      cornersDot_type: 'None',
      background_color: '#4853ea',
      dotcolor: '#d79523'
    },
    {
      name: 'IMG6',
      link_img: 'https://assets.icheck.vn/image/2022/icheck/5/7c4923185c02702fc2efc7b2df2c77c7.png',
      dotstyle: 'dots',
      cornerSquareType: 'extra-rounded',
      cornersDot_type: 'None',
      background_color: '#201980',
      dotcolor: '#e7dfe7'
    },
  ];

  option_defalut: image_obj[] = [
    {
      name: 'IMG_DF1',
      link_img: 'https://marketing.icheck.vn/qrcode-free/_nuxt/img/shape1.ae290d2.png',
      dotstyle: 'square',
      cornerSquareType: 'None',
      cornersDot_type: 'None',
      background_color: '#ffffff',
      dotcolor: '#000000'
    },
    {
      name: 'IMG_DF2',
      link_img: 'https://marketing.icheck.vn/qrcode-free/_nuxt/img/shape2.2f8f162.png',
      dotstyle: 'dots',
      cornerSquareType: 'square',
      cornersDot_type: 'dots',
      background_color: '#ffffff',
      dotcolor: '#000000'
    },
    {
      name: 'IMG_DF3',
      link_img: 'https://marketing.icheck.vn/qrcode-free/_nuxt/img/shape3.9327936.png',
      dotstyle: 'dots',
      cornerSquareType: 'None',
      cornersDot_type: 'None',
      background_color: '#ffffff',
      dotcolor: '#000000'
    }
  ];

  profesional = true;

  @Input() data = 'localhost';
  image = '';
  witdth = 300;
  height = 300;
  margin = 0;
  dotstyle = "square"; //"square" hoặc "dots"
  dotcolor = '#000000';
  background_color = '#ffffff';
  shape = 'circle' //"square" hoặc "circle"
  cornersDot_type = 'None';
  cornerSquareType = 'None';
  op_tion: optioncs = new optioncs();

  ngOnInit(): void {
    this.shape = this.profesional ? 'circle' : 'square';
    this._mau_chon = this.profesional ? 'exist' : 'self';
    this.change_val();
  }
  onHinhChange(gt: string) {
    this.shape = gt;
    this.change_val();
  }
  onMauChange(gt: string) {
    this._mau_chon = gt;
  }
  change_maunen() {
    console.log(this.background_color);
    this.change_val();
  }
  change_maucode() {
    console.log(this.dotcolor);
    this.change_val();
  }
  select_img(img_name: string) {
    this.img_select = img_name;
    if (this._mau_chon == 'exist') {
      this.chon_mau_exist(img_name);
    } else {
      this.chon_mau_self(img_name);
    }
  }
  chon_mau_exist(temlate_name: string) {
    if (this.shape == 'circle') {
      let temp_data = this.options_circle.filter(ft => ft.name == temlate_name);
      this.setpro_template(temp_data[0]);
    }
    else {
      let temp_data = this.options_square.filter(ft => ft.name == temlate_name);
      this.setpro_template(temp_data[0]);
    }
  }
  chon_mau_self(temlate_name: string) {
    let temp_data = this.option_defalut.filter(ft => ft.name == temlate_name);
    this.setpro_template(temp_data[0]);
  }

  setpro_template(obj_template: image_obj) {
    this.dotstyle = obj_template.dotstyle;
    this.cornerSquareType = obj_template.cornerSquareType;
    this.cornersDot_type = obj_template.cornersDot_type;
    this.background_color = obj_template.background_color;
    this.dotcolor = obj_template.dotcolor;
    this.change_val();
  }
  @Output() option_output = new EventEmitter<optioncs>();

  change_val() {
    this.op_tion = {
      data: this.data,
      image: this.image,
      witdth: this.witdth,
      height: this.height,
      margin: this.margin,
      dotstyle: this.dotstyle,
      cornersDot_type: this.cornersDot_type,
      cornerSquareType: this.cornerSquareType,
      dotcolor: this.dotcolor,
      background_color: this.background_color,
      shape: this.shape
    };
    this.option_output.emit(this.op_tion);
  }
  getFiles(event: any) {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event2: any) => { // called once readAsDataURL is completed
        this.image = event2.target.result;
        this.change_val();
      }
    }
  }

}
