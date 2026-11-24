import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoCard } from './components/produto-card/produto-card'

@Component({
  imports: [RouterOutlet, ProdutoCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('meu-novo-projeto');
}
