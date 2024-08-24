import { Validate } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('Validate', 'pixel_combats/room')]

//Свойства и параметры
Validate.Parameters(){
  IsValid(true ? false) //Если true то режим рабочий если false то сервер уничтожается
  Message //Сообщение о неисправности режима
  ReportValid(Message) //Сообщает о неисправности режима после чего сервер уничтожается
  API Event - OnValid //Ивент после репорта валидности
}
