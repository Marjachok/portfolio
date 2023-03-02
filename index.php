<!DOCTYPE html>
<html>
<head>
    <!-- <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <link rel="stylesheet" href="style.css">


<title>Portfolio</title>
    <script src="libs/gsap/gsap.min.js" defer></script>
	<script src="libs/gsap/ScrollTrigger.min.js" defer></script>
	<script src="libs/gsap/ScrollSmoother.min.js" defer></script>
    <script src="app.js" defer></script>
</head>
<body>

<div class="wrapper">
    <div class="content">

    <div class="hero" ><?php include("header/header.html"); ?> </div>
    <div class="sec1" ><?php include("about/facts.html"); ?></div>
    <div class="sec2" ><?php include("fact2/fact2.html"); ?></div>
    <div class="sec3" ><?php include("fact3/fact3.html"); ?></div>
    <div class="sec4" ><?php include("links/links.html"); ?></div>
    <div class="sec5" data-speed="0.8" data-lag="0.5"><?php include("skills/skills.html"); ?></div>
    <div class="sec6" data-speed="1.3"><?php include("qualities/qualities.html"); ?></div>
    <p class="text_wo">My webpages</p>
    <div class="sec7" ><?php include("works/work1.html"); ?></div>
    <div class="sec8" ><?php include("works/work2.html"); ?></div>
    <a href="https://withkoji.com/@marjachok" target="_blank"><img src="img/logos.png" class="logos" ></a>
    </div>
</div>

</body>
</html>
