import { Component, Input } from '@angular/core';
import { Categories } from './../../interface/categories';
import { Posts } from './../../interface/posts';
import { TitleMain } from '../../pageTitle/title-main/title-main';
import { FormsModule } from '@angular/forms';
import { CardHorzental } from '../../shared/components/card-horzental/card-horzental';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { SectionSubtitle } from '../../shared/components/section-subtitle/section-subtitle';
import { CardVerctical } from '../../shared/components/card-verctical/card-verctical';

@Component({
  selector: 'app-articles',
  imports: [TitleMain, FormsModule, CardHorzental, SectionTitle, SectionSubtitle, CardVerctical],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  searchText:string=''
  selectedCategory:string=''
  showGrid:boolean=false;
  currentPage = 1;
  pageSize = 6;


  toggleGride():void{
this.showGrid=!this.showGrid
  }

  @Input() allPosts:Posts[]=[];

@Input() allcategory:Categories[]=[];



 filteredItems() {

      let result = this.allPosts;

    if (this.selectedCategory) {
      result = result.filter(post => post.category === this.selectedCategory);
      return result
    }
  
    if (!this.searchText.trim()) {
      return this.allPosts;
    }
    
      return  this.allPosts.filter(post => 
        
    post.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
    post.content.toLowerCase().includes(this.searchText.toLowerCase())||
    post.category.toLocaleUpperCase().includes(this.searchText.toLowerCase())
  );

  }

  get totalPages(): number {
return Math.ceil(this.filteredItems().length / this.pageSize);

}

get paginatedItems(): Posts[] {

  const start = (this.currentPage - 1) * this.pageSize;

  const end = start + this.pageSize;

  return this.filteredItems().slice(start, end);
}


get pages(): number[] {
  return Array.from(
    { length: this.totalPages },
    (_, i) => i + 1
  );
}

changePage(page: number): void {

  if(page < 1 || page > this.totalPages){
    return;
  }

  this.currentPage = page;
}


}