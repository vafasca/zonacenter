import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  constructor(private firestore: Firestore) { }
  getTarifas(): Observable<any[]> {
    const tarifasCol = collection(this.firestore, 'tarifa');
    const tarifasSnapshot$ = from(getDocs(tarifasCol));

    return tarifasSnapshot$.pipe(
      map(tarifasSnapshot => tarifasSnapshot.docs.map(doc => doc.data()))
    );
  }
}
