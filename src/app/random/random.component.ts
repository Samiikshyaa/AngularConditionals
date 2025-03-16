import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {
  value = "xyz"

  fun(){
    console.log("hello from parent")
  }

}
