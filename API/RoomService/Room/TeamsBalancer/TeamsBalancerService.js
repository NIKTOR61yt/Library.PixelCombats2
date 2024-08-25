import { TeamsBalancer } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('TeamsBalancer', 'pixel_combats/room')]

//Использование
TeamsBalancer - 'Teams'

//Свойства и параметры
TeamsBalancer.Parameters(){
  IsAutoBalancer(true ? false) //Если true будет всегда балансировать команды
  MaxPlayerDifference(number) //Максимальная разница в командах при балансе по умоланию number - 1
  BalanceTeams() //Производит баланс команд

  API Event - OnIsAutoBalance //Если сменился баланс команд
  API Event - OnMaxPlayerDifference //Если изменилась максимальная разница в командах
  API Event - OnBalanceTeams //После балансировки команд
}
