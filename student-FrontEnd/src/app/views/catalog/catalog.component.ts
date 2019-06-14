import { Component, OnInit } from '@angular/core';
import {CrudServiceService} from '../../../services/crud-service.service';
import { catalog } from '../../../models/catolog.class';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public listCatalog : catalog[];
  constructor(
    public catalogService : CrudServiceService,
  
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.catalogService.getAll().subscribe(
      data => {
      
        this.listCatalog = data;
        console.log(this.listCatalog);
      }
    )
  }

}
