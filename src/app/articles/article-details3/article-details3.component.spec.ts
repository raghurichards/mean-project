/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticleDetails3Component } from './article-details3.component';

describe('ArticleDetails3Component', () => {
  let component: ArticleDetails3Component;
  let fixture: ComponentFixture<ArticleDetails3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetails3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
