migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g92wzu9338mu9iu")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g92wzu9338mu9iu")

  collection.createRule = null

  return dao.saveCollection(collection)
})
