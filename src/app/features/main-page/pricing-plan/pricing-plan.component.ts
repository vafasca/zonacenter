import { Component } from '@angular/core';
// import { ClientSvcService } from 'src/app/core/services/firebase-services/client-svc.service';
import { SheetDataService } from 'src/app/core/services/sheet-data.service';
import { TarifasService } from 'src/app/core/services/tarifas.service';

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
  isAnnual: boolean = false;
  plans: Plan[] = [];
  constructor(private sheetDataService: SheetDataService, private tarifaSvc: TarifasService){}

  ngOnInit(): void {
    console.log("ng on init")
    this.loadTarifas();
  }
 loadTarifas() {
     this.tarifaSvc.getTarifas().subscribe(
       (tarifa) => {
         this.plans = tarifa;
       },
       (error) => {
         console.error('Error al obtener las tarifas:', error);
       }
     );
  }

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
