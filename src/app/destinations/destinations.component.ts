import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  title: string = '';
  description: string = '';
  titleVideoButton: string = '';
  destinations: { name: string, description: string, videoUrl?: any }[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getDestinationContent().subscribe(data => {
      this.title = data.title;
      this.description = data.description;
      this.destinations = data.destinations;
      this.titleVideoButton = data.titleVideoButton;
    });
  }

  openVideo(videoUrl: string, destination: any) {
    window.open(videoUrl, '_blank');
  }

}
