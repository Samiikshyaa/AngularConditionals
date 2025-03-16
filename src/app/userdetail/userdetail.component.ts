import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent implements OnInit {

  userid: String =""
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((parameters)=>{
        this.userid = parameters.get('userid')||""
    })
    

}
