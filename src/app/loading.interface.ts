import {Observable} from "rxjs";

export interface LoadingInterface<T> {
  data$: Observable<T>;
}
