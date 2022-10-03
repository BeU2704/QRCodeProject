import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { optioncs } from 'src/app/models/optioncs';

@Component({
  selector: 'app-vcard',
  templateUrl: './vcard.component.html',
  styleUrls: ['./vcard.component.css']
})
export class VcardComponent implements OnInit {

  constructor() { }
  options: string[] = ['Việt Nam', 'USA', 'Italy', 'Thái Lan', 'Nga'];
  filteredOptions!: string[];
  status = '';
  op_tion: optioncs = {
    data: " ",
    image: '',
    witdth: 300,
    height: 300,
    margin: 0,
    dotstyle: "square",
    cornersDot_type: 'None',
    cornerSquareType: 'None',
    dotcolor: '#000000',
    background_color: '#ffffff',
    shape: 'square'
  };
  ngOnInit(): void {
    this.filteredOptions = this._filter('');
  }
  change_quocgia(gt: string) {
    this.filteredOptions = this._filter(gt || '');
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
