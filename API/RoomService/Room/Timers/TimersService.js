import { Timers } from 'pixel_combats/room';

//К чему относится данный модуль
[Modules("Timers", "pixel_combats/room")];

//Таймер и свойства к нему
Timers(){
  Get(); //Обращение к таймеру
  //Ивенты
  API Event - OnTeamTimer //Ивент таймера команды
  API Event - OnPlayerTimer //Ивент таймера игрока

  API Event - OnIsStarted //Ивент состояния таймера
  API Event - OnRestart //Ивент если какойто таймер начал свою работу
  API Event - OnTimer //Ивент при срабатывания таймера
  //Свойства
  const Id //Айди таймера
  var IsStarted //Если true то таймер активен и обрабатывается, можно активировать через условие
  var Interval //Интервал срабатывания
  var IsLoop //По завершению таймер перезапускается
  var LapsedTime //Сколько осталось времени до срабатывания

  var Restart('Interval') //Перезапуск таймера
  var RestartLoop('Interval') //Цикл таймера
  var Stop() //Останавливает таймер при создании такого же нового таймера который остановили пораждает массив

    /* Пример таймера
    const TestTimer = Timers.GetContext().Get("Test")

    TestTimer.OnTimer.Add(function(){
      for (const p of Players){
        p.Ui.Hint.Value = 'Привет!';
      }
    });
    TestTimer.RestartLoop(5) - каждые 5 секунд выдает вам подсказку 'Привет!'
    */
}

//К чему можно привязать таймер
Timers - 'Players', 'Teams'
