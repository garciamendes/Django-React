# Django imports
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

# Third party imports
from django_js_reverse.views import urls_js

# Project imports
from core.views import ReactTemplateView

urlpatterns = [
    path('', ReactTemplateView.as_view(), name='index'),

    path('jsreverse/', urls_js, name='js_reverse'),

    path('admin/', admin.site.urls),
]

urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)
