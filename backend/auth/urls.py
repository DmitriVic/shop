from django.urls import path, include

from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import UserViewSet, UserListViewSet

router1 = routers.DefaultRouter()
router1.register(r'detail', UserViewSet)

router2 = routers.DefaultRouter()
router2.register(r'api', UserListViewSet)

urlpatterns = [
    path('api/users/', include(router1.urls)),
    path('', include(router2.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
