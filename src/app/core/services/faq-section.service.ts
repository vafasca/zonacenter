import { Injectable } from '@angular/core';
import { collection, Firestore, onSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqSectionService {

  private faqList: any;
  constructor(private firestore: Firestore) {
    this.faqList = collection(this.firestore, 'faq');
  }

  getFaqs(): Observable<any[]> {
        return new Observable<any[]>((observer) => {
          // Escucha los cambios en la colección utilizando onSnapshot.
          const unsubscribe = onSnapshot(
            this.faqList,
            (snapshot: QuerySnapshot) => {
              // Mapea los documentos a un array de datos.
              const faq = snapshot.docs.map(doc => ({
                id: doc.id, // Incluye el ID del documento.
                ...doc.data() // Combina los datos del documento.
              }));
              observer.next(faq); // Emite los datos actualizados.
            },
            (error) => {
              observer.error(error); // Notifica al observador sobre el error.
            }
          );
    
          // Retorna la función de limpieza para evitar fugas de memoria.
          return () => unsubscribe();
        });
  }

}
