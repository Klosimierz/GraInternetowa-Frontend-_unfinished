import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gmodule',
  templateUrl: './gmodule.component.html',
  styleUrls: ['./gmodule.component.css']
})
export class GmoduleComponent implements OnInit {

  playerResources$ : Observable<Object>;
  nick: String;
  constructor(private resourcesService: ResourcesService,private jwt: JwtHelperService) { }

  
    
  

  ngOnInit() {
    this.playerResources$ = this.resourcesService.getPlayer('resources');
    this.nick = this.resourcesService.getPlayerName();
  }

}
