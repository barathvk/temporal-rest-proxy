FROM golang:1.19-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o /app/temporal-proxy /app/rest-proxy/main.go

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/temporal-proxy .
EXPOSE 10000
ENTRYPOINT ["./temporal-proxy"]