from django.contrib.auth.models import User
from rest_framework import mixins
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import GenericViewSet

from .serializers import UserSerializer, UserDetailSerializer


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 1000


class UserViewSet(mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  # mixins.DestroyModelMixin,
                  GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = StandardResultsSetPagination


class UserListViewSet(mixins.CreateModelMixin,
                      mixins.ListModelMixin,
                      GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = StandardResultsSetPagination
