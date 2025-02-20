IMG_NAME=image-caption-matcher
IMG_FROM=ansimonet/${IMG_NAME}:non-tee
IMG_TO=ansimonet/${IMG_NAME}:tee

SCONIFIER_IMAGE="registry.scontain.com/scone-production/iexec-sconify-image:5.7.6-v15"

if [ $(uname -p | grep arm) ]; then
	SCONIFIER_IMAGE="registry.scontain.com/scone-debug/iexec-sconify-image-unlocked:5.8.9"
	PLATFORM="--platform=linux/amd64"
	DOCKER_PLATFORM="--docker-target-platform=linux/amd64"
fi

docker run -it ${PLATFORM} \
            -v /var/run/docker.sock:/var/run/docker.sock \
            ${SCONIFIER_IMAGE} \
            sconify_iexec \
            ${DOCKER_PLATFORM} \
            --name=${IMG_NAME} \
            --from=${IMG_FROM} \
            --to=${IMG_TO} \
            --binary-fs \
            --fs-dir=/app \
            --host-path=/etc/hosts \
            --host-path=/etc/resolv.conf \
            --binary=/usr/local/bin/python3.8 \
            --heap=4610612736 \
            --dlopen=1 \
            && echo -e "\n------------------\n" \
            && echo "successfully built TEE docker image => ${IMG_TO}" \
            && echo "application mrenclave.fingerprint is $(docker run -it --rm -e SCONE_HASH=1 ${IMG_TO})"
