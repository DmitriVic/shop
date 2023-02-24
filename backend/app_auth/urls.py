from django.urls import path, include

from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView

from .views import *

# router = routers.DefaultRouter()
# router.register(r'api/auth/register', UserListViewSet)
#
# router_detail = routers.SimpleRouter()
# router_detail.register('', UserViewSet)


urlpatterns = [
    # path('', include(router.urls)),
    # path('api/auth/users/', include(router_detail.urls)),
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/auth/user/reg/', CreateUserApiView.as_view(), name='reg_user'),
    path('api/auth/user/list/', ListUserApiView.as_view(), name='list_user'),
    path('api/auth/user/<int:pk>/', DetailUserApiView.as_view(), name='detail_user'),
    path('api/auth/user/<int:pk>/pass/', UpdatePassUserApiView.as_view(), name='password_user'),
    path('api/auth/token/', TokenObtainPairAndPkView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
