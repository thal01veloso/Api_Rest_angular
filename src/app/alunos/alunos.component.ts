import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../Service/alunos.service';
import { AlunoModel } from './aluno.Model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno: AlunoModel = new AlunoModel;
  alunos: Array<any> = new Array();

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.listarAlunos();
  }
  listarAlunos(){
     this.alunosService.listarAlunos().subscribe(alunos =>{
        this.alunos=alunos
     },err=>{
       console.log("ERROR ao listar alunos",err)
     })
  }
  cadastrar(){
    console.log(this.aluno)
    this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno=>{
      this.aluno=new AlunoModel();
      this.listarAlunos();
    },err=>{
      console.log("ERROR ao cadastrar alunos",err)
    })
  }

  editar(id:number){
    this.alunosService.editarAluno(id,this.aluno).subscribe(aluno=>{
      this.aluno=new AlunoModel();
      this.listarAlunos();
    },err=>{
      console.log("ERROR ao editar alunos",err)
    })
  }

  deletar(id:number){
    this.alunosService.deletarAluno(id).subscribe(aluno=>{
      this.aluno=new AlunoModel();
      this.listarAlunos();
    },err=>{
      console.log("ERROR ao editar alunos",err)
    })
  }

}
