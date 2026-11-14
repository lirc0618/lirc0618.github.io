{% assign service_order = site.data.service.order[page.lang] %}
**{{ locale.journal_reviewer }}:** {% for venue_id in service_order.journals %}{% assign venue = site.data.service.journals[venue_id] %}<a href="{{ venue.url | escape }}" target="_blank" rel="noopener noreferrer">{{ venue.name | escape }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}

**{{ locale.conference_reviewer }}:** {% for venue_id in service_order.conferences %}{% assign venue = site.data.service.conferences[venue_id] %}<a href="{{ venue.url | escape }}" target="_blank" rel="noopener noreferrer">{{ venue.name | escape }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}

**{{ locale.workshop_reviewer }}:** {% for venue_id in service_order.workshops %}{% assign venue = site.data.service.workshops[venue_id] %}<a href="{{ venue.url | escape }}" target="_blank" rel="noopener noreferrer">{{ venue.name | escape }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}
