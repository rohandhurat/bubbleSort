import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { PagedResponse } from "../models/users";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) { }

    getUsers(page: number, per_page: number) {
        const params = new HttpParams()
            .set('page', page)
            .set('per_page', per_page);
        const serviceUrl: any = `${environment.baseUrl}/users`;
        return this.http.get(serviceUrl, { params });
    }
}