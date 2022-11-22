let createError = require('http-errors');
let express = require('express');
let router = express.Router();

marketplaceRouter = express.Router({mergeParams: true});

const pavelPizzas = [
    {
        'name': 'Пепперони',
        'price': 655,
        'weight': 450,
        'components': 'Пицца соус, сыр моцарелла, колбаски пепперони',
        'image': 'https://ibb.co/M9y55zN'
    },
    {
        'name': 'Барбекью',
        'price': 735,
        'weight': 610,
        'components': 'Пицца соус, соус барбекю, сыр моцарелла, сочная курочка, бекон, ветчина, шампиньоны',
        'image': 'https://ibb.co/GF86fgS'
    },
    {
        'name': 'Карбонара',
        'price': 725,
        'weight': 540,
        'components': 'Белый соус, сыр моцарелла, сыр пармезан, бекон, черри, орегано',
        'image': 'https://ibb.co/2vZhyqd'
    },
    {
        'name': 'Двойная пепперони',
        'price': 765,
        'weight': 510,
        'components': 'Пицца соус, сыр моцарелла, колбаски пепперони',
        'image': 'https://ibb.co/b6MG2WQ'
    },
    {
        'name': 'Четыре сыра',
        'price': 735,
        'weight': 480,
        'components': 'Пицца соус, сыр моцарелла, сыр чеддер, сыр эмменталь, сыр блю чиз',
        'image': 'https://ibb.co/dkVqVKV'
    },
    {
        'name': 'Гавайская',
        'price': 665,
        'weight': 520,
        'components': 'Пицца соус, соус кисло-сладкий, сыр моцарелла, кунжут, сочная курочка, ананас, болгарский перец',
        'image': 'https://ibb.co/5sfnNgJ'
    },
    {
        'name': 'Мясная',
        'price': 865,
        'weight': 655,
        'components': 'Соус 1000 островов, сыр моцарелла, сыр пармезан, колбаски чоризо, колбаски тоскана, свинина, говядина, сочная курочка, бекон',
        'image': 'https://ibb.co/jw4TkN3'
    },
    {
        'name': 'Маргарита',
        'price': 545,
        'weight': 480,
        'components': 'Пицца соус, сыр моцарелла, свежий помидор',
        'image': 'https://ibb.co/LNtSjxr'
    }
]
const irinaPizzas = [
    {
        'name': 'Чикен бургер',
        'price': 639,
        'components': 'Бекон, Курица, Лук, Огурцы маринованные, Свежие томаты, Сыр Моцарелла, Соус Пикант',
        'image': 'https://ibb.co/sgLb4rh'
    },
    {
        'name': 'Кордон Блю',
        'price': 569,
        'components': 'Ветчина, Курица, Соус Карбонара, Сыр Моцарелла, Сыр Роккфорти',
        'image': 'https://ibb.co/GW0Nf0v'
    },
    {
        'name': 'Пепперони',
        'price': 429,
        'components': 'Пепперони, Сыр Моцарелла, Соус Чесночный Оригинальный',
        'image': 'https://ibb.co/18LjSm2'
    },
    {
        'name': '4 сезона',
        'price': 789,
        'components': 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы маринованные, Охотничьи колбаски, Пепперони',
        'image': 'https://ibb.co/bFp66HC'
    },
    {
        'name': 'Сырная с ветчиной',
        'price': 289,
        'components': 'Ветчина, Сыр Моцарелла, Томатный соус',
        'image': 'https://ibb.co/HGFcjgs'
    },
    {
        'name': 'Маргарита',
        'price': 359,
        'components': 'Свежие томаты, Сыр Моцарелла, Томатный соус',
        'image': 'https://ibb.co/VVkjjWP'
    },
    {
        'name': 'Гавайская',
        'price': 359,
        'components': 'Ананас, Ветчина, Сыр Моцарелла, Томатный соус',
        'image': 'https://ibb.co/sqdY0HF'
    },
    {
        'name': '4 сыра',
        'price': 639,
        'components': 'Соус Карбонара, Сыр Чеддер (тёртый), Сыр Моцарелла, Сыр Роккфорти, Чесночный соус с сыром Пармезан',
        'image': 'https://ibb.co/0Q76TM1'
    },
];
const kseniaClothes = [
    {
        'name': 'BOSOMI полупальто',
        'article': '11368339',
        'price': 18920,
        'color': 'Чёрный',
        'description': 'Зимнее пальто с натуральным енотом. Легкое, удобное, теплое.Мех отстегивается.',
        'image': 'https://ibb.co/album/bjsdbg'
    },
    {
        'name': 'Olesa Chugunova Рубашка оверсайз',
        'article': '44275522',
        'price': 2541,
        'color': 'Фуксия',
        'description': 'ВНИМАНИЕ! Рубашка из хлопка мнется, так как материал натуральный. Если вы предпочитаете рубашки из менее прихотливых видов ткани, обратите внимание на рубашку такой же посадки из смесового хлопка - арт. 80012708 Рубашка из смесового хлопка не мнется и легко гладится.Плотная рубашка оверсайз из натурального мягкого и приятного к телу 100% хлопка. ',
        'image': 'https://ibb.co/27Qkx8D'
    },
    {
        'name': 'Ticle Худи женское oversize',
        'article': '14648460',
        'price': 2645,
        'color': 'Чёрный',
        'description': 'Уютное худи свободного кроя с объемным капюшоном, спущенным плечом и удобным карманом "кенгуру". Оверсайз крой не сковывает движений, изделие хорошо держит форму. Толстовка из трикотажного футера с мягким начесом очень теплая и приятная к телу.',
        'image': 'https://ibb.co/4SX9k9m'
    },
    {
        'name': 'Olesa Chugunova Рубашка оверсайз',
        'article': '80014799',
        'price': 1650,
        'color': 'Сиреневый',
        'description': 'Женская рубашка оверсайз. Наш хит, но в новом исполнении. Чтобы изделие меньше мялось и было менее прихотливым в уходе - мы создали рубашку из смесового хлопка. Женская рубашка. Рубашка из качественного материала в стиле OVERSIZE белого цвета.',
        'image': 'https://ibb.co/bJYq5Xw'
    },
    {
        'name': 'MATVIENKO Пальто женское зимнее весна осень',
        'article': '15953057',
        'price': 11899,
        'color': 'Молочный',
        'description': 'Пальто женское осеннее / экошуба Амаранта. Женское двубортное пальто прямого силуэта выполнено из мягкого и приятного на ощупь эко-меха. Эко-мех изготавливается из 100% полиэстера. Это легкий, мягкий и теплый материал, который является отличной заменой натуральному меху.',
        'image': 'https://ibb.co/6Xmjckw'
    },
    {
        'name': 'Ravenclo Оверсайз худи',
        'article': '11560977',
        'price': 2855,
        'color': 'Чёрный',
        'description': 'Оверсайз худи марки RAVENCLO. Толстовка свободного силуэта, с увеличенной проймой, шириной рукавов и спущенной плечевой линией. Худи выполено из качественного трикотажного полотна "френч терри" с начесом на изнаночной стороне (при первой стирке, первый верхний слой начеса имеет свойство спадать).',
        'image': 'https://ibb.co/chLnCf8'
    },
    {
        'name': 'RoseWater Худи оверсайз "Maybe" с капюшоном',
        'article': '14950970',
        'price': 4200,
        'color': 'Белый',
        'description': 'Женское оверсайз худи "Maybe" - длинное и тёплое, с двойным капюшоном, изготовлено из качественного трикотажа с начёсом. ',
        'image': 'https://ibb.co/hCBxwKf'
    },
    {
        'name': 'ANNEN Рубашка с широкими рукавами',
        'article': '17909608',
        'price': 2035,
        'color': 'Белый',
        'description': 'Кто-то называет ХИТОМ, кто-то современной БАЗОЙ, а мы и спорить не будем и согласимся с вами :) Это просто наша любимая рубашка! Тренд и удобство в одной модели!Для тех, кто любит по-свободнее, предлагаем примерить размер в размер.',
        'image': 'https://ibb.co/yym02CS'
    },
    {
        'name': 'ZHUKOVA CARE Белая рубашка женская оверсайз офисная',
        'article': '33998099',
        'price': 1539,
        'color': 'Белый',
        'description': 'Оверсайз - что это такое? Одежда в этом стиле не имеет ярко выраженной формы, часто люди в ней выглядят так, будто на них вещи на несколько размеров больше. ',
        'image': 'https://ibb.co/Njn2zrF'
    },
    {
        'name': 'ABRIGO COLLECTION Пальто женское с мехом',
        'article': '14336681',
        'price': 12873,
        'color': 'Чёрный',
        'description': 'Зимнее женское пальто прямого кроя выгодно подчеркивает фигуру, а натуральный мех и шерстяной материал дарят комфорт. Женское пальто предназначено для температур не ниже -15 С. В ассортименте пальто для всех типов фигуры, от полных до стройных. ',
        'image': 'https://ibb.co/8zRfgp6'
    },
    {
        'name': 'Basic store Рубашка блузка женская офисная длинный рукав фонарики',
        'article': '38117744',
        'price': 1100,
        'color': 'Белый',
        'description': 'Женская базовая рубашка - мастхэв любой женщины. Белая рубашка женская выполнена из 100% хлопка, что доставит максимум комфорта при носке. Носите белую классическую рубашку в офис, на деловую встречу или вечернюю прогулку.',
        'image': 'https://ibb.co/gT202kn'
    }
];
const estebanTaco = [
    {
        'name': 'Биф кесадия',
        'description': 'Великолепное блюдо, состоящее из тапы, фарша, овощей и главное - сыра!',
        'price': 519,
        'weight': 400,
        'imgUrl': 'https://i.imgur.com/gsyYw6n.jpg'
    },
    {
        'name': 'Тако де сердо',
        'description': 'Тако с острым свиными мясом в хрустящей тапе!',
        'price': 379,
        'weight': 260,
        'imgUrl': 'https://i.imgur.com/rCShMfJ.jpg'
    },
    {
        'name': 'Чикен буррито',
        'description': 'Мексиканская вселенная из вкусов в привычной форме!',
        'price': 449,
        'weight': 340,
        'imgUrl': 'https://i.imgur.com/5oHLjjW.jpg'
    },
    {
        'name': 'Чикен кесадия',
        'description': 'Великолепное блюдо, состоящее из тапы, куриного мяса, овощей и главное - сыра!',
        'price': 489,
        'weight': 400,
        'imgUrl': 'https://i.imgur.com/SfwU2zq.jpg'
    },
    {
        'name': 'Чикен тако',
        'description': 'Нежно обжаренное куриное мясо с овощами и соусом гуакамоле, завернутое в хрустящую тапу',
        'price': 359,
        'weight': 250,
        'imgUrl': 'https://i.imgur.com/Sfy4o05.jpg'
    },
    {
        'name': 'Тако криспи',
        'description': 'Классическое тако, дополненная салатом "романо" и сыром чеддер',
        'price': 389,
        'weight': 250,
        'imgUrl': 'https://i.imgur.com/7SxgaYJ.jpg'
    },
    {
        'name': 'Биф буррито',
        'description': 'Великолепное блюдо, состоящее из тапы, фарша, овощей и главное - сыра!',
        'price': 519,
        'weight': 360,
        'imgUrl': 'https://i.imgur.com/V1vpQdd.jpg'
    },
    {
        'name': 'Тако добле',
        'description': 'Двойная тапа, чили, фасолевая паста - больше фарша, больше вкуса!',
        'price': 489,
        'weight': 300,
        'imgUrl': 'https://i.imgur.com/9Eoa67Z.jpg'
    },
    {
        'name': 'Тако суаве',
        'description': 'Мраморная гоавядина, салат романо, прекрасный соус!',
        'price': 379,
        'weight': 185,
        'imgUrl': 'https://i.imgur.com/vHOIMc2.jpg'
    },
]

router.get('/', (req, res, next) => {
    res.send("<h1>Welcome to ITED-course API!</h1>");
});
router.use('/marketplace', marketplaceRouter);

marketplaceRouter.get('/', (req, res, next) => {
    res.send("<h1>Welcome to Marketplace!</h1>");
});
marketplaceRouter.get('/users', (req, res, next) => {
    res.send('<h1>Welcome to users!</h1>');
});
marketplaceRouter.get("/users/:user", (req, res, next) => {
    res.send('<h1>Hello, ' + req.params["user"] + '</h1>');
});
marketplaceRouter.get("/users/:user/data", (req, res, next) => {
    switch (req.params["user"]) {
        case "pavel": {
            res.json(pavelPizzas);
            break;
        }
        case "irina": {
            res.json(irinaPizzas);
            break;
        }
        case "ksenia": {
            res.json(kseniaClothes);
            break;
        }
        case "esteban": {
            res.json(estebanTaco);
            break;
        }
        default: {
            next(createError(404));
        }
    }
});

module.exports = router;
