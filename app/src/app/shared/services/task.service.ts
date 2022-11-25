import {ITask} from "../models/task.interface";
import {ITaskType} from "../models/task-type.interface";
import {IUser} from "../models/user.interface";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";

@Injectable()
export class TaskService {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  getProductById(id: number) {
    let tasks = this.getMockTasks();

    let foundTask: ITask | undefined =  tasks.find((element) => {
      return element.id === id
    });

    if (foundTask) {
      return foundTask;
    } else {
      let unknownTask: ITask = {
        id: 0,
        title: 'N/A',
        description: 'Task does not exist!',
        price: 0,
        tags: [],
        taskType: {
          name: 'N/A',
          description: 'N/A'
        },
        date: 'N/A',
        responsesCount: 0,
        customerId: 0
      };
      return unknownTask;
    }
  }

  getMockUserById(id: number) {
    let users = this.getMockUsers();

    let foundTask = users.find((el) => {
      return el.id === id
    })

    return foundTask
  }

  getMockTasks() {
    let products: ITask[] = [
      {
        id: 1,
        title: 'Доработка проекта на php',
        description: 'Требуется включиться в два проекта и дорабатывать их по задачам. Только бек. Фронт написан на vue. Команды и студии не интересны. Отклик начните с ответа на три плюс три. Более детальное обсуждение с каждым разработчиком индивидуально. В отклике укажите, сколько готовый уделять в день, когда готовы приступить и где находитесь территориально, работа сделка или по часам.',
        price: 3000,
        tags: ['php', 'git', 'back'],
        taskType: {
          name: 'Back-end',
          description: ''
        },
        date: '12 ноября 2022, 11:27',
        responsesCount: 4,
        customerId: 7
      },
      {
        id: 2,
        title: 'Написать на Laravel игровой сайт (для настольных игр)',
        description: 'Необходимо на Laravel (без использования Node.Js) написать игровой сайт, где зарегистрированные пользователи играли бы друг с другом в режиме реального времени в настольные игры (пока только шашки). Гости могут только просматривать текущие игры. Также нужна возможность чата между игроками, статистика, таблица лидеров, турниры (круговые и швейцарка).',
        price: 30000,
        tags: ['laravel', 'php', 'javascript'],
        taskType: {
          name: 'WEB-разработка',
          description: ''
        },
        date: '12 ноября 2022, 11:06',
        responsesCount: 12,
        customerId: 7
      },
      {
        id: 3,
        title: 'Требуется копирайтер',
        description: 'Ищем копирайтеров и людей, которые любят работать с текстом\n' +
          'Работа удаленная и заключается в печати текста со сканов\n' +
          'Время работы любое. Есть менеджер, который даст ответ на все вопросы и поможет разобраться в работе.',
        price: 9000,
        tags: ['Грамотность'],
        taskType: {
          name: 'Копирайтинг',
          description: ''
        },
        date: '12 ноября 2022, 10:25',
        responsesCount: 11,
        customerId: 7
      },
      {
        id: 4,
        title: 'Разработка сайта',
        description: 'Требуется включиться в два проекта и дорабатывать их по задачам. Только бек. Фронт написан на vue. Команды и студии не интересны. Отклик начните с ответа на три плюс три. Более детальное обсуждение с каждым разработчиком индивидуально. В отклике укажите, сколько готовый уделять в день, когда готовы приступить и где находитесь территориально, работа сделка или по часам.',
        price: 110000,
        tags: ['html', 'css', 'javascript'],
        taskType: {
          name: 'Back-end',
          description: ''
        },
        date: '11 ноября 2022, 23:27',
        responsesCount: 44,
        customerId: 7
      },
      {
        id: 5,
        title: 'Написать на Laravel игровой сайт (для настольных игр)',
        description: 'Необходимо на Laravel (без использования Node.Js) написать игровой сайт, где зарегистрированные пользователи играли бы друг с другом в режиме реального времени в настольные игры (пока только шашки). Гости могут только просматривать текущие игры. Также нужна возможность чата между игроками, статистика, таблица лидеров, турниры (круговые и швейцарка).',
        price: 30000,
        tags: ['laravel', 'php', 'javascript'],
        taskType: {
          name: 'WEB-разработка',
          description: ''
        },
        date: '12 ноября 2022, 11:06',
        responsesCount: 12,
        customerId: 7
      }
    ];
    return products;
  }

  getMockTaskTypes() {
    let taskTypes: ITaskType[] = [
      {
        name: 'WEB-разработка',
        description: 'Задание содержит в себе разработку всего, что связано в WEB'
      },
      {
        name: 'MobDev',
        description: 'Задание является разработкой/доработкой мобильного ПО'
      },
      {
        name: 'Дизайн',
        description: 'Задание состоит из составления дизайна, макета или другой цифровой графики'
      },
      {
        name: '3D-моделирование',
        description: ''
      },
      {
        name: 'Desktop разработка',
        description: ''
      },
      {
        name: 'SEO',
        description: ''
      },
      {
        name: 'Копирайтинг',
        description: ''
      }
    ];
    return taskTypes;
  }

  getMockUsers() {
    let users: IUser[] = this.userService.getUsers();

    return users;
  }
}
