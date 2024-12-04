migrate((db) => {
  const collection = new Collection({
    "id": "3qsks9s09r09623",
    "created": "2023-05-10 19:00:36.842Z",
    "updated": "2023-05-10 19:00:36.842Z",
    "name": "subjects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kfsphxxn",
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
        "id": "lvigyljw",
        "name": "professor",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "dvhgzmrd2w2p68k",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "xlb8h0x7",
        "name": "books",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "z3p1gd0mm3bxu7d",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "s3fkninl",
        "name": "semester",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "lslabbwg",
        "name": "year",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("3qsks9s09r09623");

  return dao.deleteCollection(collection);
})
