#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Print the branch being updated
echo "Running EAS update on branch: $1"

# Run the EAS update command and capture the output
output=$(npx eas update --auto --branch "$1" --json --non-interactive 2>&1)

# Log the full output for debugging
echo "Log the full output for debugging"
echo "EAS update command output: $output"

# Extract the EAS Dashboard URL using grep
echo "Extracting the EAS Dashboard URL..."
eas_dashboard_url=$(echo "$output" | grep -o 'https://expo\.dev/accounts/[^ ]*/projects/[^ ]*/updates/[^ ]*')

# Check if the URL was found
if [[ -n "$eas_dashboard_url" ]]; then
    echo "EAS Dashboard update available: $eas_dashboard_url"
    echo "::set-output name=url::$eas_dashboard_url"
else
    echo "No EAS Dashboard URL found in output."
    exit 1
fi
