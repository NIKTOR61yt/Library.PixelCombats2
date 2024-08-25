import { Color } from 'pixel_combats/room';

//К чему относится данные модули
[Modules('Teams', 'pixel_combats/room')]
[Modules('Color', 'pixel_combats/basic')]

//Использование
Teams - 'Color', 'Properties', 'Build', 'Ui', 'Spawns', 'Inventory', 'Timers', 'Damage', 'contextedProprties'

//Свойства и параметры
Teams.Parameters(){
  Teams.Add(){
    Add.Id //Айди команды
    Add.Name //Назване команды
    Add.Color //Цвет команды
    //Teams.Add('1', 'Test', new Color(0, 0, 1, 0)); //Команда Test с айди 1 и синим цветом
  }
  IsActive(true ? false)/*
    Активна ли команда если true то она существует и работает, кидая запрос на неактивную команду вернет запрос но команда не будет активна и существовать необходимо будет добавить ее через чат команду, условие или добавить в контекст <"Teams.Add">
  */
  return GetAlivePlayersCount() //Возвращает число живых игроков в команде, return возвращает значение не является контекстным свойством
  return Count //Возвращает число игроков в команде
  Players[] //Все игроки в команде, цикл не рекомендуется пораждает массив
  return Contains(true ? false) //Возвращает true если игрок есть в команде
  Add(player) //Добавляет игрока в команду
  Remove(player) //Выкидывает игрока из команды
  Clear('Players') //Выкидывает игроков из команды делая их вне команд

  API Event - OnAddPlayer //Если игрок добавился
  API Event - OnRemove //Если игрок удалился
}
