import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {
  public image = '';
  public text: string;
  public id: number;

  constructor(private dataService: DataService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string;
    this.activatedRoute.paramMap.subscribe(params =>{
      id = params.get("id");
    });
    if(id){
      this.dataService.getById(id).subscribe(response =>{
        this.image = response['image'];
        this.text = response['text'];
      });
    } else {
      this.id = 1;
    }
  }

}
