# Simple REST API

## Description

Das folgende Beispiel zeigt, wie man einen einfachen Webservice (Server) mit REST-API mit `Python` und `Flask` erstellt. Hierbei können Personen angelegt und deren Email-Adressen und andere Werte geändert oder hinzugefügt werden. Die Daten werden in der Datei `data.json` gespeichert. Zudem können auf der Website unter `http://127.0.0.1:5000/` die Einträge in die Datenbank angezeigt werden.

## Requirements

Installieren des Projekts mit `pdm`:

```bash
pdm install
```

## Usage

- Starten des Severs mittels `python -m flask --app main run`
- Dieser sollte nun unter `http://127.0.0.1:5000` im Browser erreichbar sein.
- Sie können die REST-API nun nutzen, um Personen in die Datenbank zu speichern, zu ändern oder zu löschen. Hierzu können Sie die bereitgestellten Python-Dateien verwenden.
    - Mittels `test/post_api.py`können neue User angelegt werden
    - Mittels `test/put_api.py` können Email-Adressen von Usern geändert oder hinzugefügt werden werden
    - Mittels `test/get_api.py` können Informationen zu Usern abgerufen werden
    - Mittels `test/delete_api.py` können User gelöscht werden
- Vorsicht: ggf. können die die Tests nicht direkt über den `Play`-Button starten, sondern müssen diese mittels Terminal ausgeführt `python .\post_api.py`

## API Endpoints


```
Methos   URI             : Description

GET 	/person          : Get all persons
POST 	/person          : Create a new person

GET 	/person/{name}   : Get the person information identified by "name"
PUT 	/person/{name}   : Update the person information identified by "name"
DELETE	/person/{name}   : Delete person by "name"
```