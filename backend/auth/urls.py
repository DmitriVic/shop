from django.urls import path, include

from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import UserViewSet, UserListViewSet

router = routers.DefaultRouter()
router.register(r'api/auth', UserListViewSet)

router_detail = routers.DefaultRouter()
router_detail.register('', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api/auth/users/', include(router_detail.urls)),
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
