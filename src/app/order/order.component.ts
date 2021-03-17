import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../shared/model/menu.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
