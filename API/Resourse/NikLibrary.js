/*
  Библиотека\сборка некоторых кодов которые могут помочь в написании кода
  В общей сумме 1 кодов

  Данная библиотека упрощает работу с JS и API, содержит краткое и понятное описание и легкие в понимании коды
  Идей для кода пока, что нет так что 1 код

  By NIKTOR61 (2024)
*/

import { Teams, Build, BuildBlocksSet, Spawns } from 'pixel_combats/room';

/*
  Создание команды
  //основа
  tag = id команды
  name = имя команды
  color = цвет
  spawn = спавнпоинт команд

  //принцип создания команды
  CreateTeam(tag, name, color, spawn)

  TODO: сделать расширение параметра создания команды, добавить ParametersTeam
*/
export function CreateTeam(tag, name, color, spawn){
  const nik = Teams.Get(tag);
  Teams.Add(tag, name, color);
  if (spawn) nik.Spawns.SpawnPointsGroups.Add(spawn);
  return nik;
}
