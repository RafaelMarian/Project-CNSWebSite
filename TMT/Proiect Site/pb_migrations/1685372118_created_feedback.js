migrate((db) => {
  const collection = new Collection({
    "id": "g92wzu9338mu9iu",
    "created": "2023-05-29 14:55:18.236Z",
    "updated": "2023-05-29 14:55:18.236Z",
    "name": "feedback",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3qoh7hyk",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zlhvbyrm",
        "name": "message",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g92wzu9338mu9iu");

  return dao.deleteCollection(collection);
})
