---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
¡Hola y bienvenido al sitio web de Holanerd!
<div id="like_button_container"></div>
<ul>
    {% for post in site.posts limit: 5 %}
    <li>
        <p><a href="{{ post.url }}">{{ post.title }}</a></p>
        <div class="grid2">
            <p><time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time></p>
            <p>{{ post.author }}</p>
        </div>
        <!--{{ post.content }}-->
    </li>
    {% endfor %}
</ul>