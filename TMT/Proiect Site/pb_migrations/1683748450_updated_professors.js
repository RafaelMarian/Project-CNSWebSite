migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvhgzmrd2w2p68k")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dvhgzmrd2w2p68k")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
