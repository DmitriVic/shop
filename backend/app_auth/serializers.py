from rest_framework import serializers

from .models import User


class UserCreateUpdatePassSerializer(serializers.HyperlinkedModelSerializer):
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

    def update(self, instance, validated_data):
        if "password" in validated_data:
            from django.contrib.auth.hashers import make_password
            validated_data["password"] = make_password(validated_data["password"])
        return super().update(instance, validated_data)


class UserDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'second_name', 'last_name', 'avatar',
                  'birthday', 'isd', 'phonenumber', 'zip_code', 'delivery_address', 'place')
        lookup_field = 'username'
        read_only_fields = ('username', 'avatar')
        extra_kwargs = {
            'birthday': {'required': False, 'allow_null': True},
        }


# class UpdatePassUserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ('url', 'username', 'password')
#         read_only_fields = ('url', 'username',)
#         extra_kwargs = {
#             'url': {'view_name': 'detail_user', 'lookup_field': 'username'},
#             'password': {'write_only': True}, }
#
#     def update(self, instance, validated_data):
#         if "password" in validated_data:
#             from django.contrib.auth.hashers import make_password
#             validated_data["password"] = make_password(validated_data["password"])
#         return super().update(instance, validated_data)


class ListUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'is_staff', 'get_full_name', 'avatar']
        extra_kwargs = {
            'url': {'view_name': 'detail_user', 'lookup_field': 'username'},
        }


class OnlyUserAvatarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'avatar')
        read_only_fields = ('url', 'username',)
        extra_kwargs = {
            'url': {'view_name': 'detail_user', 'lookup_field': 'username'},
        }


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        exclude = 'user_permissions', 'groups', 'is_superuser', 'is_staff', 'is_active', 'date_joined', 'last_login',
        extra_kwargs = {
            'url': {'view_name': 'user-detail', 'lookup_field': 'username'},
            'password': {'write_only': True},
        }
