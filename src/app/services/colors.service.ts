import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/environments/endpoints';
import { ColorsResponse } from '../model/colors.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private http: HttpClient) { }

  getColors(): Observable<ColorsResponse>{
    return this.http.get<ColorsResponse>(Endpoints.colors);
  }
}
