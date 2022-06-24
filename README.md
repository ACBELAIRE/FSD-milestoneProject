# FSD-milestoneProject

The inspiration behind this project is that I love the Simpsons. The colors and graphics that they display on the show would make the html and css components look very nice and colorful. And being that the simpsons are one of the most disorderly cartoon families in America,  A scramble photo puzzle would fit directly in line with the theme of the show.

The way to play the game is to switch every tile either left/right or up/down with the white/almost completely white tile, until the photo is unscrambled and reveals a perfectly inline, put together photo. In the order of [1- 9]. For future levels of intermediate and advanced instead of a white tile, switch it with the "simpson family logo picture"

The tech used to build this game:
        Youtube:
                Kenny Yip Coding (Slide Puzzle Game in JS HTML CSS)
                David Reid (Add a start and game over screen to Javascript Pong)

        Cut Photos into Equal Parts:
                https://www.imgonline.com.ua/eng/cut-photo-into-pieces.php

        Audio and Autoplay
                https://www.w3schools.com/tags/att_video_autoplay.asp

   Photos
        Bart on Skateboard
                https://vignette.wikia.nocookie.net/all-worlds-alliance/images/9/99/14gyui.jpg/revision/latest?cb=20190408040026

        Bart Simpson Rapper
                https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:133729?quality=0.8&format=jpg&width=1440&height=810&.jpg

        Bart Simpton Coding/Gaming
                 https://cdn.vox-cdn.com/thumbor/rbpZpURz5lUcnqIhoXxw9WtlCIQ=/0x80:2048x1152/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/15964382/D1tVfkNVAAEVSZ8.jpg


Outstanding bugs and Unfinished functionality

Wanted the "start" portion to be static, but as I switched it around.. it would let me move location left and right  but not upward and downward without affecting the background and wouldnt move to location within the square. So I left it on absolute.

I started the coding for a  "game won" screen. But I don't have the best understanding of it for it to work or understand what I am doing to get it to work. 
        If the photos are in the array {"1","2","3","4","5","6","7","8","9"}, Then signal the "You Won" Component.
        The same would apply to intermediate and advanced levels as long as they end up in the order 1-25 and 1-49 then it would signal "You Won" 

I also couldn't find out within the code, why the increment counter for slides wouldn't appear hidden on start screen and visible when I selected the element to be visible within the startgame() function . (So I left it to be seen on both sides.)

I couldn't figure out why the letters were doubled in Start Screen.

Future Functionality

Also it would be great to have a bart simpson audio  once the image is completed. and also have after random audio after so many slide transitions.. such as 10 ,20,30+ audio like "I can do that, but I don't wanna" "chuuump" "buttman" "chance to be bad" "uhh" etc
        Audio can be retrieved from: https://www.soundboard.com/sb/Bart_Simpson_sounds 

I would also like to add levels..
        Beginning (bart Simpson on skateboard) 3x3
        Intermediate (Bart Simpson rapper) 5x5
        Advanced (Bart Simpson Coding/Playing game on computer) 7x7