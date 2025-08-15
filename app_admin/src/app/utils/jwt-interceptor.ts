import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Authentication } from '../services/authentication';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(Authentication);

  const isAuthAPI = req.url.startsWith('login') || req.url.startsWith('register');

  if (authService.isLoggedIn() && !isAuthAPI) {
    const token = authService.getToken();
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }
  return next(req);
};