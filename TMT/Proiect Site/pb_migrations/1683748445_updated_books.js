migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z3p1gd0mm3bxu7d")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z3p1gd0mm3bxu7d")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
