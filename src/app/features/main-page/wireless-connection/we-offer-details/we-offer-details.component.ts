import { Component } from '@angular/core';

@Component({
  selector: 'app-we-offer-details',
  templateUrl: './we-offer-details.component.html',
  styleUrls: ['./we-offer-details.component.css']
})
export class WeOfferDetailsComponent {
  featuresData = [
    {
      icon: 'icon1', 
      title: 'Prueba nuestro servicio', 
      description: 'Se le otorga un periodo de prueba del servicio con la certeza de que será de su agrado, caso contrario puede no aceptar el servicio sin problemas.'
    },
    {
      icon: 'icon2',
      title: 'Sin contratos forzosos',
      description: 'No hay un contrato de permanencia obligatoria. Puedes estar con nuestro servicio el tiempo que desees.'
    },
    {
      icon: 'icon3',
      title: 'Facilidades de pago',
      description: 'Puedes pagar directamente en nuestro local comercial, pagar por transferencia bancaria o por código QR desde la comodidad de tu casa.'
    },
    {
      icon: 'icon4',
      title: 'Beneficios a clientes',
      description: 'Descuentos, atención prioritaria, tratamiento VIP y otros beneficios que faciliten tu integración digital. Accede a estos beneficios desde nuestro local comercial.'
    }
  ];
}
