#!/bin/bash

# Function to display help message
helpFunction()
{
   echo ""
   echo "Usage: $0 -s swap_size"
   echo -e "\t-s Size of the swap file (e.g., 1G, 2G)"
   exit 1 # Exit script after printing help
}

# Initialize variables
SWAP_SIZE=""

# Parse command-line options
while getopts "s:" opt
do
   case "$opt" in
      s ) SWAP_SIZE="$OPTARG" ;;
      ? ) helpFunction ;; # Print helpFunction in case of invalid option
   esac
done

# Check if SWAP_SIZE is set
if [ -z "$SWAP_SIZE" ]
then
   echo "Swap size not specified"
   helpFunction
fi

# Check if swap is already enabled
if sudo swapon --show | grep -q '/swapfile'; then
  echo "Swap is already enabled. Removing existing swap file..."
  # Disable the swap file
  sudo swapoff /swapfile
  # Remove the swap file
  sudo rm /swapfile
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
# Remove any existing swapfile entry from /etc/fstab
sudo sed -i '/\/swapfile/d' /etc/fstab
# Add the new swapfile entry
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