---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="academic-section intro-section" id="about-me">
<div class="section-kicker">RESEARCH &amp; ACADEMIC PROFILE</div>
{% capture intro %}{% include_relative includes/intro.md %}{% endcapture %}
{{ intro | markdownify }}
<div class="research-tags"><span>Hardware Security</span><span>Physical Unclonable Functions</span><span>Printed Electronics</span><span>AI Authentication</span></div>
</section>

<!--If you like the template of this homepage, welcome to star and fork my open-sourced template version [AcadHomepage ![](https://img.shields.io/github/stars/RayeRen/acad-homepage.github.io?style=social)](https://github.com/RayeRen/acad-homepage.github.io).-->

<section class="academic-section news-section" id="news">
{% capture news %}{% include_relative includes/news.md %}{% endcapture %}
{{ news | markdownify }}
</section>

<section class="academic-section publications-section" id="publications">
{% capture publications %}{% include_relative includes/pub.md %}{% endcapture %}
{{ publications | markdownify }}
</section>

<section class="academic-section honors-section" id="honors">
{% capture honors %}{% include_relative includes/honers.md %}{% endcapture %}
{{ honors | markdownify }}
</section>

<section class="academic-section education-section" id="education">
{% capture education %}{% include_relative includes/others.md %}{% endcapture %}
{{ education | markdownify }}
</section>
<footer class="academic-footer">{{ site.author.name }} <span>·</span> {{ site.author.location }} <span>·</span> <a href="mailto:{{ site.author.email }}">Get in touch ↗</a></footer>
