import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-my-deals',
  templateUrl: './my-deals.component.html',
  styleUrls: ['./my-deals.component.scss']
})
export class MyDealsComponent implements OnInit {
  newDealSelection: string = "";
  capCostCtrl: FormControl = new FormControl(null);
  markUpCtrl: FormControl = new FormControl(null);
  quoteGroup: FormGroup = new FormGroup({
    capCost: this.capCostCtrl,
    markUp: this.markUpCtrl
  });
  constructor() { }

  ngOnInit(): void {
  }

  setSelection(selection: string){
    this.newDealSelection = selection;
  }

  onSubmit(event: Event){
  }
}
