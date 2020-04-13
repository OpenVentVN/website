#!/bin/sh

echo "...... Run Build ......"
npm run build
echo "...... Run Done ......"
echo "......................"
echo "...... Start sync source to server ......"
cd build/ && sshpass -p "PASS" rsync -avr -P * UNAME@HOST:FOLDER
echo "...... Sync source to server Done ......"
