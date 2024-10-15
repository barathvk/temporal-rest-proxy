package main

import (
	"context"
	"fmt"
	"net/http"
	"os"

	"github.com/gogo/gateway"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"google.golang.org/grpc"

	"github.com/render-examples/temporal-rest-proxy/server/generated/api/workflowservice/v1"
	"github.com/render-examples/temporal-rest-proxy/server/rpc"
)

func createGRPCGatewayHandler(temporalClientConn *grpc.ClientConn) (*runtime.ServeMux, error) {
	mux := runtime.NewServeMux(
		runtime.WithMarshalerOption(
			runtime.MIMEWildcard,
			&gateway.JSONPb{
				EmitDefaults: true,
				Indent:       " ",
				OrigName:     false,
			},
		),
	)

	err := workflowservice.RegisterWorkflowServiceHandler(
		context.Background(),
		mux,
		temporalClientConn,
	)
	if err != nil {
		return nil, fmt.Errorf("unable to register workflow service handler: %w", err)
	}

	return mux, nil
}

func main() {
	conn := rpc.CreateGRPCConnection(os.Getenv("TEMPORAL_CLUSTER_HOST")+":7233", nil)
	defer conn.Close()

	handler, err := createGRPCGatewayHandler(conn)
	if err != nil {
		fmt.Println(fmt.Errorf("unable to create gRPC gateway handler: %w", err))
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		handler.ServeHTTP(w, r)
	})
	http.ListenAndServe(":10000", nil)
}
