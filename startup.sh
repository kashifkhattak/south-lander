#!/bin/bash

# Run docker compose down
docker compose down

# Check if docker compose down was successful
if [ $? -eq 0 ]; then
    echo "Docker compose down successful. Proceeding to the next step..."
    # Run docker compose up with build and in detached mode
    docker compose up --build -d

    # Check if docker compose up was successful
    if [ $? -eq 0 ]; then
        echo "Docker compose up successful."
    else
        echo "Error: Docker compose up failed."
    fi
else
    echo "Error: Docker compose down failed. Aborting."
fi

