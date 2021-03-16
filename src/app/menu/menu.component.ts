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
dishes$: Observable<Dish[]>;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.dishes$ = this.menuService.getDishes();
  }

}
