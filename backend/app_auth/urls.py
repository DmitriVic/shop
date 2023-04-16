from django.urls import path, include

from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'api/v2/users', UserViewSet)

urlpatterns = [
    path('', index, name='home'),
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/auth/user/reg/', CreateUserApiView.as_view(), name='reg_user'),
    path('api/auth/user/list/', ListUserApiView.as_view(), name='list_user'),
    path('api/auth/user/<str:username>/', DetailUserApiView.as_view(), name='detail_user'),
    path('api/auth/user/<str:username>/pass/', UpdatePassUserApiView.as_view(), name='password_user'),
    path('api/auth/user/<str:username>/avatar/', UpdateAvatarUserApiView.as_view(), name='avatar_user'),
    path('', include(router.urls)),
]
