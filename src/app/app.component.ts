import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  createRows() : any[][]{
    var arr = [];
    for (let i = 0; i < 100;i++){
      arr.push([i, `Name ${i}`, `Dummydata ${i}`])
    }
    return arr;
  }
  column = ['Id', 'Name', 'Dummydata']
  row = this.createRows();
}
