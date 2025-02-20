#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <image file> <description>"
    echo $#
    exit 1
fi

if [ ! -f "$1" ]; then
	echo "Error: no such file '$1'"
	exit 2
fi

mkdir -p iexec_in
mkdir -p iexec_out

tmp_dir=$(mktemp --directory)
cp "$1" "${tmp_dir}/image"

rm -rf iexec_in/0xmyzipfile
zip -qXj iexec_in/0xmyzipfile ${tmp_dir}/image

docker run --rm \
	-v $PWD/iexec_in:/iexec_in \
	-v $PWD/iexec_out:/iexec_out \
	-e IEXEC_IN=/iexec_in \
	-e IEXEC_OUT=/iexec_out \
	ansimonet/image-caption-matcher:non-tee "$2"


