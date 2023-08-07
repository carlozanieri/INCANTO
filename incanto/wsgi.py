"""
WSGI config for incanto project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os
import django
from django.core.wsgi import get_wsgi_application
django.setup(set_prefix=False)
####os.environ.setdefault("DJANGO_SETTINGS_MODULE", "incanto.settings")
os.environ["DJANGO_SETTINGS_MODULE"] = "incanto.settings"
#os.environ.setdefault("DJANGO_SETTINGS_MODULE", "incanto.settings")
####os.environ["DJANGO_SETTINGS_MODULE"] = "incanto.settings"
### ultimo ### os.environ.setdefault("DJANGO_SETTINGS_MODULE", "incanto.settings")
#os.environ["DJANGO_SETTINGS_MODULE"] = "{{ project_name }}.settings"
##os.environ.setdefault("DJANGO_SETTINGS_MODULE", "{{ project_name }}.settings")
application = get_wsgi_application()

