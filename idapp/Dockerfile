FROM python:3.9-slim

RUN  apt-get update \
    && apt-get install -y --no-install-recommends \
    && apt-get install -y curl unzip

RUN pip install tf-keras tensorflow Pillow

RUN curl -L -o transformers.zip https://github.com/jbekkink/transformers/archive/refs/heads/main.zip \
    && unzip transformers.zip \
    && pip install ./transformers-main

RUN curl -L -o huggingface_hub.zip https://github.com/jbekkink/huggingface_hub/archive/refs/heads/main.zip \
    && unzip huggingface_hub.zip \
    && pip install ./huggingface_hub-main

COPY ./src /app

ENTRYPOINT ["python", "/app/main.py"]
