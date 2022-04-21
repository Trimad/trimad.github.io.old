---
title: youtube-dl
author: Tristan Madden
categories: [youtube-dl]
tags: [audio, video]
---
<i>youtube-dl</i> is a command-line program to download videos from YouTube.com and a few more sites.
<h2>Examples</h2>
Download a YouTube video with the best available audio quality:
```console
youtube-dl -f bestaudio "https://www.youtube.com/watch?v=iik25wqIuFo"
```
Download an entire YouTube playlist:
```console
youtube-dl --yes-playlist "https://www.youtube.com/playlist?list=PLG49S3nxzAnmpdmX7RoTOyuNJQAb-r-gd"
```
Begin downloading from a playlist at a specific position:
```console
youtube-dl --yes-playlist --playlist-start 22 "https://www.youtube.com/watch?v=M5c9HdaQqh0&list=PLG49S3nxzAnmpdmX7RoTOyuNJQAb-r-gd"
```
<h2><a href="https://yt-dl.org/latest/youtube-dl.exe">Download the Windows executable</a></h2>