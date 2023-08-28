# Apply changes to the image
docker commit counter dockerc

# Store applied changes
docker save -o /root/fccp-simulation/goweb/dockerc.tar dockerc

# Copy .tar file to the destination
sshpass -p "/root/destination/pass" scp /root/fccp-simulation/goweb/dockerc.tar  root@46.249.102.73:/root/fccp-simulation/goweb/dockerc.tar

# Notify the destination
curl -X "POST" 46.249.102.73/load

# Stop the current container
docker stop counter

# Remove the current container
docker rm counter