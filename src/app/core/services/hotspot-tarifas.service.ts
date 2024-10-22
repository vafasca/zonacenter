import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs, onSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotspotTarifasService {
  private tarifasCollection: any; // Almacena la referencia a la colección de tarifas.

  constructor(private firestore: Firestore) {
    this.tarifasCollection = collection(this.firestore, 'hotspot'); // Inicializa la colección.
  }

  /**
   * Obtiene las tarifas de la colección en tiempo real.
   * @returns Un observable que emite los datos de tarifas actualizados.
   */
  getTarifas(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      // Escucha los cambios en la colección utilizando onSnapshot.
      const unsubscribe = onSnapshot(
        this.tarifasCollection,
        (snapshot: QuerySnapshot) => {
          // Mapea los documentos a un array de datos.
          const tarifas = snapshot.docs.map(doc => ({
            id: doc.id, // Incluye el ID del documento.
            ...doc.data() // Combina los datos del documento.
          }));

          observer.next(tarifas); // Emite los datos actualizados.
        },
        (error) => {
          console.error('Error al escuchar cambios en tarifas:', error); // Registra el error.
          observer.error(error); // Notifica al observador sobre el error.
        }
      );

      // Retorna la función de limpieza para evitar fugas de memoria.
      return () => unsubscribe();
    });
  }
}
