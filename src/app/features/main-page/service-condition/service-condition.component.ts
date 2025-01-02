import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConditionService } from 'src/app/core/services/condition.service';

@Component({
  selector: 'app-service-condition',
  templateUrl: './service-condition.component.html',
  styleUrls: ['./service-condition.component.css']
})
export class ServiceConditionComponent {

  serviceConditionsData: any[] = [];
  private subscription: Subscription = new Subscription(); // Para manejar la suscripción

  constructor(private cv: ConditionService) {}

  ngOnInit(): void {
    this.loadServiceConditions();  // Carga de condiciones de servicio al iniciar el componente
  }

  loadServiceConditions(): void {
    this.subscription = this.cv.getConditionC().subscribe(
      (cv) => {
        this.serviceConditionsData = cv;
      }
    );
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  // Liberación de la suscripción al destruir el componente
  }

  // serviceConditionsData = [
  //   {
  //     title: 'Sin contrato obligatorio',
  //     description:
  //       'No hay un contrato de permanencia obligatoria. Lo que significa que puedes estar con nuestro servicio el tiempo que desees.'
  //   },
  //   {
  //     title: 'Sobre los equipos entregados',
  //     highlight: 'Los equipos son entregados en calidad de comodato.'
  //   },
  //   {
  //     title: 'Prueba gratuita',
  //     description:
  //       'Se le otorga un período de prueba del servicio con la certeza de que sea de su agrado, caso contrario puede no aceptar el servicio sin problemas.'
  //   },
  //   {
  //     title: 'Pagas lo que consumes',
  //     description:
  //       'El servicio es prepago y lo puedes pagar vía transferencia bancaria o directamente en nuestra tienda, cuando pagas en forma de prepago no acumulas deudas y no existen multas por atraso.'
  //   },
  //   {
  //     title: 'Corte de servicio',
  //     description:
  //       'Cuando el servicio no es renovado, el sistema lo corta a los 10 días del día de renovación, después de un corte, pasaremos a recoger los equipos en los siguientes posteriores 15 días, si no justifica el atraso.',
  //     highlight:
  //       'Te mandaremos un recordatorio automático por si te olvidaste renovar el servicio, si necesitas justificar el atraso nos puedes escribir vía WhatsApp.'
  //   },
  //   {
  //     title: 'Rehabilitar el servicio',
  //     description:
  //       'Para rehabilitar el servicio debe cancelar la mensualidad, se actualizará su fecha de pago.',
  //     highlight:
  //       'Si el período de rehabilitación excede los 60 días, se debe cancelar 100 Bs como costo de reincorporación (sujeto a disponibilidad).'
  //   },
  //   {
  //     title: 'Dar de baja el servicio o congelarlo',
  //     description:
  //       'Si planea salir de viaje o dejar el servicio por algún tiempo, debe avisarnos para coordinar el retiro de los equipos, debe recordar que los equipos son prestados.'
  //   },
  //   {
  //     title: 'Velocidades mínimas',
  //     description:
  //       'En cumplimiento al Artículo 120 parágrafo VIII del Reglamento General de Telecomunicaciones.',
  //     highlight:
  //       'Planes de enlace vecinal 20% de la velocidad máxima contrata',
  //     highlight2:
  //       'Planes de enlace dedicado 90% de la velocidad máxima contrata.'
  //   }
  // ];
}
