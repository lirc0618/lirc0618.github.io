**{{ locale.journal_reviewer }}:** {% for venue in site.data.service.journals %}<a href="{{ venue.url | escape }}" target="_blank" rel="noopener noreferrer">{{ venue.name | escape }}</a>{% unless forloop.last %} · {% endunless %}{% endfor %}

**{{ locale.conference_reviewer }}:** {% for venue in site.data.service.conferences %}<a href="{{ venue.url | escape }}" target="_blank" rel="noopener noreferrer">{{ venue.name | escape }}</a>{% unless forloop.last %} · {% endunless %}{% endfor %}
