import re

from django.contrib import admin
from django.db import models
from django.utils.safestring import mark_safe
from transliterate import translit, slugify


class Fibula(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название')
    description = models.CharField(max_length=200, verbose_name='Короткое описание', blank=True, default='')
    slug = models.SlugField(max_length=255, null=False, unique=True, verbose_name="URL товара", default='')
    fullDescription = models.TextField(blank=True, verbose_name='Описание', default='')
    in_stock = models.PositiveSmallIntegerField(verbose_name='Количество в наличии')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Цена', default=0)
    category = models.ForeignKey('Category', on_delete=models.PROTECT, related_name='fibulas',
                                 verbose_name="Категория")

    def __str__(self):
        return f'{self.name}'

    def save(self, *args, **kwargs):
        if not re.fullmatch(r'[а-яА-ЯёЁ]+', self.name):
            self.slug = slugify(translit(self.name, 'ru'))
        else:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

    class Meta:
        ordering = ['category']
        verbose_name = "Брошка>"
        verbose_name_plural = "Брошки"


def get_upload_path(instance, filename):
    return f'fibpic/{instance.fibula.slug}/{filename}'


class ImageFib(models.Model):
    fibula = models.ForeignKey(Fibula, on_delete=models.CASCADE, related_name='images')
    pic = models.FileField(upload_to=get_upload_path)

    def __str__(self):
        return str(self.pic.url)


class Category(models.Model):
    title = models.CharField(max_length=100, db_index=True, verbose_name='Название')
    parent = models.ForeignKey(
        'self', on_delete=models.PROTECT, null=True, blank=True,
        related_name='subcategories', verbose_name='Родительская категория')

    def __str__(self):
        return self.title

    @admin.display(description='Изображение')
    def get_icon(self):
        if self.image:
            return mark_safe(f'<img src={self.image.src.url}>')
        else:
            return 'Нет изображения'

    @property
    @admin.display(description='Относительный путь')
    def href(self):
        return f'/catalog/{self.pk}'

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class ImageCategory(models.Model):
    category = models.OneToOneField(Category, on_delete=models.CASCADE, related_name='image')
    src = models.FileField(upload_to='category/', verbose_name='Выбор файла')
    alt = models.CharField(max_length=150, blank=True)

    def save(self, *args, **kwargs):
        if not self.alt:
            self.alt = 'картинка ' + str(self.category.title)
        super().save(*args, **kwargs)


