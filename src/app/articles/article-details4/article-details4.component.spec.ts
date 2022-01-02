/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticleDetails4Component } from './article-details4.component';

describe('ArticleDetails4Component', () => {
  let component: ArticleDetails4Component;
  let fixture: ComponentFixture<ArticleDetails4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetails4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetails4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
