import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssetService {
    constructor(private http: HttpClient) { }

    public get(filePath: String): Observable<Object> {
        const file = this.http.get(`${filePath}`);
        return file;
    }

    public getSVG(filePath: String): Observable<string> {
        const headers = new HttpHeaders().set('Accept', 'image/svg+xml');
        const file = this.http.get(`${filePath}`, {headers, responseType: 'text'});
        return file;
    }
}
