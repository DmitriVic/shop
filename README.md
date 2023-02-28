# Установка
## Для работы сайта потребуется:
* [x] Установить **LTS версию NODE.js** по ссылке: `https://nodejs.org/ru/download/`
* [x] Устанавить **Python 3.10** по ссылке: `https://www.python.org/downloads/release/python-31010/`
* [x] Клонировать репозиторий по ссылке: `https://github.com/DmitriVic/shop.git`  
## Настройка работы сервера для фронта:
* [x] В папке проекта выполнить один раз команду:   
```
npm i
```
* [x] Затем запуск сервера осуществляется командой:   
```
npm run dev
```
## Настройка работы бекэнда
* [x] В папке проекта создаем виртуальное окружение и активируем его:
```
cd shop
python -m venv .venv
.venv\Scripts\activate.bat
```
* [x] После команды активации в начале командной строки должна быть надпись `(.venv)...` 
* [x] Устанавливаем связи согласно файлу requirements.txt
```
python.exe -m pip install -r req.txt
```
* [x] Переходим в папку `shop\backend` и запускаем сервер:
```
python manage.py runserver
```
