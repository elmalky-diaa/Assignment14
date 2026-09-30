import { Component, Input } from '@angular/core';
import { TitleMain } from '../../pageTitle/title-main/title-main';
import { Rank } from '../../interface/rank';
import { CardSmall } from '../../shared/components/card-small/card-small';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SectionSubtitle } from '../../shared/components/section-subtitle/section-subtitle';

@Component({
  selector: 'app-our-mission',
  imports: [TitleMain, CardSmall, SectionTitle, SectionSubtitle],
  templateUrl: './our-mission.html',
  styleUrl: './our-mission.css',
})
export class OurMission {
  @Input() ranks!:Rank[]

}
