import {Injectable} from "@angular/core";
import {IUser} from "../models/user.interface";

@Injectable({
  providedIn: "root"
})
export class UserService {
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
      bio: 'Я python-backend разработчик, мой основной фреймворк - Django (DRF). Имею опыт разработки сложных высоко-нагруженных систем. Качественно выполняю свою работу и всегда стараюсь сделать код максимально простым и надежным.',
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
      bio: '6 лет опыта управления продуктами, создал с нуля и вывел на рынок 12 новых продуктов, масштабировал 5 существующих продуктов в США, Европе, на Ближнем Востоке, Латинской Америке, Индии, России и других рынках в области health tech, marketplaces, Mobile Apps, Digital Banking и e-commerce. 3 года опыта в бизнес-, мобильной- и веб-аналитике. 5 лет предпринимательства. Нанимал и развивал людей, управлял командами из 7-12 человек.\n' +
        'Масштабировал прибыльный бизнес в 5 раз до $65 млн за 2 года — сервис записи к врачу SberHealth.ru.',
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
      bio: 'Учусь в МТУСИ (Московский университет связи и информатики) на заочном обучении (4 курс, специалитет), направление - "Информационные системы и технологии". Параллельно научился общим принципам разработки и языку Си в School21 от СБЕР\'а (аналог intra 42). После увлекался web-разработкой на Javascript/Python и blockchain технологиями (в частности Solana). Поскольку времени было достаточно, то большую его часть тратил на обучение по материалам из открытых источников (OSINT) и заработку на NFT, поэтому конкретного опыта работы немного.',
      rank: 5,
      avatarUrl: 'https://i.ibb.co/KN1f5c7/image-part-007.png',
      dateOfBirth: new Date('2001-02-01')
    },
    {
      id: 5,
      login: 'haze27',
      email: '1',
      password: '1',
      name: 'Степан',
      surname: 'Беркунов',
      exp: 2642,
      bio: 'Приветствую! Я Степан - веб-разработчик из Москвы. Имею коммерческий опыт в разработке веб-приложений. Мой ключевой профессиональный навык - разработка приложений в стеке с Angular.\n' +
        'Гитхаб - https://github.com/Haze272',
      rank: 6,
      avatarUrl: 'https://i.ibb.co/KN1f5c7/image-part-007.png',
      dateOfBirth: new Date('2002-02-27')
    }
  ];

  getUserById(id: number) {
    for (let user of this.users) {
      if (user.id === id) {
        return user;
      }
    }

    return {} as IUser
  }

  getUsers() {
    return this.users;
  }

  getAge(dateOfBirth: Date): number {
    let today = new Date();
    let birthDate = new Date(
      dateOfBirth.toISOString().slice(0, 10)
    );
    let age = today.getFullYear() - birthDate.getFullYear();

    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDay() - birthDate.getDay();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if ( age === 0 ) {
      m = 12 + m;
      if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
        m--;
      }
    }

    return age
  }

  ageText(age: number) {
    let txt;
    let count = age % 100;
    if (count >= 5 && count <= 20) {
      txt = 'лет';
    } else {
      count = count % 10;
      if (count == 1) {
        txt = 'год';
      } else if (count >= 2 && count <= 4) {
        txt = 'года';
      } else {
        txt = 'лет';
      }
    }

    return txt;
  }

}
