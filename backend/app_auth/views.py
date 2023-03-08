from django.shortcuts import redirect
from django.urls import reverse
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, RetrieveAPIView, DestroyAPIView
from rest_framework.permissions import IsAdminUser

from .permissions import IsAdminOrIsOwner
from .serializers import *


class ListUserApiView(ListAPIView):
    queryset = User.objects.all().order_by('username')
    serializer_class = ListUserSerializer
    permission_classes = (IsAdminUser, )


class CreateUserApiView(CreateAPIView):
    queryset = User.objects.all()
    lookup_field = 'username'
    serializer_class = UserCreateSerializer


class DetailUserApiView(RetrieveAPIView, UpdateAPIView, DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
    lookup_field = 'username'
    permission_classes = (IsAdminOrIsOwner, )

    def put(self, request, *args, **kwargs):
        print('request.data=', request.data)
        return self.update(request, *args, **kwargs)


class UpdatePassUserApiView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UpdatePassUserSerializer
    lookup_field = 'username'
    permission_classes = (IsAdminOrIsOwner,)


def index(request):
    return redirect(reverse('list_user'))
