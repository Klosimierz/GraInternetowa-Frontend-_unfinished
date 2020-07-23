import { Component, OnInit, Input } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import { Observable } from 'rxjs';
import * as descriptions from './buildings.json';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  buildingDesc: object[] = descriptions;
  buildingLevels$: Observable<object>;
  availableResources$: Observable<object>;
  constructor(private resService: ResourcesService) {
  }

    
  upgradeBuilding(building) {
  }

  canBuild(input) {
  }

  calculateCost(base,level) {
    let {metal,stone,fuel} = base['base_cost'];
    return {
      reqStone: Math.floor(Math.pow(stone,(1+level*0.14-0.14))),
      reqMetal: Math.floor(Math.pow(metal,(1+level*0.13-0.13))),
      reqFuel: Math.floor(Math.pow(fuel,1+level*0.12-0.12)),
    };

  }

  ngOnInit() {
    this.buildingLevels$ = this.resService.getPlayer('buildings')
    .pipe(
      map(       
        data => {
          let levelArray = [];
          for(const [key, value] of Object.entries(data)) {
            levelArray.push(value);
          }
          return levelArray;
        }
      )
    );
  }


}
