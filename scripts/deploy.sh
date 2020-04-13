#!/bin/sh

echo "...... Run Build ......"
npm run build
echo "...... Run Done ......"
echo "......................"
echo "...... Start sync source to server ......"
cd build/ && sshpass -p "123456" rsync -avr -P * ubuntu@172.26.12.9:/media/iot/iot-nginx/data/wwwroot/openvent/
echo "...... Sync source to server Done ......"
