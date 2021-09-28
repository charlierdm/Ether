# Ether

Ether is a visual audio project, built using React and Ableton Live.

Ether is deployed, try it out [here](https://ether-audio-visual.netlify.app)

Play it using the a, s and d keys on your keyboard or by pressing and holding the buttons to play the audio samples.

* [Installation](https://github.com/charlierdm/Ether-Visual-Audio#Installation)
* [Audio Visual Example](https://github.com/charlierdm/Ether-Visual-Audio#Audio-Visual-Example)

![ether1](https://user-images.githubusercontent.com/75075773/130949596-58522b41-507f-481c-9a6b-7b06ddf37667.gif)



* Firstly, I created the sounds in Ableton Live using synths and effects.
* I then set up the react app so that when you press one of the respective qwerty keys, the audio is played until you let go or the sample ends. The audio fades out then back in using SetTimeOut.
* I created the buttons styling to light up on press and release and finally set the background colour to transition in and out with the audio. 

## Audio Visual Example


https://user-images.githubusercontent.com/75075773/135127564-a29059ea-95ec-4196-8603-560957c8dae2.mp4



## User Stories

```
As a user
So that I can enjoy some synthesized sounds
I want to be able to hear the audio samples play in my browser

As a user
So that I can play the sounds like a keyboard
I want to press use the qwerty keyboard to play sounds

As a user
So that I can play the notes for as long as I like
I would like the audio to stop and start for the duration I hold the key down

As a user
So that I can be immersed in the visual experience
I want to see visual changes based on my qwerty keyboard playing

```

## Installation

Enter the following in your terminal:
```
$ git clone https://github.com/charlierdm/Ether-Visual-Audio.git
```
In the root directory, run the following to install dependencies:
```
$ npm install
```
To run the app:
```
npm start
```
The site will load in your browser, if for any reason it doesn't, click >> [Visit Ether](http://localhost:3000/)





