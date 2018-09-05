import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LineItem } from '../model';

interface Fruit {
  image: string;
  label: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  fruitsList: Fruit[] = [
    {image: "assets/fruits/acorn_squash.png", label: "Acorn Squash"},
    {image: "assets/fruits/apple.png",        label: "Apple"},
    {image: "assets/fruits/bell_pepper.png",  label: "Bell Pepper"},
    {image: "assets/fruits/blueberries.png",  label: "Blueberries"},
    {image: "assets/fruits/broccoli.png",     label: "Broccoli"},
    {image: "assets/fruits/carrot.png",       label: "Carrot"},
    {image: "assets/fruits/celery.png",       label: "Celery"},
    {image: "assets/fruits/chili_pepper.png", label: "Chili Pepper"},
    {image: "assets/fruits/corn.png",         label: "Corn"},
    {image: "assets/fruits/eggplant.png",     label: "Egg Plant"},
    {image: "assets/fruits/harold.png",       label: "Harold"},
    {image: "assets/fruits/lettuce.png",      label: "Lettuce"},
    {image: "assets/fruits/mushroom.png",     label: "Mushroom"},
    {image: "assets/fruits/onion.png",        label: "Onion"},
    {image: "assets/fruits/potato.png",       label: "Potato"},
    {image: "assets/fruits/pumpkin.png",      label: "Pumpkin"},
    {image: "assets/fruits/radish.png",       label: "Radish"},
    {image: "assets/fruits/squash.png",       label: "Squash"},
    {image: "assets/fruits/strawberry.png",   label: "Strawberry"},
    {image: "assets/fruits/sugar_snap.png",   label: "Sugar Snap"},
    {image: "assets/fruits/tomato.png",       label: "Tomato"},
    {image: "assets/fruits/zucchini.png",     label: "Zucchini"}
  ]

  fruitImg = "";
  selectedFruit = "";

  @Output()
  newLineItem = new EventEmitter<LineItem>();

  constructor() { }

  ngOnInit() {
  }

  displayFruit(event: any)
  {
    console.log(event.target.value);
    this.fruitImg = this.fruitsList[event.target.value].image;
    this.selectedFruit = this.fruitsList[event.target.value].label;
  }

  add(form: NgForm)
  {
    console.log("form: ", form.value);

    const lineItem: LineItem = {
      label: this.selectedFruit,
      quantity: form.value.quantity
    };

    //fire the event with the payload
    this.newLineItem.next(lineItem);

    form.resetForm();
    this.selectedFruit = "";
    this.fruitImg = "";
  }
}
