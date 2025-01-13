import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide-post',
  templateUrl: './slide-post.component.html',
  styleUrls: ['./slide-post.component.css']
})
export class SlidePostComponent {
  @ViewChild('swiper', { static: false }) swiper?: ElementRef;
  isMobile: boolean = window.innerWidth <= 708;

  slides = [
    {
      desktopImage: 'https://www.ptvtelecom.com//wp-content/uploads/banneer-plan-akistad-ordenador-modificado-67.webp',
      mobileImage: 'https://www.ptvtelecom.com//wp-content/uploads/banner-plana-mistad-modificado-movil-68.webp',
    },
    {
      desktopImage: 'https://www.ptvtelecom.com//wp-content/uploads/1995-ordenador-scaled.webp',
      mobileImage: 'https://www.ptvtelecom.com//wp-content/uploads/1995-movil.webp',
    },
    {
      desktopImage: 'https://www.ptvtelecom.com//wp-content/uploads/zapimas_liga_hypermotion.webp',
      mobileImage: 'https://www.ptvtelecom.com//wp-content/uploads/zapimas_liga_hypermotion_mobile.webp',
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swiper?.nativeElement.swiper?.update(); // Actualiza el Swiper
    });

    // Añadir listener de resize
    window.addEventListener('resize', () => {
      this.swiper?.nativeElement.swiper?.update(); // Actualiza Swiper en el resize
      this.isMobile = window.innerWidth <= 708;
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 708;
  }

    // Maneja el error de carga de imágenes
    onImageError(event: Event) {
      const target = event.target as HTMLImageElement;
      target.src = '../../../assets/images/placeholder_default.png';
    }
}
