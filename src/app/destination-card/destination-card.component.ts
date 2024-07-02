import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleDialogComponent } from './DialogDataExampleDialogComponent';
import destinations from 'src/assets/content/home-content.json';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent {
  @Input() destination: any;
  titleButton: string = "Explore";
  
  constructor(public dialog: MatDialog) {
    this.destination = destinations;
   }

  openDialog(destination: any) {
    this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        destination: destination,
      },
    });
  }
}
