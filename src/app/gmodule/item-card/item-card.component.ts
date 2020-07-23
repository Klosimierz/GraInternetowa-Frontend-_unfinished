import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.less']
})
export class ItemCardComponent implements OnInit {

  @Input() resItem: any;
  @Input() resItemLevel: number;

  resPrice = {}

  getUpgradeCosts(baseCosts,level) {
    return {
      upgStone: Math.floor(Math.pow(baseCosts.metal,(1+(level*0.14 - 0.14)))),
      upgMetal: Math.floor(Math.pow(baseCosts.metal,(1+(level*0.13 - 0.13)))),
      upgFuel:  Math.floor(Math.pow(baseCosts.metal,(1+(level*0.12 - 0.12))))
    }
  }

  constructor() { }

  ngOnInit() {
    this.resPrice = this.getUpgradeCosts(this.resItem.prices,this.resItemLevel);
    console.log(this.resPrice);
  }

}
