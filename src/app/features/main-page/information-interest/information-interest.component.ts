import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PricingPlanComponent } from '../pricing-plan/pricing-plan.component';

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
      count: 3
    },
    {
      title: 'Preguntas frecuentes',
      subtitle: 'Aprovecha las funciones avanzadas',
      count: 4
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
    alert(index);
    this.dialog.open(PricingPlanComponent, {
      width: '800px',
      height: '500px',
      data: { message: 'Este es un ejemplo de diálogo.' },
    });
  }

  resetHeight(): void {
    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;
    cards.forEach(card => {
      card.style.height = ''; // Reinicia la altura
    });
  }
}
