import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/services/menu.service';
import { Observable } from 'rxjs';
import { Dish } from '../shared/model/menu.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
dishes: Array <Dish> = [];
showDish: Dish;

  constructor(private menuService: MenuService) {}
  retrieveAllDishes() {
    this.menuService.retrieveAllDishes()
          .subscribe ();
  }

  ngOnInit(): void {
  }

}
