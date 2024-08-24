import { AreaPlayerTriggerService } from 'pixel_combats/room';

//Свойства и параметры
//var - параметр который может изменятся, const - параметр который частично изменяется
Area.AreaPlayerTriggerService.Parameters(){
  //const func - function();
  var Name() //Название зоны
  Name.Tags[]; //Тег зоны
  Name.Enable(true ? false); //Если истина то зона активна
  API Event - Name.OnEnter(func('Players')); //Если игрок вошел в зону
  API Event - Name.OnExit(func('Players')); //Если игрок вышел из зоны
  /*
    Пример создания зоны:
    var Name = AreaPlayerTriggerService.GetContext().Get("Name")
    Name.Tags = ["Default"];
    Name.Enable = true; //Зона активна
    Name.OnEnter(function(player){
      player.Ui.Hint.Value = 'Привет!'; //При входе приветствует игрока
    });
    Name.OnExit(function(player){
      player.Ui.Hint.Value = 'Пока!'; //При выходе прощается с игроком
    });
  */

  Trigger.Parameters(){
    var Count //Число игроков в тригерее
    Contains(player) //Проверяет игрока на наличие в зонеи
    Get() //Обращение к зоне или игрокам в триггере
    API Event - OnTrigger //Если триггер изменился
  }
}

//Ивенты
API Event - OnData() //Если изменились настройки триггера
API Event - OnArea() //Если изменилась/добавилась одна из зон

//К чему относится данный модуль
[Modules('Area', 'pixel_combats/room')];

//Использование
AreaPlayerTriggerService(){
  function({
    'Players':
  });
}, 'Ui', 'Teams', 'Properties';
