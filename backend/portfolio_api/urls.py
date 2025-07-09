from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PortfolioEntryViewSet

router = DefaultRouter()
router.register(r'entries', PortfolioEntryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]