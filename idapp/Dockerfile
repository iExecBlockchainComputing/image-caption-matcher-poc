FROM python:3.8-slim AS builder

RUN  apt-get update \
    && apt-get install -y --no-install-recommends \
    && apt-get install -y curl unzip \
	 	pkg-config libhdf5-dev libhdf5-serial-dev gcc \
	 && rm -rf /var/lib/apt/lists/*

RUN pip install tf-keras tensorflow Pillow

RUN curl -L -o transformers.zip https://github.com/jbekkink/transformers/archive/refs/heads/main.zip \
    && unzip transformers.zip \
    && pip install ./transformers-main

RUN curl -L -o huggingface_hub.zip https://github.com/jbekkink/huggingface_hub/archive/refs/heads/main.zip \
    && unzip huggingface_hub.zip \
    && pip install ./huggingface_hub-main


FROM python:3.8-slim

RUN apt-get update && \
    apt-get install -y \
    libhdf5-dev libhdf5-serial-dev \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /usr/local/lib/python3.8/site-packages /usr/local/lib/python3.8/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

COPY ./src /app

ENTRYPOINT ["python", "/app/main.py"]
