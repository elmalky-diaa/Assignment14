import { Author } from '../../../interface/author';
import { Posts } from './../../../interface/posts';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-author',
  imports: [],
  templateUrl: './card-author.html',
  styleUrl: './card-author.css',
})
export class CardAuthor {
 @Input() authors!: Author
}
