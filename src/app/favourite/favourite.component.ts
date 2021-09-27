import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'favourite',
    templateUrl: './favourite.component.html',
    styleUrls: ['./favourite.component.css'],
})

export class FavouriteComponent implements OnInit{
    @Input('isFavourite')
    isSelected!: boolean;

    @Output('change') click = new EventEmitter();
    isFavourite: any;

    constructor(){

    }
    ngOnInit(){

    }
    onClick(newValue: string | symbol){
        this.isFavourite= !this.isFavourite;
        this.click.emit(this.isFavourite);
    }
}

export interface FavouriteChangedEventArgs {
    newValue: boolean;
 }
