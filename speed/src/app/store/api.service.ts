import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getLaunches = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(map((res: any) => res.launches))

  public getStatusTypes = (): Observable<any> =>
    this.http
    .get(environment.url + '/assets/data/launchstatus.json')
    .pipe(map((res: any) => res.types))
}
