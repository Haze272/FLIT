import { Injectable } from '@angular/core';
import {IUser} from "../models/user.interface";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class AuthService {
  private users: IUser[] = [
    {
      id: 1,
      login: 'johnd',
      email: 'john@gmail.com',
      password: 'm38rmF$',
      name: 'John',
      surname: 'Doe',
      exp: 25,
      bio: 'Общий опыт работы в digital - 9 лет. Более 4х лет опыта в разработке B2B/B2C программного обеспечения: web, ios, android в продуктовых  компаниях (EdTech, mHealth). Начинал карьеру как SEO-специалист в ТОП3 digital агентстве Ingate, далее в образовательной компании, в 2018 году сменил профиль в сторону работы с продуктом и дорос до директора по продукту где развивал текущие продуктовые линейки, создавал новые образовательные продукты и растил целевые показатели путем улучшения пользовательского опыта. ',
      rank: 1,
      avatarUrl: 'https://i.ibb.co/V2pW4TC/avatar.png',
      dateOfBirth: new Date('2001-02-01')
    },
    {
      id: 2,
      login: 'mor_2314',
      email: 'morrison@gmail.com',
      password: '83r5^_',
      name: 'David',
      surname: 'Morisson',
      exp: 132,
      bio: '',
      rank: 2,
      avatarUrl: 'https://i.ibb.co/W3G69Gc/image-part-017.png',
      dateOfBirth: new Date('2001-02-01')
    },
    {
      id: 3,
      login: 'kevinryan',
      email: 'kevin@gmail.com',
      password: 'kev02937@',
      name: 'Kevin',
      surname: 'Ryan',
      exp: 466,
      bio: '',
      rank: 3,
      avatarUrl: 'https://i.ibb.co/XtHBdPf/image-part-009.png',
      dateOfBirth: new Date('2001-02-01')
    },
    {
      id: 4,
      login: 'donero',
      email: 'don@gmail.com',
      password: 'ewedon',
      name: 'Don',
      surname: 'Romer',
      exp: 1337,
      bio: '',
      rank: 4,
      avatarUrl: 'https://i.ibb.co/KN1f5c7/image-part-007.png',
      dateOfBirth: new Date('2001-02-01')
    }
  ];

  currentUser$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
    id: 0,
    login: 'N/A',
    email: 'N/A',
    password: 'N/A',
    name: 'N/A',
    surname: 'N/A',
    exp: 0,
    bio: '',
    rank: 0,
    avatarUrl: 'N/A',
    dateOfBirth: new Date()
  });

  constructor() {
  }

  login(login: string, password: string): boolean {
    for (let user of this.users) {
      if ((user.email === login || user.login === login) && (user.password === password)) {
        console.log('ЕБАЛ ВАС В РОТ АНТИХАЙП')
        this.currentUser$.next(user);
        console.log('Пользователь ' + user.login + ' был авторизован');
        console.log(this.currentUser$.value)
        return true
      }
    }
    console.log('Пользователь не был авторизован');
    return false;
  }

  getUsers() {
    return this.users;
  }
}
