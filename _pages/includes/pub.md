# 📝 {{ locale.publications }}
{% assign publication_types = 'journal,conference' | split: ',' %}
{% for type in publication_types %}
## {% if type == 'journal' %}📄{% else %}🎙{% endif %} {{ locale[type] }}
{% assign papers = site.data.publications | where: 'type', type %}
{% for paper in papers %}
- ### {% if paper.title_url %}[{{ paper.title }}]({{ paper.title_url }}){% else %}{{ paper.title }}{% endif %}

    {% for badge in paper.badges[page.lang] %}``{{ badge }}`` {% endfor %}

{% if paper.summary %}
    {{ paper.summary[page.lang] }}

{% endif %}
    ``{{ paper.venue }}`` · {{ paper.authors }}

{% if paper.research %}
    <a href="{{ paper.research | relative_url }}" target="_self" lang="{{ locale.reading_lang }}" hreflang="zh-CN">{{ locale.reading }} →</a> · [PDF]({{ paper.pdf | relative_url }})
{% endif %}

{% endfor %}
{% endfor %}
