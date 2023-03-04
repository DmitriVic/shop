from django.urls import path, include

from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from .views import *

urlpatterns = [
    path('', index, name='home'),
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/auth/user/reg/', CreateUserApiView.as_view(), name='reg_user'),
    path('api/auth/user/list/', ListUserApiView.as_view(), name='list_user'),
    path('api/auth/user/<str:username>/', DetailUserApiView.as_view(), name='detail_user'),
    path('api/auth/user/<str:username>/pass/', UpdatePassUserApiView.as_view(), name='password_user'),
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
