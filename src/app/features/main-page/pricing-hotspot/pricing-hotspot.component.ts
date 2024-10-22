import { Component } from '@angular/core';
import { HotspotPlan } from '../models/tarifas-hotspot.model';
import { HotspotTarifasService } from 'src/app/core/services/hotspot-tarifas.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pricing-hotspot',
  templateUrl: './pricing-hotspot.component.html',
  styleUrls: ['./pricing-hotspot.component.css']
})
export class PricingHotspotComponent {
  hotspotPlans: HotspotPlan[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private hotspotSvc: HotspotTarifasService){}

  ngOnInit(): void {
    console.log("Cargando tarifas de hotspot...");
    this.loadTarifas();  // Carga de tarifas al inicializar el componente
  }

/**
   * Carga las tarifas de hotspot utilizando el servicio HotspotTarifasService.
   */
private loadTarifas(): void {
  this.subscription = this.hotspotSvc.getTarifas().subscribe(
    (tarifasHotspot) => {
      this.hotspotPlans = tarifasHotspot;  // Asignación de tarifas a la lista de planes
      console.log('Tarifas Hotspot obtenidas de Firebase:', this.hotspotPlans); // Log para depuración
    },
    (error) => {
      console.error('Error al obtener las tarifas:', error);  // Manejo de errores
    }
  );
}

/**
 * Obtiene el precio del plan de hotspot.
 * @param plan El plan del que se desea obtener el precio.
 * @returns El precio del plan.
 */
getPrice(plan: HotspotPlan): number {
  return plan.price;  // Retorna el precio del plan
}

ngOnDestroy(): void {
  // Limpia la suscripción al destruir el componente
  this.subscription.unsubscribe();
}
}
