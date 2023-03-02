# test_pentagon

### Задачи:

[Список задач](https://github.com/Electr0Nick/test_pentagon/blob/main/src/files/Tasks.docx)

---
### Результат:

[Исходные файлы](https://github.com/Electr0Nick/test_pentagon/tree/main/src)
[Собранное GULPом](https://github.com/Electr0Nick/test_pentagon/tree/main/dist)
[test_pentagon на GithubPages](https://electr0nick.github.io/test_pentagon/dist/)
[Код задачи №5](https://github.com/Electr0Nick/test_pentagon/blob/main/src/files/task5.php)


---
### Пояснения:

* __Задача №1.__ Тут возникли небольшие трудности. Нашёл 3 способа, как решить задачу, но ни один из них не идеален:
  1. наложение svg маски с помощью CSS-свойства mask-image (8 элементов в первом блоке и 8 элементов во втором блоке). Везде всё отлично работает, кроме IE - он свойство mask-image не поддерживает.
  2. верстка svg и вставка в него изображения тегом image (1 элемент в третьем блоке). Маска работает во всех браузерах, но я не смог отцентрировать изображение.
  3. использование CSS-свойства clip-path (2 элемент в третьем блоке). Это в принципе не svg маска. Но так же везде всё отлично работает, кроме IE.
* __Задача №5.__ Так как с PHP я раньше дела не имел, возможно мог что-то напутать в синтаксисе. Но я думаю ход моих мыслей будет понятен :blush:

---
### Стек используемых технологий:
![HTML](https://img.shields.io/badge/HTML-000?style=for-the-badge&logo=HTML5&logoColor=E34F26)
![CSS](https://img.shields.io/badge/CSS-000?style=for-the-badge&logo=CSS3&logoColor=1572B6)
![SCSS](https://img.shields.io/badge/SCSS-000?style=for-the-badge&logo=Sass&logoColor=CC6699) 
![BEM](https://img.shields.io/badge/BEM-000?style=for-the-badge&logo=BEM&logoColor=1E90FF)
![JavaScript](https://img.shields.io/badge/JS-000?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E)
![GIT](https://img.shields.io/badge/GIT-000?style=for-the-badge&logo=Git&logoColor=F05032)
![NPM](https://img.shields.io/badge/NPM-000?style=for-the-badge&logo=npm&logoColor=CB3837) 
![GULP](https://img.shields.io/badge/GULP-000?style=for-the-badge&logo=gulp&logoColor=CF4647)

Дополнительно:

![VSC](https://img.shields.io/badge/VSC-000?style=for-the-badge&logo=VisualStudioCode&logoColor=007ACC)
![AdobePhotoshop](https://img.shields.io/badge/PS-000?style=for-the-badge&logo=AdobePhotoshop&logoColor=31A8FF)
![GITHUB](https://img.shields.io/badge/GITHUB-000?style=for-the-badge&logo=GitHub&logoColor=FFF)
![MD](https://img.shields.io/badge/MD-000?style=for-the-badge&logo=Markdown&logoColor=FFF)