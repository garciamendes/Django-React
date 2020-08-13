from django.views.generic import TemplateView

class ReactTemplateView(TemplateView):
	template_name = 'frontend.html'