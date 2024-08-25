import { Build } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('Build', 'pixel_combats/room')]

//Использование
Build - 'Players', 'Teams', 'Room'

//Свойства и параметры
Build.Parameters(){
  Build.BlocksSet(true ? false) //Сет блоков в руках игрока по умолчанию false
  Build.Pipette(true ? false) //Пипетка по умолчанию false
  Build.FloodFill(true ? false) //Частичная заливка блоков по умолчанию false
  Build.FillQuad(true ? false) //Полная заливка блоков по умолчанию false
  Build.RemoveQuad(true ? false) //Удаление блоков по умолчанию false
  Build.BalkenChange(true ? false) //Можно ли менять длину строительства по умолчанию false
  Build.Balken //Длина строительства по умолчанию 10
  Build.FlyEnable(true ? false) //Полет по умолчанию false
  Build.SetSkyEnable(true ? false) //Можно ли менять небо по умолчанию false
  Build.GenMapEnable(true ? false) //Можно ли генирировать карту по умолчанию false
  Build.ChangeCameraPointsEnable(true ? false) //Можно ли менять положение камеры по умолчанию false
  Build.QuadChangeEnable(true ? false) //Можно ли загружать\удалять предметы
  Build.BuildModeEnable(true ? false) //Можно ли быстро строить, бить из далека и ставить блоки далеко по умолчанию false
  Build.CollapseChangeEnable(true ? false) //Могут ли предметы падать по умолчанию false
  Build.RenameMapEnable(true ? false) //Можно ли менять название карты по умолчанию false
  Build.ChangeMapAuthorsEnable(true ? false) //Можно ли менять список авторов карты по умолчанию false
  Build.LoadMapEnable(true ? false) //Можно ли загружать карты (значок) по умолчанию false
  Build.ChangeSpawnsEnable(true ? false) //Можно ли менять спавны по умолчанию false
  Build.BuildRangeEnable(true ? false) //Доступен ли редактор зон игроку по умолчанию false
  Build.BuildBlocksId('Players', blockId) //Проверяет наличие айди блока у игрока blockId - ваш айди блока
}
