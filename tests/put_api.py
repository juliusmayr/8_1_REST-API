import requests
import json

## Update a person
# Define the URL of the API
url = "http://127.0.0.1:5000/person/123"

# Define the data you want to send
data = {
    "id" : "123",
    "first_name": "Julian",
    "last_name": "Huber",
    "birth_year" : "1900" 
}

# Convert the data to JSON format
data_json = json.dumps(data)

# Send a POST request to the API
response = requests.put(url, data=data_json)

# Print the response from the server
print(response.text)