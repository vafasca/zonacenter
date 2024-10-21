import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Plan } from 'src/app/features/main-page/models/tarifas.model';

@Injectable({
  providedIn: 'root'
})
export class SheetDataService {

  private SHEET_ID = '1IXRSN8pgnr5wBbdTrBEzm6zWG558tMoJmc7HIjLDZUg'; // Reemplaza con tu ID de hoja
  private API_KEY = 'AIzaSyCMdK2RTkMlTUz-HUHjxoZRNpB7q7en8D4'; // Reemplaza con tu API Key
  private RANGE = 'Tarifas!B2:H5'; // Ajusta el rango según la estructura de tu hoja

  private apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${this.SHEET_ID}/values/${this.RANGE}?key=${this.API_KEY}`;


  constructor(private http: HttpClient) { }

  fetchPlans(): Observable<Plan[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => {
        const rows = response.values;
        console.log("api response"+response.values);
        // Mapeo de cada fila a un objeto Plan
        return rows.map((row: string[]) => ({
          name: row[0],
          monthlyPrice: +row[1],
          annualPrice: +row[2],
          features: row.slice(3), // Características como array de strings
        }));
      })
    );
  }
}
