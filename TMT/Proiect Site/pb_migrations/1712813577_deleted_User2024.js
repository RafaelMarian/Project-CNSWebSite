migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("12t6b6d8xvvggju");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "12t6b6d8xvvggju",
    "created": "2024-04-07 11:14:46.952Z",
    "updated": "2024-04-07 11:14:46.952Z",
    "name": "User2024",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "edrn38ya",
        "name": "id_diegomaradona123",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
})
