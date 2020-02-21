define({ "api": [
  {
    "type": "POST",
    "url": "/api/users/:id",
    "title": "获得某个用户",
    "description": "<p>根据ID获得某个用户</p>",
    "name": "getUser",
    "parameter": {
      "fields": {
        "path参数": [
          {
            "group": "path参数",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/users/5a45cefd080d7c39a036ca55"
      }
    ],
    "group": "User",
    "version": "1.0.0",
    "filename": "yqby-vue-server/routes/routes.js",
    "groupTitle": "User"
  }
] });
