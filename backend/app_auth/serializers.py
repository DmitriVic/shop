from rest_framework import serializers

from .models import User


class UserCreateSerializer(serializers.ModelSerializer):
    # user_id = serializers.ModelField(model_field=User()._meta.get_field('id'), allow_blank=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {
            'id': {'read_only': True},
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
        fields = ('username', 'email', 'first_name', 'second_name', 'last_name',
                  'get_full_name', 'isd', 'phonenumber', 'zip_code', 'delivery_address')
        lookup_field = 'username'
        read_only_fields = 'get_full_name',


class UpdatePassUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')
        read_only_fields = 'username',

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
        # fields = ['url', 'username', 'is_staff', 'password']
        # write_only_fields = 'password',
        # read_only_fields = 'is_staff',


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['url', 'username', 'is_staff', 'password']
#         write_only_fields = 'password',
#         read_only_fields = 'is_staff',
#
#     def create(self, validated_data):
#         if "password" in validated_data:
#             from django.contrib.auth.hashers import make_password
#             validated_data["password"] = make_password(validated_data["password"])
#         return super().create(validated_data)
#
#
#

