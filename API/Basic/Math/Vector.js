//Кордината расположения игрока\бота - Vector3
//Кордината вращение бота - Vector2

import { Vector3, Vector2 } from 'pixel_combats/basic';

Vector3(x, y, z); //кордината X и Z горизонт, Y высота в 360 градусов
Vector2(x, y); //вращение по Х и Y в 360 градусов

//Использование
Position = Vector3(x, y, z);
Rotation = Vector2(x, y);

//к каким модулям можно привязать данные векторы
Vector3 - 'Players', 'Bots';
Vector2 - 'Bots';

/*
  При использовании Vector3 на игроках можно как и с Vector2 на ботах крутить их:
  то есть Vector3(x, y), но при условии что Rotation - Vector3(x, y)
*/

//К чему относится данный модуль
[Modules("Vector", "pixel_combats/basic")];
