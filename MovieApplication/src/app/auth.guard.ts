import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const loggedIn:any=localStorage.getItem('login')
    if (loggedIn=='true') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

export function canActivateFn(authGuard: AuthGuard) {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    authGuard.canActivate(route, state);
}
