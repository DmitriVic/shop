from app_auth.models import User
n = 2
while n < 22:
    n += 1
    User.objects.create_user(username=f'user{n}', password='1234')

