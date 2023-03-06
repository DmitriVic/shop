from rest_framework import serializers

from .models import User


class UserCreateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'password']
        extra_kwargs = {
            'url': {'read_only': True, 'view_name': 'detail_user', 'lookup_field': 'username'},
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        if "password" in validated_data:
            from django.contrib.auth.hashers import make_password
            validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)


class UserDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'second_name', 'last_name', 'get_full_name',
                  'birthday', 'isd', 'phonenumber', 'zip_code', 'delivery_address', 'place', 'avatar')
        lookup_field = 'username'
        read_only_fields = ('get_full_name', 'username',)
        extra_kwargs = {
            'birthday': {'required': False},
        }

class UpdatePassUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'password')
        read_only_fields = ('url', 'username',)
        extra_kwargs = {
            'url': {'view_name': 'detail_user', 'lookup_field': 'username'},
            'password': {'write_only': True}, }

    def update(self, instance, validated_data):
        if "password" in validated_data:
            from django.contrib.auth.hashers import make_password
            validated_data["password"] = make_password(validated_data["password"])
        return super().update(instance, validated_data)


class ListUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'is_staff', 'get_full_name']
        extra_kwargs = {
            'url': {'view_name': 'detail_user', 'lookup_field': 'username'},
        }
