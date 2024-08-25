import { Map } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('Map', 'pixel_combats/room')]

//Использование
Map - 'GameMode'

//Свойства и параметры
Map.Parameters(){
  MapMeta //Данные карты в виде меты, при смене меты происходит перезагрузка сервера
  MapId //ID карты или null если игре не известен ID
  MapListId //Текущий ID списка карты или null если игре не известен ID
  Rotation('GameMode') //Смена карты GameMode пример применения
  LoadRandomMap() //Загружает рандомную карту

  API Event - OnLoadMap //Если карта загрузилась
}
