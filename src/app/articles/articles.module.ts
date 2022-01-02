import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetails6Component } from './article-details6/article-details6.component';
import { ArticleDetails5Component } from './article-details5/article-details5.component';
import { ArticleDetails4Component } from './article-details4/article-details4.component';
import { ArticleDetails3Component } from './article-details3/article-details3.component';
import { ArticleDetails2Component } from './article-details2/article-details2.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent,
    ArticleDetails2Component,
    ArticleDetails3Component,
    ArticleDetails4Component,
    ArticleDetails5Component,
    ArticleDetails6Component,
    LatestArticlesComponent,
    FeaturedArticlesComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, ArticlesRoutingModule],
  exports: [LatestArticlesComponent],
})
export class ArticlesModule {}
