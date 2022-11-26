import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/user.interface";
import {IRank} from "../../models/rank.interface";
import {RankService} from "../../services/rank.service";

@Component({
  selector: 'app-exp-progress',
  templateUrl: './exp-progress.component.html',
  styleUrls: ['./exp-progress.component.scss']
})
export class ExpProgressComponent implements OnInit {
  @Input() user!: IUser;
  nextRankExp!: number;
  currentRank!: IRank;

  constructor(
    private rankService: RankService
  ) { }

  ngOnInit(): void {
    this.nextRankExp = this.rankService.getNextRankExp(this.user.rank);
    this.currentRank = this.rankService.getMockCustomerRankById(this.user.rank);
  }

  getRankColorClass(): string {
    let cssClass = '';
    switch (this.user.rank) {
      case 1:
        cssClass = 'stone'
        break;
      case 2:
        cssClass = 'cooper'
        break;
      case 3:
        cssClass = 'iron'
        break;
      case 4:
        cssClass = 'bronze'
        break;
      case 5:
        cssClass = 'silver'
        break;
      case 6:
        cssClass = 'gold'
        break;
      case 7:
        cssClass = 'platinum'
        break;
    }
    return cssClass;
  }
}
