import json
import requests

class Person():
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name =  last_name
        self.id = last_name[0:3]+first_name[0:3]

    def post(self):
        person_json = json.dumps(self.__dict__)
        print("JSON: ", person_json)

        # Hier Beispiel aus post_api.py ergänzen


if __name__ == "__main__":
    s1 = Person("Julian", "Huber")
    s1.post()