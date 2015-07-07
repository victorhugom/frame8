define({ "api": [
  {
    "type": "post",
    "url": "/cart/",
    "title": "create",
    "description": "<p>create an cart</p> ",
    "name": "create",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "products",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/cart.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/cart/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/cart/:id",
    "title": "get",
    "description": "<p>get an cart</p> ",
    "name": "getById",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Cart",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Cart not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/cart.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/cart/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/cart/?limit&skip",
    "title": "list",
    "description": "<p>list all carts</p> ",
    "name": "list",
    "group": "Cart",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Cart not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/cart.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/cart/?limit&skip"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/cart/:id",
    "title": "remove",
    "description": "<p>remove an cart</p> ",
    "name": "remove",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Cart not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/cart.js",
    "groupTitle": "Cart",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/cart/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/catalog/",
    "title": "create",
    "description": "<p>create a catalog</p> ",
    "name": "create",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Catalog Name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Catalog Status</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "validUntil",
            "description": "<p>Catalog expire date</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>Product List</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.id",
            "description": "<p>Product Id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.name",
            "description": "<p>Product Name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.decription",
            "description": "<p>Product Descrption</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "product.categories",
            "description": "<p>Product Categories</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.quantityAvailable",
            "description": "<p>Product Quantity Available</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Error</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/catalog/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/catalog/:id",
    "title": "get",
    "description": "<p>get an catalog</p> ",
    "name": "getById",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Catalog Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Catalog Status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "validUntil",
            "description": "<p>Catalog expire date</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>Product List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.id",
            "description": "<p>Product Id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.name",
            "description": "<p>Product Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.decription",
            "description": "<p>Product Descrption</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "product.categories",
            "description": "<p>Product Categories</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.quantityAvailable",
            "description": "<p>Product Quantity Available</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"active\": true,\n    \"id\": \"5595b081441a09b023377ba0\"\n    \"created_at\": \"2015-07-02T21:43:29.172Z\",\n    \"updated_at\": \"2015-07-02T21:48:33.514Z\",\n    \"name\": \"Festa T\",\n    \"validUntil\": \"2015-07-09T03:00:00.000Z\",\n    \"products\": [\n        {\n            \"_id\": \"559574b033d01ee42151be9b\",\n            \"name\": \"El Jimador\",\n            \"price\": 23,\n            \"quantityAvailable\": 10,\n            \"categories\": [\n                \"drink\"\n            ]\n        },\n        {\n            \"_id\": \"559574a133d01ee42151be9a\",\n            \"name\": \"Santa Dose\",\n            \"price\": 23,\n            \"quantityAvailable\": 10,\n            \"categories\": [\n                \"drink\"\n            ]\n        },\n        {\n            \"_id\": \"5595749133d01ee42151be99\",\n            \"name\": \"Smirnoff\",\n            \"price\": 70,\n            \"quantityAvailable\": 10,\n            \"categories\": [\n                \"drink\"\n            ]\n        },\n        {\n            \"_id\": \"5595748833d01ee42151be98\",\n            \"name\": \"Belvedere 1l\",\n            \"price\": 130,\n            \"quantityAvailable\": 10,\n            \"categories\": [\n                \"drink\"\n            ]\n        },\n        {\n            \"_id\": \"5595747e33d01ee42151be97\",\n            \"name\": \"Belvedere\",\n            \"price\": 240,\n            \"quantityAvailable\": 10,\n            \"categories\": [\n                \"drink\"\n            ]\n        }\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Catalog not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/catalog/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/catalog/?limit&skip&name",
    "title": "list",
    "description": "<p>list all catalogs</p> ",
    "name": "list",
    "group": "Catalog",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "catalogs",
            "description": "<p>Catalog List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "catalog.name",
            "description": "<p>Catalog Name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "catalog.active",
            "description": "<p>Catalog Status</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "catalog.validUntil",
            "description": "<p>Catalog expire date</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Error</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/catalog/?limit&skip&name"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/catalog/:id",
    "title": "remove",
    "description": "<p>remove an catalog</p> ",
    "name": "remove",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Catalog not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/catalog/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/catalog/",
    "title": "update",
    "description": "<p>update an catalog</p> ",
    "name": "update",
    "group": "Catalog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Catalog Name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Catalog Status</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "validUntil",
            "description": "<p>Catalog expire date</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>Product List</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.id",
            "description": "<p>Product Id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.name",
            "description": "<p>Product Name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.decription",
            "description": "<p>Product Descrption</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "product.categories",
            "description": "<p>Product Categories</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.quantityAvailable",
            "description": "<p>Product Quantity Available</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Catalog",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Catalog not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/catalog.js",
    "groupTitle": "Catalog",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/catalog/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/customer/addcard",
    "title": "add card",
    "description": "<p>add a card to te customer account</p> ",
    "name": "addCard",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "cardNumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "expirationMonth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "expirationYear",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "securityCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "billingAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.state",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "billingAddress.postalCode",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/addcard"
      }
    ]
  },
  {
    "type": "post",
    "url": "/customer/addshippingaddress",
    "title": "add shipping address",
    "description": "<p>add a Shipping Address to te customer account</p> ",
    "name": "addShippingAddress",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "state",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "postalCode",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/addshippingaddress"
      }
    ]
  },
  {
    "type": "post",
    "url": "/customer/",
    "title": "create",
    "description": "<p>create an customer</p> ",
    "name": "create",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/customer/email/:email",
    "title": "get by email",
    "description": "<p>get user by his email</p> ",
    "name": "getByEmail",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "Customer",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Customer",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/email/:email"
      }
    ]
  },
  {
    "type": "get",
    "url": "/customer/:id",
    "title": "get",
    "description": "<p>get an customer</p> ",
    "name": "getById",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Customer",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Customer not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/customer/?limit&skip",
    "title": "list",
    "description": "<p>list all customers</p> ",
    "name": "list",
    "group": "Customer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Customer not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/?limit&skip"
      }
    ]
  },
  {
    "type": "post",
    "url": "/customer/login",
    "title": "login",
    "description": "<p>do login</p> ",
    "name": "login",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "Customer",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>password or email</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/login"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/customer/:id",
    "title": "remove",
    "description": "<p>remove an customer</p> ",
    "name": "remove",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Customer not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/customer/",
    "title": "update",
    "description": "<p>update an customer</p> ",
    "name": "update",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Customer",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Customer not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/customer/updatepassword/",
    "title": "update password",
    "description": "<p>update password</p> ",
    "name": "updatePassword",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Customer",
            "description": "<p>not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/customer.js",
    "groupTitle": "Customer",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/customer/updatepassword/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/order/",
    "title": "create",
    "description": "<p>create an order</p> ",
    "name": "create",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "payments",
            "description": "<p>Payment List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "payment.type",
            "description": "<p>Payment type</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "payment.flag",
            "description": "<p>Payment flag (if by card)</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "payment.value",
            "description": "<p>Payment type name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "products",
            "description": "<p>Product List</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.id",
            "description": "<p>Product id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "products.quantity",
            "description": "<p>Product Quantity</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sellerId",
            "description": "<p>Seller id</p> "
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "shippingInfo.instructions",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.postalCode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "shippingInfo.shippingAddress.state",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/order/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/order/:id",
    "title": "get",
    "description": "<p>get an order</p> ",
    "name": "getById",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Order",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Order not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/order/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/order/?limit&skip",
    "title": "list",
    "description": "<p>list all orders</p> ",
    "name": "list",
    "group": "Order",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Order not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/order/?limit&skip"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/order/:id",
    "title": "remove",
    "description": "<p>remove an order</p> ",
    "name": "remove",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Order not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/order/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/order/",
    "title": "update",
    "description": "<p>update an order</p> ",
    "name": "update",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Order",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Order not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/order.js",
    "groupTitle": "Order",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/order/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/product/",
    "title": "create",
    "description": "<p>create a product</p> ",
    "name": "create",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantityAvailable",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantitySold",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "thumbnailUri",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "available",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "categories",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "mediaFiles",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.uri",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "physicalProduct",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.height",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.length",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.weight",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.width",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.volume",
            "description": ""
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/product/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/product/:id",
    "title": "get",
    "description": "<p>get an product</p> ",
    "name": "getById",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantityAvailable",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantitySold",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "thumbnailUri",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "available",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "categories",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "mediaFiles",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.uri",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "physicalProduct",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.height",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.length",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.weight",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.width",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.volume",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"created_at\": \"2015-07-02T17:28:16.412Z\",\n    \"updated_at\": \"2015-07-02T17:28:16.412Z\",\n    \"name\": \"El Jimador\",\n    \"price\": 23,\n    \"catalogs\": [],\n    \"__v\": 0,\n    \"active\": true,\n    \"mediaFiles\": [],\n    \"categories\": [\n        \"drink\"\n    ],\n    \"id\": \"559574b033d01ee42151be9b\"\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Product not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/product/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/product/?limit&skip&priceFrom&priceTo&category",
    "title": "list",
    "description": "<p>list all products</p> ",
    "name": "list",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "products",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.price",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.quantityAvailable",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.quantitySold",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.thumbnailUri",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "product.available",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "product.categories",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "product.mediaFiles",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.mediaFiles.type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product.mediaFiles.uri",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "product.physicalProduct",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.physicalProduct.height",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.physicalProduct.length",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.physicalProduct.weight",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.physicalProduct.width",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "product.physicalProduct.volume",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"created_at\": \"2015-07-02T17:28:16.412Z\",\n        \"updated_at\": \"2015-07-02T17:28:16.412Z\",\n        \"name\": \"El Jimador\",\n        \"price\": 23,\n        \"catalogs\": [],\n        \"__v\": 0,\n        \"active\": true,\n        \"mediaFiles\": [],\n        \"categories\": [\n            \"drink\"\n        ],\n        \"id\": \"559574b033d01ee42151be9b\"\n    },\n    {\n        \"created_at\": \"2015-07-02T17:27:36.447Z\",\n        \"updated_at\": \"2015-07-02T17:27:36.447Z\",\n        \"name\": \"Belvedere 1l\",\n        \"price\": 130,\n        \"catalogs\": [],\n        \"__v\": 0,\n        \"active\": true,\n        \"mediaFiles\": [],\n        \"composition\": [],\n        \"categories\": [\n            \"drink\"\n        ],\n        \"id\": \"5595748833d01ee42151be98\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Product not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/product/?limit&skip&priceFrom&priceTo&category"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/product/:id",
    "title": "remove",
    "description": "<p>remove an product</p> ",
    "name": "remove",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Product not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/product/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/product/",
    "title": "update",
    "description": "<p>update an product</p> ",
    "name": "update",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantityAvailable",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "quantitySold",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "thumbnailUri",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "available",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "categories",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "mediaFiles",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.type",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mediaFiles.uri",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "physicalProduct",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.height",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.length",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.weight",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.width",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "physicalProduct.volume",
            "description": ""
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "Product",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"created_at\": \"2015-07-02T17:28:16.412Z\",\n    \"updated_at\": \"2015-07-02T17:28:16.412Z\",\n    \"name\": \"El Jimador\",\n    \"price\": 23,\n    \"catalogs\": [],\n    \"active\": true,\n    \"mediaFiles\": [],\n    \"categories\": [\n        \"drink\"\n    ],\n    \"id\": \"559574b033d01ee42151be9b\"\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Product not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/product.js",
    "groupTitle": "Product",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/product/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "create",
    "description": "<p>create an user</p> ",
    "name": "create",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>User full name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>User email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "username",
            "defaultValue": "email",
            "description": "<p>Username, to login, fill this field with email if not passed</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"WAITER\"",
              "\"CASHIER\"",
              "\"ADMIN\"",
              "\"PRODUCER\""
            ],
            "optional": false,
            "field": "role",
            "description": "<p>Role</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/user/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "get",
    "description": "<p>get an user</p> ",
    "name": "getById",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>User full name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>User email</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "username",
            "defaultValue": "email",
            "description": "<p>Username, to login</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"559a86c0dc6ecd4c126aff87\",\n    \"created_at\": \"2015-07-06T13:46:40.584Z\",\n    \"updated_at\": \"2015-07-06T13:46:40.584Z\",\n    \"name\": \"cashier\",\n    \"role\": \"CASHIER\",\n    \"username\": \"cashier\",\n    \"__v\": 0,\n    \"active\": true,\n    \"id\": \"559a86c0dc6ecd4c126aff87\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>User not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/user/?limit&skip&name&username&email&active&role",
    "title": "list",
    "description": "<p>list all users</p> ",
    "name": "list",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n       \"_id\": \"559a86c0dc6ecd4c126aff87\",\n       \"created_at\": \"2015-07-06T13:46:40.584Z\",\n       \"updated_at\": \"2015-07-06T13:46:40.584Z\",\n       \"name\": \"cashier\",\n       \"role\": \"CASHIER\",\n       \"username\": \"cashier\",\n       \"__v\": 0,\n       \"active\": true,\n       \"id\": \"559a86c0dc6ecd4c126aff87\"\n   },\n   {\n       \"_id\": \"559a860adc6ecd4c126aff84\",\n       \"created_at\": \"2015-07-06T13:43:38.567Z\",\n       \"updated_at\": \"2015-07-06T13:43:38.567Z\",\n       \"name\": \"Admin\",\n       \"role\": \"ADMIN\",\n       \"username\": \"admin\",\n       \"__v\": 0,\n       \"active\": true,\n       \"id\": \"559a860adc6ecd4c126aff84\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>User not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/user/?limit&skip&name&username&email&active&role"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "login",
    "description": "<p>do login</p> ",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Invalid",
            "description": "<p>password or email</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/user/login"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "remove",
    "description": "<p>remove an user</p> ",
    "name": "remove",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Success</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>User not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/user/:id"
      }
    ]
  },
  {
    "type": "put",
    "url": "/user/",
    "title": "update",
    "description": "<p>update an user</p> ",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>User full name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>User email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "username",
            "defaultValue": "email",
            "description": "<p>Username, to login, fill this field with email if not passed</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"WAITER\"",
              "\"CASHIER\"",
              "\"ADMIN\"",
              "\"PRODUCER\""
            ],
            "optional": false,
            "field": "role",
            "description": "<p>Role</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"559a86c0dc6ecd4c126aff87\",\n    \"created_at\": \"2015-07-06T13:46:40.584Z\",\n    \"updated_at\": \"2015-07-06T13:46:40.584Z\",\n    \"name\": \"cashier\",\n    \"role\": \"CASHIER\",\n    \"username\": \"cashier\",\n    \"__v\": 0,\n    \"active\": true,\n    \"id\": \"559a86c0dc6ecd4c126aff87\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>User not found</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/models/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/user/"
      }
    ]
  }
] });