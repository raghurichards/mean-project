/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticleDetails5Component } from './article-details5.component';

describe('ArticleDetails5Component', () => {
  let component: ArticleDetails5Component;
  let fixture: ComponentFixture<ArticleDetails5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetails5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetails5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
