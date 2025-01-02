import { Component } from '@angular/core';
import { FAQ } from '../models/FAQ.models';
import { Subscription } from 'rxjs';
import { FaqSectionService } from 'src/app/core/services/faq-section.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  faqs2: FAQ[] = [];
  openIndex: number | null = null;
  private subscription: Subscription = new Subscription(); // Para manejar la suscripción

  constructor(private faqSvc: FaqSectionService){}

  ngOnInit(): void {
    this.loadFAQs();  // Carga de preguntas frecuentes al iniciar el componente
  }

  private loadFAQs(): void {
    this.subscription = this.faqSvc.getFaqs().subscribe(
      (faq) => {
        this.faqs2 = faq;  // Asignación de preguntas frecuentes a la lista
      }
    );
  }
  
  toggleFAQ(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  // Liberación de la suscripción al destruir el componente
  }
}
