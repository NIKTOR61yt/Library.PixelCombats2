import { Ui } from 'pixel_combats/room';

//Свойсва
//const - параметр который может частично изменятся
Ui.Parameters(){
  const MainTimerId //Основной таймер который выводится вверху
  Hint //Подсказка которая выводится вверху
  QuadsCount(true ? false) //Выводит прямоугольники по умолчанию false
  TeamProp1 //Что выводить в прямоугольнике слева вверху
  TeamProp2 //Что выводить в прямоугольнике справа вверху
}

//К чему относится данный модуль
[Modules('Ui', 'pixel_combats/room')]
