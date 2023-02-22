from rest_framework import serializers

from app_auth.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'is_staff']
        write_only_fields = 'password',
        read_only_fields = 'is_staff',

    def create(self, validated_data):
        if "password" in validated_data:
            from django.contrib.auth.hashers import make_password
            validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)


class UserDetailSerializer(UserSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'first_name', 'second_name', 'last_name',
                  'is_active', 'is_staff', 'is_superuser', 'isd', 'phonenumber', 'zip_code',
                  'delivery_address')
        depth = 1
        read_only_fields = ('is_staff', 'is_superuser', 'is_active')

    def update(self, instance, validated_data):
        if "password" in validated_data:
            from django.contrib.auth.hashers import make_password
            validated_data["password"] = make_password(validated_data["password"])
        return super().update(instance, validated_data)
