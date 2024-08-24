import { BreackGraph } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('BreackGraph', 'pixel_combats/room')]

//Свойства и параметры
BreackGraph.Parameters(){
  Damage(true ? false) //Можно ли ломать блоки по умолчанию true
  PlayerBlockDmg(true ? false) //Можно ли ломать блоки игрока по умолчанию false
  PlayerBlockBoost(true ? false) //Усилины ли блоки игрока по умолчанию false
  WeakBlock(true ? false) //Ослаблены ли блоки по умолчанию false
  BreackAll(true ? false ) //Можно ли ломать любой блок по умолчанию false
  OnlyPlayerBlockDmg(true ? false) //Ломаются ли только блоки игрока по умолчанию false
  API Event - OnOptions //Если были изменены данные опции
}
