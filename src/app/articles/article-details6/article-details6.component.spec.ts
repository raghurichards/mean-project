/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticleDetails6Component } from './article-details6.component';

describe('ArticleDetails6Component', () => {
  let component: ArticleDetails6Component;
  let fixture: ComponentFixture<ArticleDetails6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetails6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetails6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
