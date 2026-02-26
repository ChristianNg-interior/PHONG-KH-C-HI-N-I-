var APP_DATA = {
  "scenes": [
    {
      "id": "0-kv-phng-khch",
      "name": "KV PHÒNG KHÁCH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5441367966907329,
          "pitch": 0.07935945606324957,
          "rotation": 0,
          "target": "1-kv-phng-n"
        },
        {
          "yaw": -1.0537958238422203,
          "pitch": 0.0676482131314522,
          "rotation": 0,
          "target": "2-kv-phng-bp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kv-phng-n",
      "name": "KV PHÒNG ĂN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7189174682055643,
          "pitch": 0.06474842146087312,
          "rotation": 0,
          "target": "2-kv-phng-bp"
        },
        {
          "yaw": -3.119743363888423,
          "pitch": 0.10701776790794781,
          "rotation": 0,
          "target": "0-kv-phng-khch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kv-phng-bp",
      "name": "KV PHÒNG BẾP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.119528397789261,
          "pitch": 0.10568143835580202,
          "rotation": 0,
          "target": "0-kv-phng-khch"
        },
        {
          "yaw": 2.1603476753707316,
          "pitch": 0.1749853091710598,
          "rotation": 0,
          "target": "1-kv-phng-n"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
