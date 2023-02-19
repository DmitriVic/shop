# Подключение к репозиторию Интернет магазина (shop)
* Установить LTS версию NODE.js по ссылке   `https://nodejs.org/ru/download/`
* Открываем паку в терминале в которую хотим установить проект набираем:
```
git clone git@github.com:DmitriVic/shop.git
```
* Далее   
```
npm i
```
* Далее   
```
npm run dev
```
# Устновка связей для бекэнда
* Переходим в ветку `dev`
* Устанавливаем **Python 3.10** по ссылке: `https://www.python.org/downloads/release/python-31010/`

* в папке с проектом создаем виртуальное окружение и активируем его:
```
cd shop
python -m venv .venv
.venv\Scripts\activate.bat
```
* После команды активации в начале командной строки должна быть надпись `(.venv)...` 
* Устанавливаем связи согласно файлу requirements.txt находясь в `shop`
```
python.exe -m pip install -r requirements.txt
```
* Переходим в папку `shop\backend` и запускаем сервер:
```
python manage.py runserver
```
