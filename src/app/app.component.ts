import { Component, ViewChild } from '@angular/core';
import { DataModalComponent } from "app/components/data-modal/data-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  @ViewChild('dataModal') dataModal: DataModalComponent;

  showDataModal(){
    this.dataModal.show();
  }
}
