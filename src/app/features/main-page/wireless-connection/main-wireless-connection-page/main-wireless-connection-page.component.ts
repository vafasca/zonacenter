import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-wireless-connection-page',
  templateUrl: './main-wireless-connection-page.component.html',
  styleUrls: ['./main-wireless-connection-page.component.css']
})
export class MainWirelessConnectionPageComponent {
  isButtonVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isButtonVisible = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
