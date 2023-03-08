# Порядок взаимодействия с API
* Данное API предназначено для взаимодействия с фронтом сайта магазина 
## Работа с пользователями 
### 1. Создание пользователя:
- Адрес API: `http://127.0.0.1:8000/api/auth/user/reg/` 
- Метод: `POST` 
- Требование авторизации: `не требуется` 
- Вид запроса Body (JSON):
```
{
    "username": "<str:username>",
    "password": "<str:password>"
}
```
- Вид ответа Body (JSON):
```JSON
{
    "url": "http://127.0.0.1:8000/api/auth/user/<str:username>/",
    "username": "<str:username>"
}
```
### 2. Просмотр профиля пользователя:
- Адрес API: `http://127.0.0.1:8000/api/auth/user/<str:username>/` 
- Метод: `GET` 
- Требование авторизации: `требуется либо модератор либо владелец профиля` 
- Вид запроса Heders:
```
key= Authorization
value= JWT <HEADER>.<PAYLOAD>.<VERIFY SIGNATURE>
```
- Вид ответа Body (JSON):
```JSON
{
    "username": "<str:username>", 
    "email": "exemple@mail.ru",
    "first_name": "Админ",
    "second_name": "Админович",
    "last_name": "Админов",
    "get_full_name": "Админ Админович Админов",
    "isd": "7",                  <---------------------------Телефонный код страны
    "phonenumber": "9876543212",
    "zip_code": "192242",        <---------------------------Почтовый индекс
    "delivery_address": "На деревню Бабушке 154"
}
```
### 3. Редактирование профиля пользователя:
- Адрес API: `http://127.0.0.1:8000/api/auth/user/<str:username>/` 
- Метод: `PATCH, PUT` 
- Требование авторизации: `требуется либо модератор либо владелец профиля` 
- Вид запроса Heders:
```
Authorization: 'JWT eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NzY0MTkxLCJpYXQiOjE2Nzc3NjM4OTEsImp0aSI6ImVjYmJkMjI5MTBkMzRmNTk5MDUxNTgzYWJkMzc3ZmU5IiwidXNlcl9pZCI6NDV9.uSUxsPqzTGajPMFnLKI4jnWLqCBPUwxfuI0uqK-PH_A'
```
- Вид запроса Body (JSON):   
Любое количество из перечисленных значений.   
Последнее значение в словаре без запятой
```
{
    "email": "admin@mail.ru",
    "first_name": "Админ",
    "second_name": "Админович",
    "last_name": "Админов",
    "birthday": "2010-01-13",
    "isd": "7",
    "phonenumber": "9876543212",
    "zip_code": "192242",
    "delivery_address": "На деревню Бабушке 154",
    "place": "Санкт-Петербург",
    "avatar": "http://127.0.0.1:8000/media/avatars/prikol-nye-kartinki-na-avu1.jpg"
}
```
- Вид ответа Body (JSON):
```JSON
{
    "username": "admin",
    "email": "admin@mail.ru",
    "first_name": "Админ",
    "second_name": "Админович",
    "last_name": "Админов",
    "get_full_name": "Админ Админович Админов",
    "birthday": "2010-01-13",
    "isd": "7",
    "phonenumber": "9876543212",
    "zip_code": "192242",
    "delivery_address": "На деревню Бабушке 154",
    "place": "Санкт-Петербург",
    "avatar": "http://127.0.0.1:8000/media/avatars/prikol-nye-kartinki-na-avu1.jpg"
}
```
### 4. Редактирование пароля профиля пользователя:
- Адрес API: `http://127.0.0.1:8000/api/auth/user/<str:username>/pass/` 
- Метод: `PATCH, PUT` 
- Требование авторизации: `требуется либо модератор либо владелец профиля` 
- Вид запроса Heders:
```
key= Authorization
value= 'JWT eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NzY0MTkxLCJpYXQiOjE2Nzc3NjM4OTEsImp0aSI6ImVjYmJkMjI5MTBkMzRmNTk5MDUxNTgzYWJkMzc3ZmU5IiwidXNlcl9pZCI6NDV9.uSUxsPqzTGajPMFnLKI4jnWLqCBPUwxfuI0uqK-PH_A'
```
- Вид запроса Body (JSON): 
```
{
    "password": "<str>"
}
```
- Вид ответа Body (JSON):
```JSON
{
    "url": "http://127.0.0.1:8000/api/auth/user/<str:username>/",
    "username": "<str:username>"
}
```
### 5. Получение списка пользователей:
- Адрес API: `http://127.0.0.1:8000/api/auth/user/list/` 
- Метод: `GET` 
- Требование авторизации: `требуется модератор ` 
- Вид запроса Heders:
```
key= Authorization
value= JWT <HEADER>.<PAYLOAD>.<VERIFY SIGNATURE>
```
- Вид запроса Params (переход по страницам пагинации):
```
limit= 5  <------------- устанавиливает сколько значений на странице 
offset= 10<int>
```
- Вид ответа Body (JSON):
```JSON
{
    "count": 25,
    "next": "http://127.0.0.1:8000/api/auth/user/list/?limit=5&offset=5",
    "previous": null,
    "results": [
        {
            "url": "http://127.0.0.1:8000/api/auth/user/admin/",
            "username": "admin",
            "is_staff": true,
            "get_full_name": "Админ Админович Админов"
        },
        ...
        {
            "url": "http://127.0.0.1:8000/api/auth/user/user5/",
            "username": "user5",
            "is_staff": false,
            "get_full_name": ""
        }
    ]
}
```
### 6. Получение токена аунтентификации(Авторизация):
- Адрес API: `http://127.0.0.1:8000/api/auth/token/` 
- Метод: `POST` 
- Требование авторизации: `не требуется`
- Срок действия токена: `5 мин`
- Вид запроса Body (JSON):  
  - admin(пароль=admin),  
  - any_user(пароль=1234)
```
{
    "username": "<str:username>",
    "password": "<str:password>"
}
```
- Вид ответа Body (JSON):
```JSON
{
    "refresh": <HEADER>.<PAYLOAD>.<VERIFY SIGNATURE>,
    "access": <HEADER>.<PAYLOAD>.<VERIFY SIGNATURE>
}
```
### 7. Обновление токена по истечении времени:
- Адрес API: `http://127.0.0.1:8000/api/auth/token/refresh/` 
- Метод: `POST` 
- Требование авторизации: `не требуется`
- Срок действия токена: `1 день`
- Вид запроса Body (JSON):  
```
{
    "refresh": "<HEADER>.<PAYLOAD>.<VERIFY SIGNATURE>"
}
```
- Вид ответа Body (JSON):
```JSON
{
    "access": <HEADER>.<PAYLOAD>.<VERIFY SIGNATURE>,
    "refresh": <HEADER>.<PAYLOAD>.<VERIFY SIGNATURE>
}
```
### 8. Редактирование аватара профиля пользователя:
- Адрес API: `http://127.0.0.1:8000/api/auth/user/<str:username>/avatar/` 
- Метод: `PATCH, PUT` 
- Требование авторизации: `требуется либо модератор либо владелец профиля` 
- Вид запроса Heders:
```
key= Authorization
value= 'JWT eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NzY0MTkxLCJpYXQiOjE2Nzc3NjM4OTEsImp0aSI6ImVjYmJkMjI5MTBkMzRmNTk5MDUxNTgzYWJkMzc3ZmU5IiwidXNlcl9pZCI6NDV9.uSUxsPqzTGajPMFnLKI4jnWLqCBPUwxfuI0uqK-PH_A'
```
- Вид запроса Body (multipart/form-data): 
```
key= 'avatar',
value= <file>,
content-type='img/jpg'
```
- Вид ответа Body (JSON):
```JSON
{
    "url": "http://127.0.0.1:8000/api/auth/user/user2/",
    "username": "user2",
    "avatar": "http://127.0.0.1:8000/media/avatars/EMAL7wD_vzKRIrz.jpg"
}
```