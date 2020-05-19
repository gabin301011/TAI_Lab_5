import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {DataService} from '../../services/data.service'


@Component({
  selector: 'selectize',
  templateUrl: './selectize.component.html',
  styleUrls: ['./selectize.component.css']
})
export class SelectizeComponent implements AfterViewInit {

  @ViewChild('input',{static: false}) input: ElementRef;
  public posts$;
  constructor(private DataService:DataService) { }

  ngAfterViewInit(){
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      map(event => event['target'].value),debounceTime(400),distinctUntilChanged()
      ,switchMap(value => this.DataService.getByText({text:value}))
    ).subscribe(result =>{
      this.posts$ = result;
    })
  }

}
