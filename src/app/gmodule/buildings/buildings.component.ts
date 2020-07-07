import { Component, OnInit } from '@angular/core';
import data from './buildings.json';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  buildingsList = data;



  constructor(private resService: ResourcesService) { }

  upgradeBuilding(buildingName) {
  }

  ngOnInit() {
    console.log(this.buildingsList);
  }

}
