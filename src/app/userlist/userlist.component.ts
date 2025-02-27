import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { IUser, UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css',
  providers:[UserService]
})
export class UserlistComponent implements OnInit {

  userActive: boolean = false
  status = 'Y'
  users: IUser[] = []



  constructor(private userService: UserService){
      // this.users = this.userService.getUsers()
      console.log("constructor called")
  }


  //function always called after the constructor
  // getUsernamefromeouteandcallapi{

//   }

// ngOnChanges(){}
// ngOnInit(){}
// ngAfterViewChecked(){}
// ngOnDestroy(){}

// ngOnInit(){
//   console.log("constructor init")
// }
// ngOnChanges(){
//   console.log("onchange")
// }

// eventX: EventEmitter<String> = new EventEmitter<String>()

// emmitEvent(){
//   this.eventX.emit("Hello")
// }

// observable = new Observable((observer) =>{
//   observer.next(1)
//   observer.next(2)
//   observer.complete()
// })

ngOnInit(): void {
  this.userService.getUsers().subscribe(data => {
     this.users = data
 })
 
}

eventX: EventEmitter<string> = new EventEmitter<string>()

emitEvent(){
 this.eventX.emit("Hello this is event emiting message")
}

observable = new Observable((observer)=> {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
})


fun(){
 this.observable.subscribe({
   next: (data) => console.log(data + "from function 1"),
   complete: () => console.log("Completed"),
   error: (error) => console.error("error", error)
 })
}


fun2(){
 this.observable.subscribe({
   next: (data) => console.log(data + "from function 2"),
   complete: () => console.log("Completed"),
   error: (error) => console.error("error", error)
 })
}


}
