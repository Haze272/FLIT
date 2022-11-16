import { Injectable } from '@angular/core';
import {IUser} from "../models/user.interface";

@Injectable()
export class AuthService {
  public users: IUser[] = [
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
      avatarUrl: 'https://i.ibb.co/V2pW4TC/avatar.png'
    },
    {
      id: 2,
      login: 'mor_2314',
      email: 'morrison@gmail.com',
      password: '83r5^_',
      name: 'David',
      surname: 'Morisson',
      exp: 37,
      bio: '',
      rank: 1,
      avatarUrl: 'https://i.ibb.co/V2pW4TC/avatar.png'
    },
    {
      id: 3,
      login: 'kevinryan',
      email: 'kevin@gmail.com',
      password: 'kev02937@',
      name: 'Kevin',
      surname: 'Ryan',
      exp: 11,
      bio: '',
      rank: 1,
      avatarUrl: 'https://i.ibb.co/V2pW4TC/avatar.png'
    },
    {
      id: 4,
      login: 'donero',
      email: 'don@gmail.com',
      password: 'ewedon',
      name: 'Don',
      surname: 'Romer',
      exp: 56,
      bio: '',
      rank: 1,
      avatarUrl: 'https://i.ibb.co/V2pW4TC/avatar.png'
    }
  ];

  currentUser!: IUser;

  login(login: string, password: string): boolean {
    for (let user of this.users) {
      if ((user.email === login || user.login === login) && (user.password === password)) {
        this.currentUser = user;
        console.log('Пользователь ' + user.login + ' был авторизован');
        return true
      }
    }
    console.log('Пользователь не был авторизован');
    return false;
  }
}
