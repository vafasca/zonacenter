import { Component } from '@angular/core';

@Component({
  selector: 'app-information-interest',
  templateUrl: './information-interest.component.html',
  styleUrls: ['./information-interest.component.css']
})
export class InformationInterestComponent {
  showing: boolean = false;
  selectedCard: number | null = null;

  cards = [
    {
      title: 'Preguntas Generales',
      subtitle: 'Encuentra respuestas a preguntas frecuentes',
      count: 1,
      tasks: [
        { name: '¿Qué es esta aplicación?', progress: 'Esta es una plataforma diseñada para ayudarte a gestionar tareas y procesos.' },
        { name: '¿Cómo puedo registrarme?', progress: 'Puedes registrarte haciendo clic en el botón de "Registro" en la esquina superior derecha.' },
        { name: '¿Hay un costo por usar esta plataforma?', progress: 'No, la plataforma es completamente gratuita.' }
      ]
    },
    {
      title: 'Cuenta y Seguridad',
      subtitle: 'Soluciones a problemas relacionados con tu cuenta',
      count: 2,
      tasks: [
        { name: '¿Cómo cambio mi contraseña?', progress: 'Ve a la configuración de tu cuenta y selecciona "Cambiar contraseña".' },
        { name: '¿Qué hago si olvidé mi contraseña?', progress: 'Utiliza el enlace de "Recuperar contraseña" en la pantalla de inicio de sesión.' },
        { name: '¿Cómo protejo mi cuenta?', progress: 'Activa la autenticación de dos factores desde la configuración de seguridad.' }
      ]
    },
    {
      title: 'Uso Avanzado',
      subtitle: 'Aprovecha las funciones avanzadas',
      count: 3,
      tasks: [
        { name: '¿Cómo configuro notificaciones?', progress: 'Accede a las preferencias de usuario y ajusta las notificaciones según tus necesidades.' },
        { name: '¿Es posible compartir tareas?', progress: 'Sí, puedes compartir tareas con otros usuarios desde la sección de tareas.' },
        { name: '¿Puedo integrar esta plataforma con otras herramientas?', progress: 'Sí, ofrecemos integraciones con herramientas como Slack y Google Calendar.' }
      ]
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
      setTimeout(() => this.adjustHeight(), 0);

      // Cierra automáticamente después de 10 segundos
      setTimeout(() => {
        if (this.selectedCard === index) {
          this.selectedCard = null;
          this.showing = false;
          this.resetHeight();
        }
      }, 20000);
    }
  }

  adjustHeight(): void {
    const card = document.querySelector('.d-card-show') as HTMLElement;
    if (card) {
      const flap1 = card.querySelector('.flap1') as HTMLElement;
      const flap2 = card.querySelector('.flap2') as HTMLElement;
      const totalHeight = card.scrollHeight + (flap1 ? flap1.scrollHeight : 0) + (flap2 ? flap2.scrollHeight : 0);
      card.style.height = `${totalHeight}px`;
    }
  }

  resetHeight(): void {
    const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;
    cards.forEach(card => {
      card.style.height = ''; // Reinicia la altura
    });
  }
}
