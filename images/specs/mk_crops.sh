#!/bin/bash

for i in *.jpg; do
	if ! test -f crop/$i; then
		convert -crop 272x136+0+0 $i crop/$i;
	fi;
done
