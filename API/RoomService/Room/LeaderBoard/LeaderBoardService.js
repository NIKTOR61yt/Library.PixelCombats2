import { DisplayValueHeader } from 'pixel_combats/basic';
import { LeaderBoard } from 'pixel_combats/room';

//К чему относится данные модули
[Modules('DisplayValueHeader', 'pixel_combats/basic')]
[Modules('LeaderBoard', 'pixel_combats/room')]

//Использование
DisplayValueHeader('Kills', 'Death', 'Scores', 'Spawns', 'Id', 'Lvl', 'TesterLvl', 'yourProperties')
//Properties в yourProperties вводите свое название, не забудьте указать в ивенты что там (OnPlayerChangeTeam)

//Свойства и параметры
LeaderBoard.Parameters(){
  PlayersWeightGetter //Сравнивает игроков выводит на верх игрока у которого больше всех определенная вещь например игрок 1 - 50 очков, игрок 2 - 100 очков выведет на верх 2 игрока
  TeamWeightGetter //Сравнивает команды
  return GetPlayers() //Возвращает игроков в отсортированном порядке return возвращает значение не является контекстным свойством
  PlayerLeaderBoardValues //Имя значения которое следует выводить для игроков в лидерборде
  TeamLeaderBoardValue //Имя значения которое необходимо выводить для команд в лидерборде
  List GetTeams() //Выводит команде лидерборд
  List GetPlayers() //Выводит игрока лидерборд

  Weight(player) //Вес игрока в лидерборде
  Weight(team) //Вес команды в лидерборде
}
DisplayValueHeader.Parameters(){
  new DisplayValueHeader(Value, DisplayName, ShortDisplayName)
  /*
    Value - айди, имя по которому можно обращаться к данному параметру
    DisplayName - то что видит игра
    ShortDisplayName - то что видит игрок например new DisplayValueHeader('Kills', 'Kills', 'Киллы')
  */
}
