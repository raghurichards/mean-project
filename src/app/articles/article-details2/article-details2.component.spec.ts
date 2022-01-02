/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticleDetails2Component } from './article-details2.component';

describe('ArticleDetails2Component', () => {
  let component: ArticleDetails2Component;
  let fixture: ComponentFixture<ArticleDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
