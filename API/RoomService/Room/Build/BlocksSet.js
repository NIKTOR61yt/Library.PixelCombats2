import { BuildBlocksSet } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('BuildBlocksSet', 'pixel_combats/room')]

//Использование
BuildBlocksSet - 'Build', 'Players', 'Teams';

//Свойства и параметры
BuildBlocksSet.Parameters(){
  //blockId ваш айди блока
  Get(blockId) //Набор блоков по айди
  NullSet //Пустота
  All //Все блоки
  AllClear //Все блоки, искючает сломанные
  Red //Красные
  Blue //Синие
}
