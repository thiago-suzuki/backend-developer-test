import jwt from "jsonwebtoken";
import { tokenDTO } from './authDTO';

export class Authentication {
  async verifyJWT(req: any, res: any, next: any) {
    const secret = 'C9Da@MSrhJ!%wq2Uiw';
    const { authorization }: tokenDTO = req.headers;
    if (!authorization) {
      return res.status(401).json({
        auth: false,
        message: 'Invalid Token.',
      });
    }
    const isBearer = authorization.split(' ')[0];
    const token = authorization.split(' ')[1];
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(400).json({
          auth: false,
          error: err,
          message: 'Authentication failed.',
        });
      }
      if (isBearer != 'Bearer') {
        return res.status(401).send('Unathorized user');
      }
      req.user = decoded;
      next();
    });
  }
}
