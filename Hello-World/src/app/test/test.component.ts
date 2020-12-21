import { Component, OnInit } from '@angular/core';

@Component({
  /*There are several ways of specifying the selector
    use square brackets like '[app-test]' and in the html file call it as an id and not a class */
  selector: 'app-test',
  template: `
          <!--Note we used back ticks to insert our code here-->
          <div> Welcome {{name}}</div>
          <h2>{{34+3}}<h2>
          <p>{{"This is "+ "it" }}</p>

          
          
          `,
  styles: [`
        div {color:red}`]
})
export class TestComponent implements OnInit {
public name = "Liberty M";
  constructor() { }

  ngOnInit(): void {
  }

}
