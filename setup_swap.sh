#!/bin/bash

# This script sets up a swap file on a Linux system

# Define the size of the swap file 
SWAP_SIZE=1G

# Check if swap is already enabled
if sudo swapon --show | grep -q '/swapfile'; then
  echo "Swap is already enabled."
  exit 0
fi

# Create a swap file
echo "Creating a swap file of size $SWAP_SIZE..."
sudo fallocate -l $SWAP_SIZE /swapfile

# Set the correct permissions
echo "Setting permissions on the swap file..."
sudo chmod 600 /swapfile

# Mark the file as swap space
echo "Configuring the swap file..."
sudo mkswap /swapfile

# Enable the swap file
echo "Enabling the swap file..."
sudo swapon /swapfile

# Verify that the swap is active
echo "Verifying swap status..."
sudo swapon --show

# Make the swap file permanent
echo "Making the swap file permanent..."
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Adjust swappiness
echo "Setting swappiness to 10..."
sudo sysctl vm.swappiness=10
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf

# Adjust cache pressure
echo "Setting cache pressure to 50..."
sudo sysctl vm.vfs_cache_pressure=50
echo 'vm.vfs_cache_pressure=50' | sudo tee -a /etc/sysctl.conf

echo "Swap setup complete."