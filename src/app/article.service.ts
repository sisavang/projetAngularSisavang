import { Injectable } from '@angular/core';
import {Article} from './models/Article';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {RawArticle} from "./models/raw-article";


@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) { }

  public getAll(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public get(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/articles/${id}`);
  }

  public add(newArticle : RawArticle): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles/", newArticle);
  }

}


