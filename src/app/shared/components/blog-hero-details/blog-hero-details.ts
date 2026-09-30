import { Post } from './../../../interface/posts';
import { Component, Input } from '@angular/core';
import { Posts } from '../../../interface/posts';
import { Categories } from '../../../interface/categories';

@Component({
  selector: 'app-blog-hero-details',
  imports: [],
  templateUrl: './blog-hero-details.html',
  styleUrl: './blog-hero-details.css',
})
export class BlogHeroDetails {
     @Input() id!: string
     @Input() post:any
     @Input() allPosts:Posts[]=[];
    
    @Input() allcategory:Categories[]=[];
}
