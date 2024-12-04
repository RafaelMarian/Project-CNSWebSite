migrate((db) => {
  const collection = new Collection({
    "id": "dvhgzmrd2w2p68k",
    "created": "2023-05-10 18:56:05.229Z",
    "updated": "2023-05-10 18:56:05.229Z",
    "name": "professors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mye1d0ro",
        "name": "title",
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
        "id": "gvs64fzw",
        "name": "name",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dvhgzmrd2w2p68k");

  return dao.deleteCollection(collection);
})
