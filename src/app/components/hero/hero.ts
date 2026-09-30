import { Rank } from './../../interface/rank';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleMain } from '../../pageTitle/title-main/title-main';
import { CardSmall } from '../../shared/components/card-small/card-small';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, TitleMain, CardSmall],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @Input() ranks!:Rank[]
}
