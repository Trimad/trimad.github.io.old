---
title: Download Movie Streams
author: Tristan Madden
categories: [CMD,ffmpeg]
tags: [🏴‍☠️,m3u8]
---

This is my tentative work flow for downloading movie streams online. The gist of what I've learned about this process is that every HTTP Live Stream (HLS) begins with an `.m3u8` playlist with a MIME type of `x-mpegURL` or `vnd.apple.mpegURL`. This playlist lists a series of .ts files that are streamed one at a time and decoded so your browser is not burdened with downloading the entire movie every time you refresh the page. These .ts files can also be aggregated and assembled into a video. 

<h2>Finding the Playlist</h2>
`.m3u8` playlists load at the very beginning of the stream and are easy to spot in Firefox Developer Edition. Navigate to the stream, press F12, click on the "Network" tab and refresh the page. 

![Desktop View](/assets/img/2022-06-09/2022-06-09 23_01_26-● 2022-06-09-download-movie-streams.md - trimad.github.io - Visual Studio Code.png)

In this first example we see the `.m3u8` playlist referred to as a Manifest. It sticks out in Firefox Developer Edition because the MIME type is `vnd.apple.mpegURL`. In Edge or Chrome this type will be something nondescript for some reason and the playlist will be much harder to spot. Right-click on the GET request for the playlist copy the URL, and you will have something like this:

```
https://cdn-ce21media.streaming.mediaservices.windows.net/REDACTED/20220518_day1dbt_baxermusser8460.ism/QualityLevels(1194234)/Manifest(video,format=m3u8-aapl-v3,audiotrack=aac_UND_2_56)
```

You'll know you're on the right track if you open a downloaded `.m3u8` file in Notepad++ and it looks something like this:

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-ALLOW-CACHE:NO
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-TARGETDURATION:6
#EXT-X-PROGRAM-DATE-TIME:1970-01-01T00:00:00Z
#EXTINF:6.000000,no-desc
Fragments(video=0,format=m3u8-aapl-v3,audiotrack=aac_UND_2_56)
#EXTINF:6.000000,no-desc
Fragments(video=60000000,format=m3u8-aapl-v3,audiotrack=aac_UND_2_56)
#EXTINF:6.000000,no-desc
Fragments(video=120000000,format=m3u8-aapl-v3,audiotrack=aac_UND_2_56)
#EXTINF:6.000000,no-desc
Fragments(video=180000000,format=m3u8-aapl-v3,audiotrack=aac_UND_2_56)
#EXTINF:6.000000,no-desc

...

Fragments(video=249540000000,format=m3u8-aapl-v3,audiotrack=aac_UND_2_56)
#EXT-X-ENDLIST
```

This URL can then be fed into ffmpeg like so and you will have successfully downloaded the stream:

```console
ffmpeg -i "https://cdn-ce21media.streaming.mediaservices.windows.net/REDACTED/20220518_day1dbt_baxermusser8460.ism/QualityLevels(1194234)/Manifest(video,format=m3u8-aapl-v3,audiotrack=aac_UND_2_56)" movie.mp4
```

![Desktop View](/assets/img/2022-06-09/2022-06-09 22_44_51-2022-06-09-download-movie-streams.md - trimad.github.io - Visual Studio Code.png)

Here is an example of a stream that the content host was trying to protect. The file is plainly named v.m3u8 and the MIME type is `vnd.apple.mpegURL`. However, when we look at the playlist itself the fragments are obfuscated as .jpg files.

```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOW-CACHE:YES
#EXT-X-TARGETDURATION:4
#EXTINF:3.083333,
0000.jpg
#EXTINF:3.000000,
0001.jpg
#EXTINF:3.000000,
0002.jpg
#EXTINF:3.000000,
0003.jpg
#EXTINF:3.000000,
0004.jpg
#EXTINF:3.000000,
0005.jpg
#EXTINF:3.000000,
0006.jpg
#EXTINF:3.000000,
0007.jpg

...

#EXTINF:2.250000,
1898.jpg
#EXT-X-ENDLIST
```

<!-- ```console
netsh wlan show profile
```
and then:
```console
netsh wlan show profile [SSID] key=clear
```
The outputs of these commands are captured in arrays and everything beyond that is just string matching and filtering. The output is saved as "output.csv" to your working directory and then automatically opens output.csv using the <a href="https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/invoke-item?view=powershell-7.2">Invoke-Item</a> cmdlet. 

<script src="https://gist.github.com/Trimad/1829b942568540b704b9ec21cfe99279.js"></script> -->