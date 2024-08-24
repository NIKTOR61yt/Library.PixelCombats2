//математические вычисления

//К чему относятся данные модули
[Modules("Math", "pixel_combats/basic")] //Не относится к импортированию

//Обьекты с которыми можно работать
Math.Parameters(){
  random() * //Рандомная генерация цифр или перетусовка предметов
  ceil() //Округляет число к большему целому
  floor() //Округляет число к меньшему целому
  Min() //Возвращает наименьшее число из всех своих агрументов
  Max() //Возвращает наибольшее число из всех своих агрументов

  +  //Оператор сложения
  - //Оператор вычитания
  * //Оператор умножения
  /  //Оператор деления
  % //Остаток от деления
  ++ //Инкремент
  -- //Декремент
  ** //Возведение в степень

  = //Равно
  += //Прибавить или равно
  -= //Убавить или равно 
  *= //Умножить или равно
  /= //Делить или равно
  %= //Остаток или равно
  **= //Возвести в степень или равно

  === //Строго равно
  !== //Строго не равно
  > //Больше
  < //Меньше
  >= //Больше или равно
  <= //Меньше или равно

  && //Логическое И
  || //Логичесткое Или
  ! //Логическое Не
}

/*
  Пример математического вычисления:
  Math.ceil(Math.random() * 10) - округляет выпавшее рандомное число к большему целому
*/