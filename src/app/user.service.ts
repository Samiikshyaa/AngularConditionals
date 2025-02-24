import { Injectable } from '@angular/core';


export interface IUser{
  id: number,
  name: string,
  isActive: boolean
  
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private users: IUser[] = [
    {
      id: 1,
      name: "ujjwal",
      isActive: true
    },
    {
      id: 2,
      name: "prajwal",
      isActive: false
    },
    {
      id: 3,
      name: "nawa", 
      isActive: true
    }
  ]


    getUsers(): IUser[]{
      return this.users;
    }

    getSingleUser(id: number): IUser{
      const user = this.users.filter(user => user.id === id)
      if(user.length > 0){
        return user[0]
      }
      return {
        id: 0,
        name: "",
        isActive: false
      };
    }
  
}
