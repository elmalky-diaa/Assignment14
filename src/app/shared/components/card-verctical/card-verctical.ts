import { Post, Posts } from './../../../interface/posts';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-verctical',
  imports: [RouterLink],
  templateUrl: './card-verctical.html',
  styleUrl: './card-verctical.css',
})
export class CardVerctical {
  @Input() Posts!:Posts

}
