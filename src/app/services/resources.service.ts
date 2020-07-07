import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getPlayer(playerId) {
    return this.http.post('http://localhost:4000/actions/getplayer',playerId,{observe: 'response'});
  }

  setResources(playerId) {
    return this.http.post('http://localhost:4000/actions/setResources',playerId,{observe: 'response'});
  }
  
  upgradeBuilding(playerId,buildingName) {
  }
}
