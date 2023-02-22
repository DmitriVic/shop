from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'password', 'is_staff']
        extra_kwargs = {
            'password': {'write_only': True},
            'is_staff': {'read_only': True},
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


class UserDetailSerializer(UserSerializer):
    class Meta:
        model = User
        # fields = '__all__'
        exclude = ('password',)
        depth = 1
        read_only_fields = ('is_staff', 'last_login', 'date_joined', 'is_superuser', 'is_active')
        # extra_kwargs = {
        #     'password': {
        #         'write_only': True,
        #         'allow_blank': True
        #     },
        # }
