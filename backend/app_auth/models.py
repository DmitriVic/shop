from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    zip_code = models.CharField(max_length=10, blank=True, verbose_name='Индекс почты')
    delivery_address = models.CharField(max_length=500, blank=True, verbose_name="Адрес доставки")
    second_name = models.CharField(max_length=150, blank=True, verbose_name='Отчество')
    isd = models.CharField(max_length=4, blank=True, verbose_name='Телефонный код станы')
    phonenumber = models.CharField(max_length=10, blank=True, verbose_name='Телефон')
    avatar = models.ImageField(upload_to='avatars', blank=True, null=True)
    place = models.CharField(max_length=100, blank=True, verbose_name='Город')

    @property
    def get_full_name(self):
        full_name = "%s %s %s" % (self.first_name, self.second_name, self.last_name)
        return full_name.strip()

