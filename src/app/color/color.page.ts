import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from '../model/colors.model';
import { ColorsService } from '../services/colors.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit {

  color: Color;

  constructor(private route: ActivatedRoute, private colorsService: ColorsService) { 
    this.route.params.subscribe(parameters =>{
      if(parameters.id){
        console.log('ID: ', parameters.id);
        this.colorsService.getSingleColor(parameters.id).subscribe(res => {
          this.color = res.data;
          console.log(res.data);
        });
      }
    });
  }

  ngOnInit() {
  }

}
