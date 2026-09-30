import { Component, Input } from '@angular/core';
import { Posts } from './../../interface/posts';
import { TitleMain } from '../../pageTitle/title-main/title-main';
import { CardVerctical } from '../../shared/components/card-verctical/card-verctical';
import { CardHorzental } from '../../shared/components/card-horzental/card-horzental';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SectionSubtitle } from '../../shared/components/section-subtitle/section-subtitle';


@Component({
  selector: 'app-article-chosed',
  imports: [TitleMain, CardVerctical, SectionTitle, SectionSubtitle],
  templateUrl: './article-chosed.html',
  styleUrl: './article-chosed.css',
})
export class ArticleChosed {
@Input() postChosed:Posts[]=[];


}
