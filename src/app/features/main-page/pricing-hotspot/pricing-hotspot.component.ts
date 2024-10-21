import { Component } from '@angular/core';
import { HotspotPlan } from '../models/tarifas-hotspot.model';
import { PricingHotspotService } from 'src/app/core/services/pricing-hotspot.service';


@Component({
  selector: 'app-pricing-hotspot',
  templateUrl: './pricing-hotspot.component.html',
  styleUrls: ['./pricing-hotspot.component.css']
})
export class PricingHotspotComponent {
  hotspotPlans: HotspotPlan[] = [];

  constructor(private hotSpotSvc: PricingHotspotService){}

  ngOnInit(): void {
    // Obtener los planes desde el servicio
    this.hotSpotSvc.fetchHotspotPlans().subscribe(
      (data) => {
        this.hotspotPlans = data;
        console.log('Hotspot Plans:', this.hotspotPlans);
      },
      (error) => {
        console.error('Error al obtener los planes de hotspot:', error);
      }
    );
  }

  // Método para obtener el precio (en este caso es fijo)
  getPrice(plan: HotspotPlan): number {
    return plan.price;
  }
}
