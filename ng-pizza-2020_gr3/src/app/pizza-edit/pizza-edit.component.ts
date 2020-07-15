import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { Router, ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})

export class PizzaEditComponent implements OnInit {
  id:string;
  pizza: Pizza;
  constructor(private route: ActivatedRoute, private router: Router, private pizzaSvc: PizzaService) { }

  ngOnInit() {
   
    this.id = this.route.snapshot.paramMap.get('id');
    this.pizzaSvc.getPizza(parseInt(this.id, 10)).subscribe((pizzaResponse) => this.pizza = pizzaResponse);
    console.log("ID", this.id)
  }
 
  
  register(event, myForm: NgForm) {
   
    console.log("EDITED", myForm.form.status)
    if(myForm.form.status=="VALID") {
      this.pizzaSvc
      .editPizza(parseInt(this.id), myForm.value).subscribe((response)=>{
        this.router.navigateByUrl(`/pizza/${this.id}`);
      })

    } else {
      alert('Brak podstawowych informacji w formularzu!');
    }
  }
}
