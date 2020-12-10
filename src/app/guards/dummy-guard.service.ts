import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
 
@Injectable({
  providedIn: 'root'
})
export class DummyGuardService implements CanActivate {
 
  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }
 
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const selectedId = route.paramMap.get('id');
    console.log('routeParameter', selectedId)
    let selectedId2 = route.queryParams.id;
    console.log('queryParams:', selectedId2)
    const currentNavigation = this.router.getCurrentNavigation();
    let state= currentNavigation.extras.state || {};
    console.log('currentNavigation', state.id);
    console.log('---------------------');

    return true;

    // let selectedId = +route.paramMap.get('id');
    // let allowed = selectedId != 100;
    // if (allowed) {
    //   return true;
    // } else {
    //   this.alertController.create({
    //     header: 'Sorry',
    //     subHeader: 'Guard prevents this',
    //     message: 'The Guard says no.',
    //     buttons: ['OK']
    //   }).then(alert => alert.present());
  
    //   return false;
    // }
  }
}