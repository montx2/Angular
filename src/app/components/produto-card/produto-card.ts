import { Component } from '@angular/core';
import { Produto } from '../../models/produto.model';

@Component({
  imports: [],
  selector: 'app-produto-card', 
  standalone: true,
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.css',
})

export class ProdutoCard{
  item: Produto = {
    id: 1,
    nome: 'Notebook',
    preco: 3500,
    quantidade: 10
  }
}