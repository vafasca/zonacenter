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
      smallImage: 'https://scontent.fcbb1-1.fna.fbcdn.net/v/t39.30808-6/278844370_3189489407937617_4141473196088528978_n.png?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=QRzqIEQyaLAQ7kNvgFUa0JZ&_nc_zt=23&_nc_ht=scontent.fcbb1-1.fna&_nc_gid=ApUHplt_KRnS0LQ-wBhcNa7&oh=00_AYDImd6IYKk_MLVAXy4mSK-6maCovvGxOSNEyV9cdOitOA&oe=67184FDE',
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
