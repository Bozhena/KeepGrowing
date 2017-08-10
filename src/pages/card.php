<?php
// Start the session
session_start();
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css?family=Montserrat|Noto+Serif" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <title>KeepGrowing</title>
  <link rel="stylesheet" type="text/css" href="../css/card.css">
  <link rel="stylesheet" type="text/css" href="../css/keepGrowing.css">
  <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>
  <script src="../js/navigation.js"></script>
  <script src="../js/classie.js"></script>
</head>

<body onload="onPageLoad();">

  <header class="navigation_menu">
    <div id="logo">
    </div>
    <div id="nav_bar">
      <ul>
        <li class="nav_bar">
            <input type="search" class="ui-btn" id="search" placeholder="What are you looking for?" oninput="changeIcon(this.id);" onkeypress="search(event, this.id);" onfocus="useDefault(this.id);" onblur="useDefaultIcon(this.id);"></input>
        </li>
        <li class="nav_bar"><a href="#" class="ui-btn" id="about">About</a></li>
        <li class="nav_bar"><?php
        if (isset($_SESSION['login_status']) && $_SESSION['login_status'] == true) {
            echo '<a href="#" class="ui-btn", "s3-btn" id="add_card" onclick="createCard();">Add Card</a>';
        }
        else {
          echo '<a href="#" class="ui-btn", "s3-btn" id="signIn" onclick="popupOpen();">Sign In</a>';
        }
        ?>
      </li>
      </ul>
    </div>
  </header>

  <!-- Overlay -->
  <div class="overlay" id="overlay" style="display:none;"></div>

  <!-- Popup -->
  <div class="popup" id="popup" style="display:none;">
    <div class="popup-inner">
      <div id="rectangle1"><p>SIGN IN</p></div>
      <div id="rectangle2"><p>SIGN UP</p></div>
      <input type="button" name="Close" class="s3-btn-close" onclick="popupClose();" value="&times;">
      <form>
        <input type="text" class="field"><br>
        <input type="text" class="field"><br>
        <p class="pass">Fogot your password<a href="">Click here</a></p>
        <input type="submit" class="submit">
      </form>
    </div>
  </div>

  <!-- Popup Button -->

  <header class="masthead clear">
    <div class="centered">
      <div class="site-branding">
        <h1 class="site-title"></h1>
        <h2 class="title">Tree with leaves</h2>
        <div class="category">Drawing</div>
        <div class="age">7-9</div>
      </div>
    </div>
  </header>

  <main class="main-area">
    <div class="centured"
      <section class="cards">
        <div class="tabs">
          <div id="pentagon">
          </div>
        </div>
        <div class="card-body">
        </div>
      </section>
</div>
  </main>

<footer>
  <p id="rights">
    &#9400; 2017 Keep Growing. All rights reserved
  </p>
</footer>
</body>
</html>
