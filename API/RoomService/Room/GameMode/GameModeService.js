import { GameMode } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('GameMode', 'pixel_combats/room')]

//Свойства и параметры
GameMode.Parameters(){
  Parameters //То что используется для определения параметра
  Value //Скрипт параметра для игры
  //(GameMode.Parameters.GetBool('Ваше название'))
  //Модуль - GameMode.Parameters('ваше название')
}
