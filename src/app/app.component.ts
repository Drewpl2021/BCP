import {Component, OnInit} from '@angular/core';
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
}
