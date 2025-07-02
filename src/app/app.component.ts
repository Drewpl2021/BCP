import {Component, OnInit, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {animate, state, style, transition, trigger} from "@angular/animations"; // Importar CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'DocumentWeb';

  ngOnInit() {
    // Lógica para el acordeón
    const accordions = document.querySelectorAll(".accordion-btn");
    accordions.forEach((accordion: any) => {
      accordion.addEventListener("click", function () {
        // Alternar la visibilidad del panel
        const panel = accordion.nextElementSibling;
        panel.classList.toggle("show");

        // Cambiar el texto del botón al abrir/cerrar
        if (panel.classList.contains("show")) {
          accordion.innerHTML = accordion.innerHTML.replace("Siguiente", "Cerrar");
        } else {
          accordion.innerHTML = accordion.innerHTML.replace("Cerrar", "Siguiente");
        }
      });
    });
  }
  constructor(private renderer: Renderer2) {}

  activarParpadeo(panelId: string, parpadeoId: string, parpadeo8Id: string, parpadeo3Id: string, parpadeo7Id: string): void {
    // Obtener el panel y los elementos de parpadeo dentro de él
    const panel = document.getElementById(panelId);
    const parpadeo = panel?.querySelector(`#${parpadeoId}`);
    const parpadeo8 = panel?.querySelector(`#${parpadeo8Id}`);
    const parpadeo7 = panel?.querySelector(`#${parpadeo7Id}`);
    const parpadeo3 = panel?.querySelector(`#${parpadeo3Id}`);

    // Activar el parpadeo y cambiar el color del borde para parpadeo
    if (parpadeo) {
      this.renderer.addClass(parpadeo, 'animate__flash');
      this.renderer.addClass(parpadeo, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo, 'border-color', 'blue'); // Cambiar el color del borde a azul

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }

    // Activar el parpadeo y cambiar el color del borde para parpadeo8
    if (parpadeo8) {
      this.renderer.addClass(parpadeo8, 'animate__flash');
      this.renderer.addClass(parpadeo8, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo8, 'border-color', 'blue'); // Cambiar el color del borde a azul

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo8, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }
    // Activar el parpadeo y cambiar el color del borde para parpadeo8
    if (parpadeo7) {
      this.renderer.addClass(parpadeo7, 'animate__flash');
      this.renderer.addClass(parpadeo7, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo7, 'border-color', 'blue'); // Cambiar el color del borde a azul

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo7, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }

    // Activar el parpadeo y cambiar el color del borde para parpadeo3
    if (parpadeo3) {
      this.renderer.addClass(parpadeo3, 'animate__flash');
      this.renderer.addClass(parpadeo3, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo3, 'border-color', 'blue'); // Cambiar el color del borde a azul

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo3, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }
  }

  activarParpadeo2(panelId: string, parpadeo4Id: string, parpadeo6Id: string): void {
    // Obtener el panel y los elementos de parpadeo dentro de él
    const panel = document.getElementById(panelId);
    const parpadeo4Element = panel?.querySelector(`#${parpadeo4Id}`);
    const parpadeo6Element = panel?.querySelector(`#${parpadeo6Id}`);

    // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo4Element) {
      this.renderer.addClass(parpadeo4Element, 'animate__flash');
      this.renderer.addClass(parpadeo4Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo4Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo4Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }

    // Activar el parpadeo y cambiar el color del borde para parpadeo6
    if (parpadeo6Element) {
      this.renderer.addClass(parpadeo6Element, 'animate__flash');
      this.renderer.addClass(parpadeo6Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo6Element, 'border-color', 'red'); // Cambiar el color del borde a azul

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo6Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }
  }


  activarParpadeo3(panelId: string, parpadeo12Id: string, parpadeo13Id: string): void {
    // Obtener el panel y los elementos de parpadeo dentro de él
    const panel = document.getElementById(panelId);
    const parpadeo12Element = panel?.querySelector(`#${parpadeo12Id}`);
    const parpadeo13Element = panel?.querySelector(`#${parpadeo13Id}`);

    // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo12Element) {
      this.renderer.addClass(parpadeo12Element, 'animate__flash');
      this.renderer.addClass(parpadeo12Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo12Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo12Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }

    // Activar el parpadeo y cambiar el color del borde para parpadeo6
    if (parpadeo13Element) {
      this.renderer.addClass(parpadeo13Element, 'animate__flash');
      this.renderer.addClass(parpadeo13Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo13Element, 'border-color', 'red'); // Cambiar el color del borde a azul

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo13Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }
  }
  activarParpadeo1(panelId: string, parpadeo12Id: string, ): void {
    // Obtener el panel y los elementos de parpadeo dentro de él
    const panel = document.getElementById(panelId);
    const parpadeo12Element = panel?.querySelector(`#${parpadeo12Id}`);

    // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo12Element) {
      this.renderer.addClass(parpadeo12Element, 'animate__flash');
      this.renderer.addClass(parpadeo12Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo12Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo12Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }

  }

  activarParpadeo4(panelId: string, parpadeo12Id: string, parpadeo1Id: string,parpadeo2Id: string,parpadeo3Id: string,): void {
    // Obtener el panel y los elementos de parpadeo dentro de él
    const panel = document.getElementById(panelId);
    const parpadeo12Element = panel?.querySelector(`#${parpadeo12Id}`);
    const parpadeo2Element = panel?.querySelector(`#${parpadeo1Id}`);
    const parpadeo1Element = panel?.querySelector(`#${parpadeo2Id}`);
    const parpadeo3Element = panel?.querySelector(`#${parpadeo3Id}`);

    // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo12Element) {
      this.renderer.addClass(parpadeo12Element, 'animate__flash');
      this.renderer.addClass(parpadeo12Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo12Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo12Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }
    // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo2Element) {
      this.renderer.addClass(parpadeo2Element, 'animate__flash');
      this.renderer.addClass(parpadeo2Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo2Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo2Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }  // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo1Element) {
      this.renderer.addClass(parpadeo1Element, 'animate__flash');
      this.renderer.addClass(parpadeo1Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo1Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo1Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }  // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo3Element) {
      this.renderer.addClass(parpadeo3Element, 'animate__flash');
      this.renderer.addClass(parpadeo3Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo3Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo3Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }
  }

  activarParpadeo5(panelId: string, parpadeo12Id: string, parpadeo1Id: string,parpadeo2Id: string): void {
    // Obtener el panel y los elementos de parpadeo dentro de él
    const panel = document.getElementById(panelId);
    const parpadeo12Element = panel?.querySelector(`#${parpadeo12Id}`);
    const parpadeo2Element = panel?.querySelector(`#${parpadeo1Id}`);
    const parpadeo1Element = panel?.querySelector(`#${parpadeo2Id}`);

    // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo12Element) {
      this.renderer.addClass(parpadeo12Element, 'animate__flash');
      this.renderer.addClass(parpadeo12Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo12Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo12Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }
    // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo2Element) {
      this.renderer.addClass(parpadeo2Element, 'animate__flash');
      this.renderer.addClass(parpadeo2Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo2Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo2Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }  // Activar el parpadeo y cambiar el color del borde para parpadeo4
    if (parpadeo1Element) {
      this.renderer.addClass(parpadeo1Element, 'animate__flash');
      this.renderer.addClass(parpadeo1Element, 'animate__infinite'); // Hacer que el parpadeo dure de forma infinita
      this.renderer.setStyle(parpadeo1Element, 'border-color', 'red'); // Cambiar el color del borde a rojo

      // Detener la animación después de 10 segundos
      setTimeout(() => {
        this.renderer.removeClass(parpadeo1Element, 'animate__infinite');
      }, 10000); // 10000 milisegundos = 10 segundos
    }  // Activar el parpadeo y cambiar el color del borde para parpadeo4

  }
}
