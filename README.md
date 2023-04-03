# hello-node-from-microk8s
This is a tutorial to explain how to import your docker custom image in Kubernetes with MicroK8S

# 
docker build -t node-hello-world ./Docker
docker run -p 4000:3005 node-hello-world
sudo systemctl restart docker.service
##
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_id
##
docker save node-hello-world > node-hello-world.tar
microk8s ctr image import node-hello-world.tar
microk8s kubectl apply -f Kubernetes/pod.yaml
microk8s kubectl apply -f Kubernetes/service.yaml