import { Component } from '@angular/core';
interface HotspotPlan {
  name: string;
  price: number;
  features: string[];
}

@Component({
  selector: 'app-pricing-hotspot',
  templateUrl: './pricing-hotspot.component.html',
  styleUrls: ['./pricing-hotspot.component.css']
})
export class PricingHotspotComponent {
  // Precios y características de los planes de hotspot
  hotspotPlans: HotspotPlan[] = [
    {
      name: 'Plan Básico Hotspot',
      price: 400,
      features: ['No incluye equipo', 'Soporte Tecnico', 'Plantilla Custom', 'Garantia']
    },
    {
      name: 'Plan Normal Hotspot',
      price: 650,
      features: ['Equipo Preconfigurado', 'Soporte Tecnico', 'Plantilla Custom', 'Garantia']
    }
  ];

  // Método para obtener el precio (en este caso es fijo)
  getPrice(plan: HotspotPlan): number {
    return plan.price;
  }

  // // El tipo de plan es fijo aquí
  // getPlanType(): string {
  //   return 'mensual';
  // }
}
