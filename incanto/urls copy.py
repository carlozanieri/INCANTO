from django.urls import include, path
from ecom import views
from django.contrib.auth.views import LoginView,LogoutView

urlpatterns = [
path('paypal/', include('paypal.standard.ipn.urls')),
]