import { Request, Response } from "express";
import createUser from './services/createUser'

export function helloWorld(request: Request, response: Response){
  return response.json({message: 'hello world'})
} 