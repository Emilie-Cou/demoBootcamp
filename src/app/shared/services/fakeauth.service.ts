import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
  Grâce à providedIn : 'root', l'instance du service est un singleton au niveau global de l'application
  Possilité, en changeant le providedIn par un module ou un composant, de limiter l'existence du service à cette partie de l'app
*/

export class FakeauthService {

  // instance! : FakeauthService
  // getInstance() : FakeauthService {
  //   if(this.instance != null) return this.instance
  //   return new FakeauthService()
  // }

  isConnected : boolean = true

  login() {
    this.isConnected = true
  }

  logout() {
    this.isConnected = false
  }

}
