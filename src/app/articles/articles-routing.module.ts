import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleDetails2Component } from './article-details2/article-details2.component';
import { ArticleDetails3Component } from './article-details3/article-details3.component';
import { ArticleDetails4Component } from './article-details4/article-details4.component';
import { ArticleDetails5Component } from './article-details5/article-details5.component';
import { ArticleDetails6Component } from './article-details6/article-details6.component';

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'article/6', component: ArticleDetails6Component },
  { path: 'article/5', component: ArticleDetails5Component },
  { path: 'article/4', component: ArticleDetails4Component },
  { path: 'article/3', component: ArticleDetails3Component },
  { path: 'article/2', component: ArticleDetails2Component },
  { path: 'article/1', component: ArticleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
