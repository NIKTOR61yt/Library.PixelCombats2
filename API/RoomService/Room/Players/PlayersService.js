import { Players } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('Players', 'pixel_combats.room')];

//Использование
Players - 'Players', 'Teams';

//Ивенты
API Event - OnPlayerConnected; //Если игрок подключился
API Event - OnPlayerDisconncted; //Если игрок отключился

API Event - OnIsOnline //Если сменил онлайн
API Event - OnTeam //Сменил команду
API Event - OnNickName //Сменил ник
API Event - OnIsAlive //Сменилось состояние Жив ? Мертв

//Свойства
//var параметр который может быть полностью изменчивым, const параметр который частично изменяется, let параметр который не изменяется
Players.Parameters(){
  Get() //Обращение к игроку
  GetByRoomId() //Внутрикомнатный айди
  PopUp() //Сообщение игроку в виде прямоугольника
  let MaxCount //Выводит максимальное количество игроков допустимое на данном сервисе
  var Count //Количество игроков
  let Id //Айди игрока <"ReadProperty">
  const IdInRoom //Рум айди
  var NickName //Ник игрока <"ReadProperty">
  var IsOnline //true если игрок онлайн
  var IsAlive //?Жив игрок
}
