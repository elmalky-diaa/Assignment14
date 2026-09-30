import { Component, Input } from '@angular/core';
import { Posts } from '../../interface/posts';
import { TitleMain } from '../../pageTitle/title-main/title-main';
import { CardHorzental } from '../../shared/components/card-horzental/card-horzental';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SectionSubtitle } from '../../shared/components/section-subtitle/section-subtitle';

@Component({
  selector: 'app-latest-articles',
  imports: [TitleMain, CardHorzental, SectionTitle, SectionSubtitle],
  templateUrl: './latest-articles.html',
  styleUrl: './latest-articles.css',
})
export class LatestArticles {
  @Input() postChosed:Posts[]=[];

}
