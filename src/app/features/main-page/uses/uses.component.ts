import { Component } from '@angular/core';

@Component({
  selector: 'app-uses',
  templateUrl: './uses.component.html',
  styleUrls: ['./uses.component.css']
})
export class UsesComponent {
  texts: string[] = ['Streaming', 'Estudio Remoto', 'Trabajo remoto', 'Gaming', 'Creacion de Contenido'];
  currentTextIndex: number = 0;

  ngOnInit() {
    this.changeText();
  }

  changeText() {
    setInterval(() => {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
    }, 1000);
  }
}
