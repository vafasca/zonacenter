import { Component } from '@angular/core';

interface Plan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
}


@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent {
  isAnnual: boolean = false; // Estado inicial: mensual

  // Precios y características de los planes
  plans: Plan[] = [
    {
      name: 'Plan Básico',
      monthlyPrice: 90,
      annualPrice: 240,
      features: ['5 Mbps velocidad', 'Asistencia Tecnica', 'Prueba gratuita', '200 bs Instalacion']
    },
    {
      name: 'Plan Profesional',
      monthlyPrice: 150,
      annualPrice: 360 ,
      features: ['10 Mbps velocidad', 'Asistencia Tecnica', 'Prueba Gratuita', '200 bs Instalacion']
    },
    {
      name: 'Plan Esescencial',
      monthlyPrice: 210,
      annualPrice: 210 ,
      features: ['15 Mbps velocidad', 'Asistencia Tecnica', 'Prueba gratuita', '200 bs Instalacion']
    },
    {
      name: 'Plan Master',
      monthlyPrice: 270 ,
      annualPrice: 560 ,
      features: ['20 Mpbs velocidad', 'Asistencia Tecnica', 'Prueba Gratuita', '200 bs Instalacion']
    }
  ];

  // Método para cambiar entre mensual y anual
  togglePlanType() {
    this.isAnnual = !this.isAnnual;
  }

  // Método para obtener el precio actual basado en el tipo de plan
  getPrice(plan: Plan): number {
    return this.isAnnual ? plan.annualPrice : plan.monthlyPrice;
  }

  // Método para obtener el tipo de plan actual
  getPlanType(): string {
    return this.isAnnual ? 'Anual' : 'Mensual';
  }
}
