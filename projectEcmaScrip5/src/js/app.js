"use strict";

var mark = [74989, 74990, 84990, 62000, 58480, 61800],
    markBest,
    markTop,
    countTop = 3,
    gradePoint= 0;

    markBest = Math.max.apply(null, mark);

    markTop = mark.sort(function(a, b) {
      return b - a;
    });

function getGradeTotal() {

  for (var i = 0; i < countTop; i++) {
    gradePoint += markTop[i];
  }

  return gradePoint /= 3;
};

getGradeTotal();

  document.write('Лучший результат: ' + markBest + '<br>');

  document.write('Средний бал игроков из топ-3 составляет: '
                  + gradePoint + '<br>');

