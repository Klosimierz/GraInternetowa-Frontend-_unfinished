import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, take, map } from 'rxjs/operators';
import 'lodash';
import { omit } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient,private jwt: JwtHelperService) { }
  //GET PLAYER -> SPECIFY WHAT TO RECEIVE
  getPlayer(what) {
    const playerId = this.jwt.decodeToken(localStorage.getItem('token'));
    return this.http.post('http://localhost:4000/actions/getplayer/'+what,playerId,{observe: 'response'}).pipe(
      map(data => {
        return omit(data.body,'_id');
      }),
      /*
      tap(data => {
        console.log(data);
      })
      */
    )
  }

  setResources(playerId) {
    return this.http.post('http://localhost:4000/actions/setResources',playerId,{observe: 'response'});
  }

  getRequiredResources(requestedObjectData) {
    const playerId = this.jwt.decodeToken(localStorage.getItem('token'))._id;
    requestedObjectData._id = playerId;
    return this.http.post('http://localhost:4000/actions/getRequired',requestedObjectData,{observe: 'response'}).pipe(
      take(1));
  }

  getPlayerName() {
    const decoded = this.jwt.decodeToken(localStorage.getItem('token'));
    const name = decoded.name;
    return name;
  }

  upgradeBuilding(playerId,buildingName) {
  }
}
