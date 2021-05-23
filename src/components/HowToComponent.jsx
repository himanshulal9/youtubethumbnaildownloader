import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";

export default function HowToComponent() {
  const howtoData = [
    {
      ques: "How do I download a YouTube thumbnail?",
      ans: "Now here we wiil discuss how to download youtube thumbnail in simple steps",

      stepCount: true,
      steps: [
        { no: "1", step: "Open youtubethumbnaildownloader.com" },
        {
          no: "2",
          step: " Now Paste the copied link into search bar and click on download",
        },
        {
          no: "3",
          step: " A variety of youtube thumbnail will appear , click on the download button of the prefered resolution ",
        },
      ],
    },
    {
      ques: "How do I make a video thumbnail?",
      ans: "We can not make a youtube video thumbnail because it is auto generated  by the youtube when we upload the vedio to our channel , to show viewers some originality of the particular video",
    },
    {
      ques: "How do you view thumbnails on YouTube?",
      ans: "there are many ways to view the thumbnail, on of them is to download it first by our youtubethumbnail downloader tool and view it ",
    },
    {
      ques: "How can I download the video from YouTube?",
      ans: "Youtube donot allow user to download video but we could do it any way, we could use IDM Extension into the browser or we could simply use similar tool to download the vedio as well",
    },
    {
      ques: "How do I get a YouTube thumbnail URL?",
      ans: "We can get any YouTube thumbnail URL by using Youtube Data Api or we can simply right click on the thumbnail of youtube video and past it in our Website and see the url in image tag src of fetcthe thumbnail of the youtube video",
    },
    {
      ques: "What is the YouTube thumbnail size 2020?",
      ans: "That's a generic question comes in everybody's mind while making the youtube thumbnail of uploading video, so we should take the full hd resolution i.e 1920*1080 and let youtube decide what dimension better suits on different devices",
    },
    {
      ques: "How can I make my thumbnails attractive?",
      ans: "To make your thumbnails attractive you must use different colors pallets and have to use designing software like canva or adobe Xd  to design the youtube thumbnail",
    },
    {
      ques: "Why can't I upload thumbnails on YouTube?",
      ans: "If you can't I upload thumbnails on YouTube there might be some mischevious activity has been doen before with your IP and goggle has been deceted it. to be able the upload thumbnial on youtube , kindly reset your IP or delete cookies from the browser or nothings works yet then change the version of the browser or update it or do what ever you want to my lovely friend ",
    },
    {
      ques: "What do Youtubers use to make thumbnails?",
      ans: "Well as a youtuber i use Adobe Xd and Canva to make my thumbnail more realistic and attractive",
    },
    {
      ques: "How do I make a thumbnail on my phone",
      ans: "To make Youtube thumbnail on smart phones you need to install canva designing software for mobile to make thumbnails",
    },
    {
      ques: "How do you get a full size thumbnail on YouTube?",
      ans: " To  get a full size thumbnail on YouTube you must download it first and watch it on your device",
    },
    {
      ques: "How do you put a cover photo on YouTube?",
      ans: "To put cover photo on youtube we have to upload our generated thumbnial in the uploading section of the video uploading section",
    },
    {
      ques: "How do I make my YouTube thumbnail HD?",
      ans: "We can make our youtube thumbnail HD by creating it into 1920*1080 resolution and design it in Adobe xD and export it in HD Quality",
    },
  ];

  return (
    <Container>
      {howtoData.map((item, i) => (
        <Paper key={i} component={Box} p={2} mt={2} mb={1}>
          <Typography variant='h6' color='textPrimary' gutterBottom>
            {item.ques}
          </Typography>
          <Typography variant='h6' color='textSecondary' gutterBottom>
            {item.ans}
          </Typography>
          {item.stepCount ? (
            <List>
              {item.steps.map((item, i) => (
                <ListItem key={i}>
                  <ListItemIcon>Step {item.no}</ListItemIcon>
                  <ListItemText>{item.step}</ListItemText>
                </ListItem>
              ))}
            </List>
          ) : null}
        </Paper>
      ))}
    </Container>
  );
}

// What is a Youtube Thumbnail Downloader?
// Youtube Thumbnail Generator is an online tool that gives you a good quality picture from Youtube. It is effortless to do it, and it works very fast. With the help of HD Thumbnail Downloader, we can get many kinds of pictures from Youtube.

// How To Use Youtube Thumbnail Downloader HD?
// It Is Very easy to Use Youtube Thumbnail Downloader. Please follow these simple steps-

// First, Go To YouTube Official website.
// And copy the URL of the YouTube video you want to download the thumbnail.
// Then paste that URL into the text box provided.
// After that click on the Get Thumbnail button, your thumbnail will show.
// Using Youtube Thumbnail Grabber is very easy to use. Its User Interface is straightforward. To use it, you have to paste the URL of the YouTube video in a large text box. After pasting the URL, you have to click on the Get Thumbnail button. After clicking on the button, the Youtube thumbnail downloader will provide you various pictures. You can download the type of image you need.

// What Quality Provided By HD Thumbnail Downloader?
// HD Thumbnail Downloader provides excellent quality. This quality is as follows. HD Thumbnail Generator supported images in Full FHD(1080p), HD(720p), 4K, SD, and also in small size. Youtube Video Thumbnail Downloader currently supported all formats of YouTube Video (FHD, HQ, 1080p, 4K), etc. In many videos on YouTube, the quality of the thumbnail is not good. With this ring, we are not able to show the thumbnail of good quality.

// What is the use of Youtube Thumbnail Download?
// Many people say that what is the use of Youtube Thumbnail Download. I have to say to all of them that the use of Youtube Thumbnail Saver is very much in today's time if you are a blogger, it helps you a lot, and you are an Even if it is Youtuber, it will help you a lot. And if you do any work related to the image on the Internet, then you may need it.

// How to Youtube Thumbnail Save HD?
// It is very easy to Youtube Thumbnail Save HD quality with the help of HD Youtube Thumbnail Downloader. With its help, you can download thumbnail in any quality and in any size.

// How to find thumbnail of a YouTube video?
// It is very easy to find youtube video thumbnail with the help of youtube thumbnail downloader. With its help, you can download thumbnail in many quality and in any diffrent size.

// How to save 4k YouTube thumbnail?
// This is very good platform to save 4k YouTube thumbnail with the help of youtube thumbnail downloader.

// Thumbnail Downloader Youtube is Free or Not?
// Many people have the idea that this tool is free or not, but Thumbnail Downloader Youtube is entirely free, and there is no charge for using it. You can download any number of images from the youtube downloader with thumbnail.
