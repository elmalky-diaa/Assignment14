import { Component, Input } from '@angular/core';
import { Posts } from '../../../interface/posts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-horzental',
  imports: [RouterLink],
  templateUrl: './card-horzental.html',
  styleUrl: './card-horzental.css',
})
export class CardHorzental {
  @Input() Posts!:Posts
}
