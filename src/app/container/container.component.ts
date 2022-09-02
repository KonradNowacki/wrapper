import {AfterContentInit, Component, ContentChild, ElementRef, Input} from '@angular/core';
import {ParentComponent} from "../parent.component";
import {catchError, EMPTY, Observable} from "rxjs";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {

  @Input() data$!: Observable<any>;

  loading = true;
  error = false;

  data: any = null

  @ContentChild('component') component!: ParentComponent;

  ngAfterContentInit() {
    this.data$.pipe(
      catchError(() => {
        this.error = true;
        this.loading = false;
        return EMPTY;
      })
    ).subscribe(data => {
      this.loading = false
      this.component.data = data;
    })
  }

}
