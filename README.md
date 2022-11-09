
# Inshort App

Shows quick news summary


## Features

- Light/dark mode toggle
- Dicover News By category  Availbale Categories **[General, Business, Entertainment, Health, Science, Sports, Technology]**
- News Page swip up to next article and swip down to go previos article
- Functionality to go to origional news artilce website from summary
## Things that could be done better
- Adding Icons to each category it will looks better instead of simple text
- Instead of creating database with limitted news articles live news apis can be used which can give realtime live news.
## Possible Improvement
- Add a search filter that search a perticular news having a keyword for Ex. news related to **"Elon Musk"**
- Feature to fetch news about a perticular Country
- News from a certain media for Ex. Indian Express, BBC

## Backend and Apis reference

### Process how I created Backend and Database
- I have used APIS from https://newsapi.org/ to fetch news 
- Created mongoose schema for news and function to fetch news from apis and save to Database
- Now Databse is ready to access news
#### Link to backend hosted on herokuapp
https://inshortbackend1.herokuapp.com/
#### Github Repository to backend
https://github.com/krishna306/InshortBackend

### APIS
#### Get all News

```http
  GET http://inshortbackend1.herokuapp.com/articles/allnews
```

#### Get News by Category

```http
  GET https://inshortbackend1.herokuapp.com/articles/fetchnewsbycategory/${category}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category`      | `string` | **Required**. Category  to fetch news |



## Screen Recording of Code Base and Features

### Features 
[![Watch the video](https://i9.ytimg.com/vi/CpAIZ-Yg0Ck/mq1.jpg?sqp=CIDxrJsG&rs=AOn4CLC8sJH4IXuOD7-_un9z6KLOQ0Cyfg)](https://youtu.be/CpAIZ-Yg0Ck)
### Code Base
