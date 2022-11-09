
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



## Run app on your Android devices for Windows
#### 1. Install Node.js on system
#### 2. Install expo-cli global on system
```
npm install expo-cli --global
```
#### 3. Clone Github Repository
```
git clone https://github.com/krishna306/InshortFrontend.git
```
#### 4. Go to Project Directory and run
```
npm install
```
#### 5. After installation run
```
npm start
```
#### 6. Install expo go on your android device
#### 7. Scan the QR code from console and app will start on andoid device
## Screen Recording of Code Base and Features
[![Watch the video](https://i9.ytimg.com/vi/9vRqEWtOKvA/mq2.jpg?sqp=CITDrZsG&rs=AOn4CLDuM10lv-FlVi_I6AVaRq0Nh-46zA)](https://youtu.be/9vRqEWtOKvA)
