import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide-post',
  templateUrl: './slide-post.component.html',
  styleUrls: ['./slide-post.component.css']
})
export class SlidePostComponent {
  @ViewChild('swiper', { static: false }) swiper?: ElementRef;

  slides = [
    {
      backgroundImage: 'https://picsum.photos/800/400?random=1',
      smallImage: 'https://firebasestorage.googleapis.com/v0/b/zonacenter-47ad8.appspot.com/o/assets%2Fpruebaa.png?alt=media&token=aa8b9512-3186-4e7b-9fb4-4822bfc6974d',
    },
    {
      backgroundImage: 'https://picsum.photos/800/400?random=2',
      smallImage: 'https://picsum.photos/800/400?random=4', //imagenens 800wx400h
    },
    {
      backgroundImage: 'https://picsum.photos/800/400?random=3',
      smallImage: 'https://picsum.photos/800/400?random=7',
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swiper?.nativeElement.swiper?.update();
    });

    window.addEventListener('resize', () => {
      this.swiper?.nativeElement.swiper?.update();
    });
  }

    // Maneja el error de carga de imágenes
    onImageError(event: Event) {
      const target = event.target as HTMLImageElement;
      target.src = '../../../assets/images/placeholder_default.png';
    }
}
