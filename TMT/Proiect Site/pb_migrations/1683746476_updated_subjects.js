migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3qsks9s09r09623")

  // remove
  collection.schema.removeField("lvigyljw")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3qsks9s09r09623")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
