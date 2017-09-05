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
  <link rel="stylesheet" type="text/css" href="../css/keepGrowing.css">
  <link rel="stylesheet" type="text/css" href="../css/signin.css">
  <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>
  <script src="../js/navigation.js"></script>
  <script src="../js/classie.js"></script>

  <script src="../js/jquery/jquery.min.js"></script>
  <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js"></script>
  <script type="text/javascript" src="../js/login.js"></script>
  <script type="text/javascript" src="../js/register.js"></script>

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
        <li class="nav_bar"><a href="#" class="ui-btn" id="about" onclick="openAbout();">About</a></li>
		<li class="nav_bar">
      <?php
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
      <div id="tab-1" onclick="tabActive('sign-in')" class="active"><p>SIGN IN</p></div>
      <div id="tab-2" onclick="tabActive('sign-up')" class="inactive"><p>SIGN UP</p></div>
      <div id="error"></div>
      <form id="log-in" class="form-login" method="post">
		    <div id="error"></div>
        <input type="text" value="Your name" class="field1" name="user_name" id="user_name" onfocus="if (this.value=='Your name') this.value='';" onblur="this.value = this.value==''?'Your name':this.value;"/>
        <br>
        <input type="password" value="Your password" class="field2" name="password" id="password" onfocus="if (this.value=='Your password') this.value='';" onblur="this.value = this.value==''?'Your password':this.value;"/><br>
        <p class="pass">Forgot your password<a class="pass1" href="">Click here</a></p>
        <input type="submit" class="submit" id="btn-submit" value="OK">
      </form>

      <form id="log-up" method="post" style="display: none;">
        <div id="error"></div>
        <input type="text" value="Your name" class="field1-2" name="user_name" onfocus="if (this.value=='Your name') this.value='';" onblur="this.value = this.value==''?'Your name':this.value;"/>
        <br>
        <input type="password" value="Your password" class="field2-2" name="password" onfocus="if (this.value=='Your password') this.value='';" onblur="this.value = this.value==''?'Your password':this.value;"/><br>
        <input type="text" value="Your e-mail" class="field3"  name="user_email" onfocus="if (this.value=='Your e-mail') this.value='';" onblur="this.value = this.value==''?'Your e-mail':this.value;"/><br>
        <input type="submit" class="submit-2" id="btn-submit" value="OK">
      </form>
      <img class="close" src="../images/Cancel_for_pop.webp" onclick="popupClose();" value="&times;"/>
    </div>
  </div>
  <script src="../js/jquery/bootstrap.min.js"></script>

  <!-- Popup Button -->
    <header class="masthead clear">
      <div class="centered">
        <div class="site-branding">
          <h1 class="site-title"></h1>
          <h2 class="site-title_2">New day is a new challenge</h2>
          <h4 class="site-title_2_2">Today you can make...</h4>
        </div>
      </div>
    </header>

    <main class="main-area">
      <div class="centured">
        <section class="cards">
          <article class="card">
            <figure id="first_card" style="background-color:#919845;" onclick="getCardName(this.id); openCard();">
              <img src="..//images/Card.webp" />
              <p id="card_1"></p>
            </figure>
          </article>

          <article class="card">
            <figure id="second_card" style="background-color:#52535C;" onclick="getCardName(this.id); openCard();">
              <img src="..//images/Card.webp" />
              <p id="card_2"></p>
            </figure>
          </article>

          <article class="card">
            <figure id="third_card" style="background-color:#D0915A;" onclick="getCardName(this.id); openCard();">
              <img src="..//images/Card.webp" />
              <p id="card_3"></p>
            </figure>
          </article>

          <article class="card">
            <figure id="forth_card" style="background-color:#3E5E30;" onclick="getCardName(this.id); openCard();">
              <img src="..//images/Card.webp" />
              <p id="card_4"></p>
            </figure>
          </article>

          <article class="card">
            <figure id="fifth_card" style="background-color:#BBA231;" onclick="getCardName(this.id); openCard();">
              <img src="..//images/Card.webp" />
              <p id="card_5"></p>
            </figure>
          </article>

          <article class="card">
            <figure id="sixth_card" style="background-color:#57B5B4;" onclick="getCardName(this.id); openCard();">
              <img src="..//images/Card.webp" />
              <p id="card_6"></p>
            </figure>
          </article>

          <article class="card">
            <figure id="seventh_card" style="background-color:#58B05D;" onclick="getCardName(this.id); openCard();">
              <img src="..//images/Card.webp" />
              <p id="card_7"></p>
            </figure>
          </article>

          <article class="card">
            <figure id="eights_card" style="background-color:#D25475;" onclick="getCardName(this.id); openCard();">
              <img src="..//images/Card.webp" />
              <p id="card_8"></p>
            </figure>
          </article>

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
