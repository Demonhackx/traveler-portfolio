import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-data-example-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.destination.name }}</h1>
    <div mat-dialog-content>
      <img [src]="data.destination.imageUrl" alt="Destination" [style.width.%]="100" [style.height.px]="300" style="object-fit: cover;">
      <p>{{ data.destination.description }}</p>
      <p>{{ data.destination.info }}</p>
      <p>Explore more: <a [href]="data.destination.explore" target="_blank">{{ data.destination.explore }}</a></p>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="'close'" class="btn btn-primary">Close</button>
    </div>
  `,
})
export class DialogDataExampleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
