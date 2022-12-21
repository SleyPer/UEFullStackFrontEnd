import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boutique } from './boutique';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BoutiqueService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getBoutiques(): Observable<Boutique[]> {
        return this.http.get<Boutique[]>(`${this.apiServerUrl}/boutique/all`);
    }

    public addBoutique(boutique: Boutique): Observable<Boutique> {
        return this.http.post<Boutique>(`${this.apiServerUrl}/boutique/add`, boutique);
    }

    public updateBoutique(boutique: Boutique): Observable<Boutique> {
        return this.http.put<Boutique>(`${this.apiServerUrl}/boutique/update`, boutique);
    }

    public deleteBoutique(boutiqueId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/boutique/delete/${boutiqueId}`);
    }
}
