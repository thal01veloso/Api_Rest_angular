import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AlunoModel } from '../alunos/aluno.Model';
@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  listarAlunos(): Observable<any>{
    return this.http.get("http://localhost:3001/Alunos");
  }
  cadastrarAluno(aluno: AlunoModel):Observable<any>{
    return this.http.post("http://localhost:3001/Alunos",aluno);
  }
  editarAluno(id: any, aluno:AlunoModel):Observable<any>{
    return this.http.put("http://localhost:3001/Alunos/".concat(id),aluno);
  }
  deletarAluno(id:any):Observable<any>{
    return this.http.delete("http://localhost:3001/Alunos/".concat(id))
  }
}
