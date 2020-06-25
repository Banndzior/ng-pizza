import { Component, OnInit } from "@angular/core";
import { CommonService } from "../shared/common.service";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.component.html",
  styles: [
    `
      .container {
        margin: 0 auto;
        width: 1280px;
        display: flex;
        justify-content: space-between;
      }
      .navbar {
        box-shadow: 0px 2px 20px black;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor(private common: CommonService) {}

  status: boolean;

  ngOnInit() {
    this.common.actualBtnStatus.subscribe((status) => (this.status = status));
  }

  changeStatus() {
    this.common.changeBtnStatus(!this.status);
  }
}
