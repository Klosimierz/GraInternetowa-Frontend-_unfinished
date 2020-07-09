import { Component, OnInit, OnDestroy } from '@angular/core';
import data from './buildings.json';
import { ResourcesService } from 'src/app/services/resources.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  buildingLevels$: Observable<Object>;

  tooltipFlag: Boolean[] = [false,false,false,false,false,false,false];

  constructor(private resService: ResourcesService) {
   }

    
  upgradeBuilding(building) {
  }


  ngOnInit() {
    this.buildingLevels$ = this.resService.getPlayer('buildings');
  }


}
