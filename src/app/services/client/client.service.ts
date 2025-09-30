import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../model/class/Client';
import { APIResponse } from '../../model/interface/response';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + "GetAllClients")
  }

  addUpdate(obj:Client):Observable<APIResponse>{
    return this.http.post<APIResponse>(environment.API_URL + "AddUpdateClient",obj)
  }

  deleteClientByClientId(id:number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(environment.API_URL + "DeleteClientByClientId?clientId="+id)
  }
}
