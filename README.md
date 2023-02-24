# Установка
## Для работы сайта потребуется:
* Установить **LTS версию NODE.js** по ссылке: `https://nodejs.org/ru/download/`
* Устанавить **Python 3.10** по ссылке: `https://www.python.org/downloads/release/python-31010/`
* Клонировать репозиторий по ссылке: `https://github.com/DmitriVic/shop.git`  
## Настройка работы сервера для фронта:
* В папке проекта выполнить один раз команду:   
```
npm i
```
* Затем запуск сервера осуществляется командой:   
```
npm run dev
```
## Настройка работы бекэнда
* В папке проекта создаем виртуальное окружение и активируем его:
```
cd shop
python -m venv .venv
.venv\Scripts\activate.bat
```
* После команды активации в начале командной строки должна быть надпись `(.venv)...` 
* Устанавливаем связи согласно файлу requirements.txt
```
python.exe -m pip install -r requirements.txt
```
* Переходим в папку `shop\backend` и запускаем сервер:
```
python manage.py runserver
```
