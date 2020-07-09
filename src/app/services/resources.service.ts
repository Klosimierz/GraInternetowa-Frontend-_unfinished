import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient,private jwt: JwtHelperService) { }
  //GET PLAYER -> SPECIFY WHAT TO RECEIVE
  getPlayer(what) {
    const playerId = this.jwt.decodeToken(localStorage.getItem('token'));
    return this.http.post('http://localhost:4000/actions/getplayer/'+what,playerId,{observe: 'response'});
  }

  setResources(playerId) {
    return this.http.post('http://localhost:4000/actions/setResources',playerId,{observe: 'response'});
  }

  getPlayerName() {
    const decoded = this.jwt.decodeToken(localStorage.getItem('token'));
    const name = decoded.name;
    return name;
  }

  upgradeBuilding(playerId,buildingName) {
  }
}
