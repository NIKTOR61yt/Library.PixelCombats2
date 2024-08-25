import { Damage } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules('Damage', 'pixel_combats/room')]

//Использование
Damage - 'Players', 'Teams', 'Room'

//Свойства и параметры
Damage.Parameters(){
  Damage.FriendlyFire(true ? false) //Разрешен ли урон по своим по умолчанию false
  Damage.DamageOut(true ? false) //Можно ли воспринимать урон от других по умолчанию true
  Damage.DamageIn(true ? false) //Может ли игрок воспринимать весь возможный урон по умолчанию true при false делает игрока бессмертным
  Damage.GranadeTouchExplosion(true ? false) //Граната взрывается от попадания по игроку, на своих не работает по умолчанию true

  API Event - OnKill //Если игрок убил игрока
  API Event - OnDeath //Если игрок умер
  API Event - OnDamage //Если игрок нанес другому игроку урон
  /*
    Пример ивента
    Damage.OnKill(function(player, killed){
      if (player.id != killed.id){ //Игрок убивает игрока преобразуя это в `p.id != k.id`
        ++player.Properties.Kills.Value; //При убийстве зачисляет килл
      }
    });
  */
}
