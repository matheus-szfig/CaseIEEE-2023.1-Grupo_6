import { request, response } from 'express';
import { CookieDealer } from '../utils/cookie';

export function cookieMiddleware (req = request, res = response, next) {
  const userInfo = CookieDealer.verifyToken(req.cookies.case_ramo_token);
  
  

}