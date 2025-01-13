import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  showExtraButtons = false;

  ngOnInit(): void {
    this.checkScreenSize(); // Verificar el tamaño al cargar
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    this.showExtraButtons = screenWidth <= 1250; // Mostrar botones extras en dropdown si el ancho es menor o igual a 1250px
  }
}
