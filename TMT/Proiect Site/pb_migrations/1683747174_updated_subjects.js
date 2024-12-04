migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3qsks9s09r09623")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3qsks9s09r09623")

  collection.listRule = null

  return dao.saveCollection(collection)
})
