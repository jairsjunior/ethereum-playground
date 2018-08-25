FROM alpine:3.7

RUN mkdir /usr/ethereum

RUN \
  apk add --update go git make gcc musl-dev linux-headers ca-certificates && \
  git clone --depth 1 --branch release/1.8 https://github.com/ethereum/go-ethereum && \
  (cd go-ethereum && make geth) && \
  cp go-ethereum/build/bin/geth /usr/ethereum && \
  apk del go git make gcc musl-dev linux-headers && \
  rm -rf /go-ethereum && rm -rf /var/cache/apk/*

COPY config/* /usr/ethereum/

RUN chmod 755 /usr/ethereum/start.sh

ENTRYPOINT [ "/usr/ethereum/start.sh" ]

