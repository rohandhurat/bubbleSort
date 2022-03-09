import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
@Injectable()
export class ApiHttpService {
    constructor(
        private http: HttpClient
    ) { }

    public get(url: string, options?: any) {
        return this.http.get(url, options);
    }
}
