# Generated by Django 4.1.7 on 2023-04-16 00:33

import app_fibulas.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_index=True, max_length=100, verbose_name='Название')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='subcategories', to='app_fibulas.category', verbose_name='Родительская категория')),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
            },
        ),
        migrations.CreateModel(
            name='Fibula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название')),
                ('description', models.CharField(blank=True, default='', max_length=200, verbose_name='Короткое описание')),
                ('slug', models.SlugField(default='', max_length=255, unique=True, verbose_name='URL товара')),
                ('fullDescription', models.TextField(blank=True, default='', verbose_name='Описание')),
                ('in_stock', models.PositiveSmallIntegerField(verbose_name='Количество в наличии')),
                ('price', models.DecimalField(decimal_places=2, default=0, max_digits=10, verbose_name='Цена')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='fibulas', to='app_fibulas.category', verbose_name='Категория')),
            ],
            options={
                'verbose_name': 'Брошка>',
                'verbose_name_plural': 'Брошки',
                'ordering': ['category'],
            },
        ),
        migrations.CreateModel(
            name='ImageFib',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pic', models.FileField(upload_to=app_fibulas.models.get_upload_path)),
                ('fibula', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='app_fibulas.fibula')),
            ],
        ),
        migrations.CreateModel(
            name='ImageCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('src', models.FileField(upload_to='category/', verbose_name='Выбор файла')),
                ('alt', models.CharField(blank=True, max_length=150)),
                ('category', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='image', to='app_fibulas.category')),
            ],
        ),
    ]