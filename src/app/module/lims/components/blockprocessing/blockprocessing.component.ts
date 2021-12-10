import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-blockprocessing',
  templateUrl: './blockprocessing.component.html',
  styleUrls: ['./blockprocessing.component.css'],
})
export class BlockprocessingComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string) {
    this._snackBar.open(message, 'close', {
      duration: 2000,
    });
  }

  ngOnInit(): void {}
}
