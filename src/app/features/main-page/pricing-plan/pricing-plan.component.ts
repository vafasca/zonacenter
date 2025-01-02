import { Component } from '@angular/core';
import { TarifasService } from 'src/app/core/services/tarifas.service';
import { Plan } from '../models/tarifas.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent {
  isAnnual: boolean = false;
  plans: Plan[] = [];
  private subscription: Subscription = new Subscription(); // Para manejar la suscripción

  constructor(private tarifaSvc: TarifasService){}

  ngOnInit(): void {
    this.loadTarifas();  // Carga de tarifas al iniciar el componente
  }
 /**
   * Carga las tarifas utilizando el servicio TarifasService.
   */
 private loadTarifas(): void {
  this.subscription = this.tarifaSvc.getTarifas().subscribe(
    (tarifas) => {
      this.plans = tarifas;  // Asignación de tarifas obtenidas a la lista de planes
    },
    (error) => {
      console.error('Error al obtener las tarifas:', error);  // Manejo de errores
    }
  );
}

/**
 * Alterna entre los tipos de planes (mensual/anual).
 */
togglePlanType(): void {
  this.isAnnual = !this.isAnnual;  // Cambia el estado del tipo de plan
}

/**
 * Obtiene el precio actual basado en el tipo de plan seleccionado.
 * @param plan El plan del que se desea obtener el precio.
 * @returns El precio correspondiente (mensual o anual).
 */
getPrice(plan: Plan): number {
  return this.isAnnual ? plan.annualPrice : plan.monthlyPrice;  // Retorna el precio según el estado
}

/**
 * Devuelve el tipo de plan actual.
 * @returns Un string que indica si es 'Anual' o 'Mensual'.
 */
getPlanType(): string {
  return this.isAnnual ? 'Anual' : 'Mensual';  // Retorna el tipo de plan actual
}

ngOnDestroy(): void {
  // Limpia la suscripción para evitar fugas de memoria
  this.subscription.unsubscribe();
}

}
