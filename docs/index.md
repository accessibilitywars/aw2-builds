# Accessibility Wars 2

This site is a proof-of-concept to hosting the LI builds respository for the Accessibility Wars 2 community.

## Builds

<ul>
	{% for post in site.posts %}
	<li>
		<h2><a href="{{post.url | relative_url}}">{{post.title}}</a></h2>
		{{post.excerpt}}
	</li>
	{% endfor %}
</ul>
