# Apply changes to the image
docker commit counter dockerc

# Store applied changes
docker save -o /root/fccp-simulation/goweb/dockerc.tar dockerc

# Copy .tar file to the destination
sshpass -p "$(echo $2)" scp /root/fccp-simulation/goweb/dockerc.tar  root@$(echo $1):/root/fccp-simulation/goweb/dockerc.tar

# Notify the destination
curl -X "POST" $(echo $1)/load

# Stop the current container
docker stop counter

# Remove the current container
docker rm counter