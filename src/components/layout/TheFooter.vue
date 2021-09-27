<template>
 <footer id="footer">
  <div class="container">
   <div class="footer-copyright">
    <div class="footer-link">
     <a href="https://github.com/DisturbedMild" target="_blank"
      ><img src="../../assets/icons/github.png" alt="GitHub"
     /></a>
    </div>
    <div class="footer-author">Created by - Vladyslav Dmytrenko</div>
   </div>
  </div>
 </footer>
</template>

<style>

#footer {
    font-size: 16px;
    line-height: 24px;
    font-family: Arial, sans-serif;
    font-weight: 600;
    margin-top: 50px;
}

.footer-copyright {
 max-width: 320px;
 width: 100%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.footer-link {
 width: 32px;
 height: 32px;
}
.footer-link a img {
 width: auto;
 height: 100%;
}

.footer-author {
    display: inline-block;
}
</style>
