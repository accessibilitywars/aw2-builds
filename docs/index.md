# Accessibility Wars 2

This site is a proof-of-concept for hosting Low-Intensity builds for the Accessibility Wars 2 community

## Our Mission

We are a community of Guild Wars 2 gamers with accessibility needs.  We aim to help accommodate a wide range of needs, from
physical to cognitive. To this end, with the help of the community, we publish and archive low-intensity (LI)
builds that can allow players to solo more difficult content, and comfortably contribute in group play.

## The Builds

A note from jupiter:

These builds are designed to be exceptionally easy to play in solo content, or with open world groups.
These builds are fluid, and you should consider the builds listed as a starting point or guideline.
Play around with different traits, skills, and weapons at your leisure.
Think about if builds are power or condi, and try not to mix the two (often).
Some folks find more defense is more comfortable, while others are more comfortable when they can burst down enemies.
These builds are about enabling you to find your own comfort zone in the game.

<ul>
	{% for post in site.posts %}
	<li>
		<h2><a href="{{post.url | relative_url}}">{{post.title}}</a></h2>
		{{post.excerpt}}
	</li>
	{% endfor %}
</ul>
