migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvhgzmrd2w2p68k")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvhgzmrd2w2p68k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mye1d0ro",
    "name": "asd",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
