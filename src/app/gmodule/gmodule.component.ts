import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-gmodule',
  templateUrl: './gmodule.component.html',
  styleUrls: ['./gmodule.component.css']
})
export class GmoduleComponent implements OnInit {

  playerObject: Object;

  constructor(private resourcesService: ResourcesService,private jwt: JwtHelperService) { }

  
   getPlayer() {
    let playerId = this.jwt.decodeToken(localStorage.getItem('token'));
    this.resourcesService.getPlayer(playerId).subscribe(response=> {
      this.playerObject = response.body;
    })
    
  }
  

  ngOnInit() {
    this.getPlayer();
  }

}
