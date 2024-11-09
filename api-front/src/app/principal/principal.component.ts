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

  cliente:Cliente[] = [];

  constructor(private servico:ClienteService){}

  selecionar(): void{

  }

  ngOnInit(): void {
    console.log(this.servico.selecionar()
    .subscribe(retorno => this.cliente = retorno))
    
  }
}
