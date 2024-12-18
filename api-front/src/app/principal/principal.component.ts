import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClienteService } from '../servico/cliente.service';
import { Cliente } from '../modelo/Cliente';
import { FormsModule } from '@angular/forms';
import { ComumService } from '../servico/comum.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  btnCadastrado: boolean = false;

  clientes:Cliente[] = [];
  constructor(private servico:ClienteService, private comum:ComumService){}

  cep: string = "";
  cepRecebido: JSON[] = [];
  testecep(): void{
    this.comum.getCep(this.cep)
    .subscribe(retorno => this.cepRecebido.push(retorno))
  }

  cliente = new Cliente;


  ngOnInit(): void {
    this.selecionar();
  }

  selecionar(): void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno)

    
  }

  cadastrar(): void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {
      this.clientes.push(retorno);
      
      this.cliente = new Cliente();
      
    })

    
  }

  selecionarItem(index: number){
    this.btnCadastrado = true; 
    this.cliente = this.clientes[index];
  }

  alterar():void{
    this.servico.alterar(this.cliente)
    .subscribe(retorno => {

      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == retorno.codigo
      });

      this.clientes[posicao] = retorno

      this.btnCadastrado = false;

      this.cliente = new Cliente

    })
  }

  excluir(){
    this.servico.excluir(this.cliente.codigo)
    .subscribe(retorno => {

      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == this.cliente.codigo
      });

      this.clientes.splice(posicao, 1);

      this.btnCadastrado = false;

      this.cliente = new Cliente
    })
  }

  cancelar(){
    this.cliente = new Cliente()
    this.btnCadastrado = false;
  }
}
