import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PricingPlanComponent } from '../pricing-plan/pricing-plan.component';
import { FaqComponent } from '../faq/faq.component';
import { PricingHotspotComponent } from '../pricing-hotspot/pricing-hotspot.component';
import { ServiceConditionComponent } from '../service-condition/service-condition.component';

@Component({
  selector: 'app-information-interest',
  templateUrl: './information-interest.component.html',
  styleUrls: ['./information-interest.component.css']
})
export class InformationInterestComponent {
  showing: boolean = false;
  selectedCard: number | null = null;

  constructor(private dialog: MatDialog) {}

  cards = [
    {
      title: 'Beneficios en nuestra tienda',
      subtitle: 'Descuentos, atención prioritaria, tratamiento VIP.',
      count: 1
    },
    {
      title: 'Condiciones de servicio',
      subtitle: 'Aprovecha las funciones avanzadas',
      count: 2
    },
    {
      title: 'Preguntas frecuentes',
      subtitle: 'Aprovecha las funciones avanzadas',
      count: 3
    }
  ];

  toggleCard(index: number): void {
    if (this.selectedCard === index) {
      this.selectedCard = null;
      this.showing = false;
      setTimeout(() => this.resetHeight(), 0);
    } else {
      this.resetHeight();
      this.selectedCard = index;
      this.showing = true;
    }
  }

  onCardClick(index: number): void {
    if (index === 1) {
      this.dialog.open(PricingPlanComponent, {
        width: '800px',
        height: '500px',
      });
    } else if (index === 2) {
      this.dialog.open(ServiceConditionComponent, {
        width: '800px',
        height: '500px',
      });
    } else if (index === 3) {
      this.dialog.open(FaqComponent, {
        width: '800px',
        height: '500px',
      });
    } else {
      console.warn('Índice no manejado:', index);
    }
  }

  resetHeight(): void {
    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;
    cards.forEach(card => {
      card.style.height = ''; // Reinicia la altura
    });
  }
}
