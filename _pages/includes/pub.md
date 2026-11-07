{% assign publication_types = 'journal,conference,poster' | split: ',' %}
{% for type in publication_types %}
{% assign papers = site.data.publications | where: 'type', type %}
{% if papers.size > 0 %}
{% if type == 'poster' %}{% assign pdf_label = locale.poster_file %}{% else %}{% assign pdf_label = 'PDF' %}{% endif %}
### {{ locale[type] }}
{% for paper in papers %}
- ### {% if paper.title_url %}[{{ paper.title }}]({{ paper.title_url }}){% else %}{{ paper.title }}{% endif %}

{% assign badges = paper.badges[page.lang] %}
{% if badges and badges.size > 0 %}
    {% for badge in badges %}``{{ badge }}`` {% endfor %}

{% endif %}
{% if paper.summary %}
    {{ paper.summary[page.lang] }}

{% endif %}
    ``{{ paper.venue }}``{% if paper.date %} · {{ paper.date }}{% endif %} · {{ paper.authors }}

{% if paper.research %}
    <a href="{{ paper.research | relative_url }}" target="_self" lang="{{ locale.reading_lang }}" hreflang="zh-CN">{{ locale.reading }} →</a>{% if paper.pdf %} · [{{ pdf_label }}]({{ paper.pdf | relative_url }}){% endif %}{% if paper.slide %} →· <a href="{{ paper.slide | relative_url }}" target="_blank" rel="noopener">{{ locale.slides }}</a>{% endif %}
{% elsif paper.pdf %}
    [{{ pdf_label }}]({{ paper.pdf | relative_url }}){% if paper.slide %} →· <a href="{{ paper.slide | relative_url }}" target="_blank" rel="noopener">{{ locale.slides }}</a>{% endif %}
{% endif %}

{% endfor %}
{% endif %}
{% endfor %}
