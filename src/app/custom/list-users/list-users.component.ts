import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "src/app/Entities/User";
import { UsersService } from "src/app/services/user.service";


@Component({
    selector: "app-list-users",
    templateUrl: "list-users.component.html"
})
export class ListUsersComponent implements OnInit{
    users$!:Observable<IUser[]>;
        // {
        //     name: "Nilanjan Dutta",
        //     username: "duttan",
        //     email: "nilanjan.dutta@abc.com"
        // },
        // {
        //     name: "Saayak Das",
        //     username: "sdas",
        //     email: "saayak.das@abc.com"
        // }
    //]
    constructor(private userSvc:UsersService){
        
    }
    ngOnInit(): void {
        this.users$=this.userSvc.getUsersList()
        // .subscribe({
        //     next:(data)=>{
        //         console.log("Got data from service");
                
        //         this.users=data;
        //         console.log(this.users);
        //     },
        //     error:(err)=>{
        //         console.log("Error from User List Service");
        //         console.log(err);
        //     }
        // })
    }
}