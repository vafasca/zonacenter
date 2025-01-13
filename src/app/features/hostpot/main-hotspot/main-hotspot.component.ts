import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-hotspot',
  templateUrl: './main-hotspot.component.html',
  styleUrls: ['./main-hotspot.component.css']
})
export class MainHotspotComponent {
  isButtonVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isButtonVisible = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
