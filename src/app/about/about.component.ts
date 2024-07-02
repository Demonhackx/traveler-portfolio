import { Component } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  title: string = '';
  sections: {header: string, content: string}[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(data => {
      this.title = data.title;
      this.sections = data.sections;
    });
  }

}
