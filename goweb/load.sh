# Load the copied
docker load -i /root/goweb/dockerc.tar

# Run the container
docker run -d --name counter dockerc