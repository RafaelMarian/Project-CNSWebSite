migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvhgzmrd2w2p68k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ge3ovw9w",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvhgzmrd2w2p68k")

  // remove
  collection.schema.removeField("ge3ovw9w")

  return dao.saveCollection(collection)
})
