import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import * as resData from './res.json';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  researchLevels;
  researchTexts: any = resData;

  constructor(private resService: ResourcesService) { }

  ngOnInit() {
    this.resService.getPlayer('research').subscribe((data) => {
      this.researchLevels = data;
    },
    (error) => {
      console.log('err');
    },
    );
  }

}
