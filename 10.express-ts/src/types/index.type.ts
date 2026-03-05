declare module "express" {
  export interface Request {
    user?: string;
    token?: string;
  }
}
