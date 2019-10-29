import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MapaService {

  url_api = "http://23.253.173.64:5000/api/";
  //url_api = "http://localhost/api/";
  //url_api = "http://localhost:56037/api/";

  constructor(private http: HttpClient) { }

  service_general_post(url, parametros): Observable<any> {
    return this.http.post(this.url_api + url, parametros);
  }

  service_general_get(url): Observable<any> {
    return this.http.get(this.url_api + url);
  }
}
