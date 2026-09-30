import { Rank } from './../../../interface/rank';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-small',
  imports: [],
  templateUrl: './card-small.html',
  styleUrl: './card-small.css',
})
export class CardSmall {
  @Input() rank!:Rank
}
