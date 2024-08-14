/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "prdb5h6vkcaz03f",
    "created": "2024-08-10 05:49:10.029Z",
    "updated": "2024-08-10 05:49:10.029Z",
    "name": "dwadawdawd",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ehj5r1vw",
        "name": "aad",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "uf7btkyd",
        "name": "a",
        "type": "text",
        "required": false,
        "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("prdb5h6vkcaz03f");

  return dao.deleteCollection(collection);
})
