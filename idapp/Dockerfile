FROM ubuntu:20.04

RUN  apt-get update \
    && apt-get install -y --no-install-recommends \
    && apt-get install -y curl unzip\
    wget \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/* && \
    wget https://repo.anaconda.com/miniconda/Miniconda3-py38_4.10.3-Linux-x86_64.sh && \
    bash Miniconda3-py38_4.10.3-Linux-x86_64.sh -b -p /root/miniconda

ENV CONDA_AUTO_UPDATE_CONDA="false"
ENV PATH=/root/miniconda/bin:$PATH

RUN /root/miniconda/bin/pip install tf-keras
RUN /root/miniconda/bin/pip install tensorflow
RUN /root/miniconda/bin/pip install --upgrade Pillow

RUN curl -L -o transformers.zip https://github.com/iexecBlockchainComputing/transformers/archive/refs/heads/main.zip \
    && unzip transformers.zip \
    && pip install ./transformers-main

RUN curl -L -o huggingface_hub.zip https://github.com/iexecBlockchainComputing/huggingface_hub/archive/refs/heads/main.zip \
    && unzip huggingface_hub.zip \
    && pip install ./huggingface_hub-main

COPY ./src /app

ENTRYPOINT ["/root/miniconda/bin/python3.8", "/app/main.py"]
