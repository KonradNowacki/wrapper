import { Component } from '@angular/core';
import {delay, mapTo, of, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loading-error-wrapper';

  data1$ = of(null).pipe(
    delay(2000),
    tap(() => {
      throw new Error()
    }),
    mapTo('data 1 from observable')
  )

  data2$ = of(null).pipe(
    delay(4000),
    tap(() => {
      throw new Error()
    }),
    mapTo('data 2 from observable')
  )

  data3$ = of(null).pipe(
    delay(6000),

    mapTo('data 3 from observable')
  )
}
