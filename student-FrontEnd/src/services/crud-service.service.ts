import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catalog } from '../models/catolog.class';
import {config} from '../models/configAPI.class';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  public configAPI : config = new config();
  public API : string = "https://localhost:44392/api/CATALOGs";
  constructor(
    private http : HttpClient
  ) { }
  getAll() : Observable<catalog[]>{
    return this.http.get<catalog[]>(this.API);
  }
}
