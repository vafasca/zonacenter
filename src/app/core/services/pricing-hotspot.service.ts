import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HotspotPlan } from 'src/app/features/main-page/models/tarifas-hotspot.model';

@Injectable({
  providedIn: 'root'
})
export class PricingHotspotService {
  private SHEET_ID = '1IXRSN8pgnr5wBbdTrBEzm6zWG558tMoJmc7HIjLDZUg'; // ID de la hoja
  private API_KEY = 'AIzaSyCMdK2RTkMlTUz-HUHjxoZRNpB7q7en8D4'; // API Key
  private RANGE = 'HotSpot!B2:G3'; // Rango específico que contiene los datos relevantes

  private apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${this.SHEET_ID}/values/${this.RANGE}?key=${this.API_KEY}`;

  constructor(private http: HttpClient) { }

  fetchHotspotPlans(): Observable<HotspotPlan[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => {
        const rows = response.values;
        console.log("API Response:", response.values);

        // Mapear cada fila a un objeto HotspotPlan
        return rows.map((row: string[]) => ({
          name: row[0],
          price: +row[1], // Convertir a número
          features: row.slice(2) // El resto de las columnas son características
        }));
      })
    );
  }
}
