import { Categories } from './../../interface/categories';
import { Component, Input } from '@angular/core';
import { TitleMain } from '../../pageTitle/title-main/title-main';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SectionSubtitle } from '../../shared/components/section-subtitle/section-subtitle';

@Component({
  selector: 'app-explore',
  imports: [TitleMain, SectionTitle, SectionSubtitle],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})
export class Explore {
  @Input() Category!:Categories[];
}
