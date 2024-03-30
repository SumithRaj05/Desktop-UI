#!/bin/bash
echo "running..."
# Check if the URL starts with "cmd://"
if [[ "$1" != "cmd://" ]]; then 
    # Extract the command and its arguments
    # cmd="${1#cmd://}"
    cmd="${@#cmd://}"
    echo $1
    # Execute the command with its arguments
    eval "$cmd" &>/dev/null &
else 
    # If the URL doesn't start with "cmd://", open a new terminal
    nohup konsole &>/dev/null &
fi
