import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../Entities/User";

@Injectable()

export class UsersService{

     users:IUser[]=[];
     constructor(private httpClient:HttpClient){}

     getUsersList():Observable<IUser[]>{
        return this.httpClient.get<IUser[]>("https://jsonplaceholder.typicode.com/users",{headers:{
             "content-type":"application/json"
         }});
     }
}