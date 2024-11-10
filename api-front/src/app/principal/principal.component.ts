import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClienteService } from '../servico/cliente.service';
import { Cliente } from '../modelo/Cliente';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  btnCadastrado: boolean = false;

  clientes:Cliente[] = [];

  cliente = new Cliente;

  constructor(private servico:ClienteService){}

  selecionar(): void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno)
  }

  ngOnInit(): void {
    this.selecionar();
  }

  selecionarItem(index: number){
    this.btnCadastrado = true
    console.log(this.clientes[index])
  }
}
