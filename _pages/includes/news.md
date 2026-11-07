{% for item in site.data.news %}
- *{{ item.date }}*: {{ item.text[page.lang] }}
{% endfor %}
