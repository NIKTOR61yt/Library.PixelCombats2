import { Vector3, Vector2 } from 'pixel_combats/basic';
import { Bots, HumanBotSpawnData } from 'pixel_combats/room';

//К чему относится данные модули
[Modules('Bots', 'pixel_combats/room')];
[Modules('HumanBotSpawnData', 'pixel_combats/room')];

//Использование
Bots - 'Vector3', 'Vector2';

Bots.Parameters(){
  //Создание ботов документалка
  //let параметр который не может изменятся
  HumanBotSpawnData.Parameters(){
    let BotData = HumanBotSpawnData();
    BotData.Position = Vector3(x, z, y); //Спавн ботов по определенной кординате \ спавнит бота на заданной точке
    BotData.Rotation = Vector2(x, y); //Угол поворота бота
    BotData.WeaponId = number; //Оружие к боту 39 видов вместо number вставляйте цифру
    BotData.SkinId = number; //Скин к боту 18 видов + 31 тестовый скин айди вместо number вставляйте цифру
    BotData.Vector3 = LookAt //Точка куда смотрит бот
    Bots.CreateHuman(BotData); //Отправляет запрос на создание бота

    let bot = Bots.Get(1); //Создает бота с указанным айди
  }
  //return возвращает значение не является свойством для использования
  Count return //Сколько всего ботов
  Alive[] return //Возвращает всех живых ботов в число
  All[] return //Возвращает всех ботов
  Get(id return) //Возвращает бота по ID или null если бот уничтожен/умер/не существует

  Destory() //Уничтожает бота
  Alive(true ? false) //Если true то бот жив
  Attack(true ? false) //Если true то бот смотрит на игрока и делает имитацию атаки, по умолчанию false

  API Event - OnNewBot //Если бот создан
  API Event - OnDeathBot //Если бот умер
  API Event - OnBotRemove //Если бот удален
}
