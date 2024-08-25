//К чему относится данный модуль
[Modules("contextedProperties", "pixel_combats/room")];

//var заменяйте на модуль пример: player.contextedProperties.MaxHp.Value = 150;
//контекстные свойства
var MaxHp //Контекст хп игрока
var SkinType //Контекст скина игрока
var InventoryType //Контекст вида инвентаря игрока
var BuildSpeed //Контекст скорости строительства игрока
var StartBlocksCount //Количество блоков у игрока после пополнения припасов или спавна игрока

//return - то что возвращает значение, не является частью модуля см выше
return SkinType.contextedProperties('Players', 'Teams'){
  [Modules("Skin")]: 1, 2, 3; //перечисление видов скинов - 1 зомби, 2 зек, 3 синий. Значение 0 дает синий скин
}
return InventoryType.contextedProperties('Players', 'Teams'){
  [Modules("Inventory")]: 0, 1 //перечисление видов инвентаря - 0 стандартный, 1 зомби
}
return BuildSpeed.contextedProperties('Players', 'Teams'){
  [Modules("BuildSpeed")]: 1, 2, 3 //перечисление видов скорости по умолчанию 1
}

//Использование
/*
  Teams контекст подразумевает например: blueTeam.contextedProperties
  В случае с игроками player.contextedProperties
*/
contextedProperties - 'Players', 'Teams';
