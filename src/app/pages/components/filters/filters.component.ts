import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html' 

})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>()
  
  categories!: Category[];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {

    this.storeService.getAllCategories().subscribe( ( data ) => { console.log(data);
    
    this.categories = data.data;
    
    })

  }

  onShowCategory(category: string){
    this.showCategory.emit(category);
  }

}
