migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z3p1gd0mm3bxu7d")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z3p1gd0mm3bxu7d")

  collection.listRule = null

  return dao.saveCollection(collection)
})
