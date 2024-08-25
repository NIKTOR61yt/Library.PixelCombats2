//Импортирование обьектов 
import { Properties } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('Properties', 'pixel_combats/room')];

//Использование
Properties - 'Players', 'Teams';

//Перечисление стандартных Properties

//var изменимый параметр, let параметр который не может быть изменимым, const параметр который частично может быть изменчивым
var Kills //Обработчик Киллов
var Deaths //Обработчик Смертей
var Scores //Обработчик Очков
var Spawns //Обработчик Спавнов
let Id //Айди игрока
let Lvl //Лвл игрока
let TesterLvl //Лвл тестера игрока
const immortality //Бесмертие игрока после спавна

Properties ('Players', 'Teams'){
  ActivityProperties(){ //Параметры которые могут быть изменчивыми
    var Kills - OnKill //Ивент и обработчик киллов, используется вместе с Scores
    var Deaths - OnDeath //Ивент и обработчик смертей
    var Spawns - OnSpawn //Ивент и обработчик спавнов
    var immortality - OnPlayerTimer, OnSpawn //Ивенты и обработчики таймеров
  }
}
Properties ('Players'){
  ReadProperties(){ //Параметры которые не могут быть изменчивы пока игрок в комнате
    let Id
    let Lvl
    let TesterLvl
  }
}

//Параметры для создания и обращения к Properties
Properties (){
  Get('Properties'); //Обращение к Properties
  /*
    при создании прописывается как player.Properties.Get("Ваше название").Value после value можно прописать цифры или название в 
    кавычках если этого не сделать будет null или пустота зависит от того число или название
  */
}

//Ивенты к Properties
API Event - OnRoomProperty //Ивент комнатного параметра
API Event - OnTeamProperty //Ивент параметра команды
API Event - OnPlayerProperty //Ивент параметра игрока
