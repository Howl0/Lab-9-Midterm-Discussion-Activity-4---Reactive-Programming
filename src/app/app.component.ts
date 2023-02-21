import { Component } from '@angular/core';
import { of, Observable, map, from, pipe} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //denfine numbers$ as an Observable
  numbers$: Observable<number>;
  constructor() {}
}
//create an array
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//subscribing to the Observable
numbers$.subscribe((value) => console.log(value));

//manipulate data using map
numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));

//create an observable with an array with an array observable of users objects
const users = [
  {id: 1, name: "Alice", age: 25},
  {id: 2, name: 'Bob', age: 30},
  {id: 3, name: 'Charlie', age: 35},
  {id: 4, name: 'Dave', age: 40},
]

//create the observable
const users$ = from(users);

//subscribe to this observable
users$.subscribe((user) => console.log(user));
 
//use the appropriate 'rxjs' operators to display only users whose age is more than 30 and names are displayed in ALL CAPS.
users$.pipe(map((user) => ({
  id: user.id,
  name: user.name.toUpperCase(), 
  age: user.age * 2,
  })))
  .subscribe((user) => console.log(user));