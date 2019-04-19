import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import {Article} from '../models/article';
import {ArticleService} from '../article.service'
import { Observable } from 'rxjs/Observable';
import { FilterPipe } from '../filter.pipe'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {

  private articles: Article[];

  constructor(private articleService: ArticleService) { 
  }

  ngOnInit() {
    this.articleService.getAll().subscribe(articles  => this.articles = articles);
  }

  delete(article: Article) {
    this.articleService.delete(article.id).subscribe(() => {
      this.articleService.getAll().subscribe(articles  => this.articles = articles);
    });
  }

}
