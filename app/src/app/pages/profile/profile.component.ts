import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {IUser} from "../../shared/models/user.interface";
import {CurrentUserService} from "../../shared/services/current-user.service";
import {AuthService} from "../../shared/services/auth.service";
import {IRank} from "../../shared/models/rank.interface";
import {RankService} from "../../shared/services/rank.service";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isLogged: boolean = false;
  loginFlagSub!: Subscription;

  user!: IUser;

  currentUser!: IUser;
  userSub!: Subscription;

  userRank!: IRank;
  nextRankExp!: number;

  constructor(
    private route: ActivatedRoute,
    private currentUserService: CurrentUserService,
    private authService: AuthService,
    private rankService: RankService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    let userId: number = parseInt(this.route.snapshot.params['userId']);
    this.user = this.userService.getUserById(userId);


    this.userRank = this.rankService.getMockCustomerRankById(this.user.rank);
    this.nextRankExp = this.rankService.getNextRankExp(this.user.rank);

    this.loginFlagSub = this.authService.isLogged$.subscribe((loginFlag) => {
      this.isLogged = loginFlag;
    })

    this.userSub = this.currentUserService.getUser().subscribe((user) => {
          this.currentUser = user;
    })
  }

  getAge() {
    return this.userService.getAge(this.user.dateOfBirth)
  }

  ageText() {
    return this.userService.ageText(this.getAge());
  }

  ngOnDestroy() {
    this.loginFlagSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
