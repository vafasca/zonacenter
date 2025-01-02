import { Injectable } from '@angular/core';
import { collection, Firestore, onSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

  private cv: any; // Almacena la referencia a la colección de tarifas.
  
    constructor(private firestore: Firestore) {
      this.cv = collection(this.firestore, 'cv'); // Inicializa la colección.
    }
    /**
     * Obtiene las tarifas de la colección en tiempo real.
     * @returns Un observable que emite los datos de tarifas actualizados.
     */
    getConditionC(): Observable<any[]> {
      return new Observable<any[]>((observer) => {
        // Escucha los cambios en la colección utilizando onSnapshot.
        const unsubscribe = onSnapshot(
          this.cv,
          (snapshot: QuerySnapshot) => {
            // Mapea los documentos a un array de datos.
            const serviceCondition = snapshot.docs.map(doc => ({
              id: doc.id, // Incluye el ID del documento.
              ...doc.data() // Combina los datos del documento.
            }));
  
            observer.next(serviceCondition); // Emite los datos actualizados.
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
