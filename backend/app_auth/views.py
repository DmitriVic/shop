from rest_framework import mixins, status
from rest_framework.generics import GenericAPIView, ListAPIView, CreateAPIView, UpdateAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .models import User
from .permissions import IsAdminOrIsOwner
from .serializers import *


# class StandardResultsSetPagination(PageNumberPagination):
#     page_size = 5
#     page_size_query_param = 'page_size'
#     max_page_size = 1000


class ListUserApiView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = ListUserSerializer
    permission_classes = (IsAdminUser, )


class CreateUserApiView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer


class DetailUserApiView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
    permission_classes = (IsAdminOrIsOwner, )


class UpdatePassUserApiView(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UpdatePassUserSerializer
    permission_classes = (IsAdminOrIsOwner,)

# class UserViewSet(mixins.RetrieveModelMixin,
#                   mixins.UpdateModelMixin,
#                   GenericViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserDetailSerializer
#     permission_classes = (IsAdminOrIsOwner, )


# class UserListViewSet(mixins.CreateModelMixin,
#                       # mixins.ListModelMixin,
#                       GenericViewSet):
#     queryset = User.objects.all().order_by('username')
#     serializer_class = UserSerializer
#     pagination_class = StandardResultsSetPagination


class TokenObtainPairAndPkView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        user_id = User.objects.get(username=request.data.get('username')).pk
        serializer.validated_data['user_id'] = user_id
        return Response(serializer.validated_data, status=status.HTTP_200_OK)
