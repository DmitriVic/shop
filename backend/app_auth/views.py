from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, RetrieveAPIView
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


class DetailUserApiView(RetrieveAPIView, UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
    lookup_field = 'username'
    permission_classes = (IsAdminOrIsOwner, )


class UpdatePassUserApiView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UpdatePassUserSerializer
    lookup_field = 'username'
    permission_classes = (IsAdminOrIsOwner,)
