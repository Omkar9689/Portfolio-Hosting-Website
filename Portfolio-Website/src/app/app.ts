import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OmkarComponent } from "../omkar-component/omkar-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,OmkarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio-Website');
}
