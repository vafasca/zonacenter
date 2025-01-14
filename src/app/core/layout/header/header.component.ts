import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  showExtraButtons = false;
  hideIconSection = false;
  private lastScrollPosition = 0;

  constructor(private eRef: ElementRef) {}

  ngOnInit(): void {
    this.checkScreenSize();
    document.addEventListener('click', this.handleClickOutside.bind(this));
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
    this.showExtraButtons = screenWidth <= 1250;
  }

  handleClickOutside(event: Event): void {
    const target = event.target as HTMLElement;

    if (!this.eRef.nativeElement.contains(target)) {
      this.menuOpen = false;
    }

    if (target.tagName === 'A') {
      this.menuOpen = false;
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }

    // Detectar scroll hacia abajo
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition > this.lastScrollPosition) {
        this.hideIconSection = true;
      } else {
        this.hideIconSection = false;
      }
      this.lastScrollPosition = currentScrollPosition;
    }
}
