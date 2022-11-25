import {Injectable} from "@angular/core";
import {IRank} from "../models/rank.interface";

// TODO: This service invoke error that I have not caught yet
@Injectable({
  providedIn: 'root'
})
export class RankService {
  getMockCustomerRankById(id: number): IRank {
    let foundRank = this.getMockCustomerRanks().find((el) => {
      return el.id === id
    })

    return foundRank as IRank
  }

  getNextRankExp(id: number): number {
    return this.getMockCustomerRankById(id + 1).expRequired;
  }

  getMockCustomerRanks(): IRank[] {
    return [
      {
        id: 1,
        name: 'Каменный',
        description: 'Это начальный ранг для недавно зарегестрированных пользователей. Создавай заказы, давай комментарии - и опыт не заставит себя ждать!',
        expRequired: 0
      },
      {
        id: 2,
        name: 'Медный',
        description: 'Этот титул означает, что ты успешно провёл несколько заказов! Тебе открыта функция оценки других заказов!',
        expRequired: 100
      },
      {
        id: 3,
        name: 'Железный',
        description: 'Железный статус даёт тебе возможность оставлять комментарии к чужим заказам!',
        expRequired: 300
      },
      {
        id: 4,
        name: 'Бронзовый',
        description: 'Бронзовый статус позволяет тебе продвигать один из своих заказов раз в день!',
        expRequired: 500
      },
      {
        id: 5,
        name: 'Серебрянный',
        description: 'Серебрянный статус даёт возможность продвигать два раза в день один заказ, либо по одному разу два заказа!',
        expRequired: 1000
      },
      {
        id: 6,
        name: 'Золотой',
        description: 'Золотой статус позволяет продвигать каждый твой заказ до двух раз в день! Также ты можешь добавлять одному из твоих активных заказов особое золотое выделение - твой заказ будет видно невооружённым глазом!',
        expRequired: 2000
      },
      {
        id: 7,
        name: 'Платиновый',
        description: 'Платиновый статус позволяет продвигать каждый твой заказ до трёх раз в день! Помимо этого, два твоих активных заказа будут иметь специальные выделение, а в блоке отзывов твой отзыв будет сиять платиновой плиткой!',
        expRequired: 3000
      },
    ];
  }
}
