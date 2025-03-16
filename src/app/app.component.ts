import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable, filter, fromEvent, map, of, scan } from 'rxjs';
import { RandomComponent } from './random/random.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, HttpClientModule, RandomComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(RandomComponent) childComponent!: RandomComponent
  
  @ViewChild('randomDiv') randomDivElement!:ElementRef
  
  
  title = 'angularPractice';

  obs = new Observable((observer=>{
    observer.next(1)
    observer.next(2)
  }))

  // arr=[1,2,3]
  // data$ = of(this.arr) //stream
  data$ = of(1,2,3)

  // clickEvent = fromEvent(document, "click")
  clickEvent : Observable<Event>|null=null;
  ngAfterViewInit(): void {
    this.clickEvent = fromEvent(document,"click")
    // this.clickEvent.subscribe(event => console.log(event))
    this.clickEvent.pipe(
      scan(c => c+1,0)).subscribe(event => console.log(event))
  }

  ngOnInit(): void {
    this.data$.subscribe(data => console.log)
    // this.data$.subscribe(val => console.log(val))
    // this.data$
    // .pipe(
    //   map(x=> x.map(y => y* 25))
    //   )
    //   .subscribe(val => console.log(val))

      // this.data$
      // .pipe(
      //   map(x=> ({value:x})
      //   ))
      //   .subscribe(val => console.log(val))

      this.data$
      .pipe(
        map(x=> x*2), filter(x => x%2 === 0))
        .subscribe(val => console.log(val))
  }


  doSthWithChild() {
    console.log(this.childComponent.value)
    this.childComponent.fun()
    if(this.randomDivElement){
      this.randomDivElement.nativeElement.value = "Hello from parent"
    }
  }
}
