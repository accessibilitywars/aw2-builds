# Accessibility Wars 2

This site is a proof-of-concept for hosting Low-Intensity builds for the Accessibility Wars 2 community

## Our Mission

We are a community of Guild Wars 2 gamers with accessibility needs.  We aim to help accommodate a wide range of needs, from
physical to cognitive. To this end, we publish with the help of the community, low-intensity (LI) builds that can allow
players to comfortably contribute in group play. Most builds here are focused on instanced play (raids, strikes, fractals, etc),
but may be of use in other modes.

## The Builds

<ul>
	{% for post in site.posts %}
	<li>
		<h2><a href="{{post.url | relative_url}}">{{post.title}}</a></h2>
		{{post.excerpt}}
	</li>
	{% endfor %}
</ul>
