# Chat App

## Run the App

Clone the Repo.

You can run the app using

### 1. Directly from npm

`npm run dev` or `npm start`

Note: set `server/.env` with the values sent by email

### 2. In Docker Containers

`docker-compose up`

## Initial Notes

- Adding git ignore for `.env` file to protect mLab user details. `.env` is just for development ease. Saves on build time ;).
- Docker is set up to `server` and `mongodb` container.

## Redux Store Structure

```json
{
  "rooms": [
    {
      "chats": [
        {
          "message": "send message",
          "nickname": "TestUser",
          "createdAt": 1533400696285
        },
        {
          "message": "Hello People",
          "nickname": "nick",
          "createdAt": 1533411792500
        }
      ],
      "_id": "5b657a59a31932bf12a34a54",
      "name": "episode iv",
      "createdAt": "2018-08-04T10:05:13.599Z",
      "__v": 6
    },
    {
      "chats": [
        {
          "message": "Hi",
          "nickname": "Luke",
          "createdAt": 1533399992225
        },
        {
          "message": "Hahaha",
          "nickname": "yoda",
          "createdAt": 1533400015185
        },
        {
          "message": "May the Force Be With You",
          "nickname": "yoda",
          "createdAt": 1533400030082
        },
        {
          "message": "hes with darkside",
          "nickname": "Sith",
          "createdAt": 1533400303770
        },
        {
          "message": "It Just works",
          "nickname": "Rahul R",
          "createdAt": 1533400401693
        },
        {
          "message": "4444",
          "nickname": "Rahul R",
          "createdAt": 1533400422114
        },
        {
          "message": "Hello",
          "nickname": "Obi Van",
          "createdAt": 1533412046197
        },
        {
          "message": "asds",
          "nickname": "Obi Van",
          "createdAt": 1533412049543
        },
        {
          "message": "aa",
          "nickname": "Obi Van",
          "createdAt": 1533412052269
        }
      ],
      "_id": "5b657a60a31932bf12a34a55",
      "name": "episode v",
      "createdAt": "2018-08-04T10:05:20.830Z",
      "__v": 14
    },
    {
      "chats": [
        {
          "message": "Is anyone here?",
          "nickname": "nick",
          "createdAt": 1533411810781
        },
        {
          "message": "Hey Dude!",
          "nickname": "Prat",
          "createdAt": 1533412269233
        },
        {
          "message": "sup buddy!",
          "nickname": "nick",
          "createdAt": 1533412285500
        },
        {
          "message": "lol",
          "nickname": "Prat",
          "createdAt": 1533412435062
        }
      ],
      "_id": "5b65f515830bd41349a8f5df",
      "name": "New Room",
      "createdAt": "2018-08-04T18:48:53.919Z",
      "__v": 4
    }
  ],
  "selected": "New Room",
  "roomData": {
    "chats": [
      {
        "message": "Is anyone here?",
        "nickname": "nick",
        "createdAt": 1533411810781
      },
      {
        "message": "Hey Dude!",
        "nickname": "Prat",
        "createdAt": 1533412269233
      },
      {
        "message": "sup buddy!",
        "nickname": "nick",
        "createdAt": 1533412285500
      },
      {
        "message": "lol",
        "nickname": "Prat",
        "createdAt": 1533412435062
      }
    ]
  }
}
```
