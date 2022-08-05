<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/stely_index.css">
    <link rel="stylesheet" type="text/css" href="./css/stely_menu.css">
    <link rel="icon" type="image/x-icon" href="https://i.ibb.co/swHGtC0/logo1.png">
    <title>BAAB::CINEMA</title>
</head>
<body>

    <div class="bg">
        <div class="bgImg">
            <div class="bgImg_scroll">
                <div>
                    <div class="bgImg_scroll_t"></div>               
                </div>
                <div class="bgImg_scroll_m"></div>
                <div>
                    <div class="bgImg_scroll_b"></div>
                </div>
            </div>
        </div>
        <div class="bg_macbook">
            <img src="https://i.ibb.co/PYr4rTt/ipd1.png">
            <div class="screen">
                <div class="wrap">
                    <!---------------header------------------------------------------------>
                    <header class="header">
                        <!-----header _ 영역--------------------->
                        <div class="header_top">
                            <div class="header_top_left">
                                <a href="#">
                                    <img class="header_top_left_logo" src="https://i.ibb.co/swHGtC0/logo1.png" alt="BAaB logo">
                                    <img class="header_top_left_logotext" src="https://i.ibb.co/Y07w6Zr/logo-Text1.png" alt="BAaB">
                                </a>
                            </div>
                            <div class="header_top_right">
                                <a href="#"><img class="header_top_right_ticketing" src="https://i.ibb.co/54y0G5P/ticketing1.png" alt="ticketing1"></a>
                                <a href="#"><img class="header_top_left_cart" src="https://i.ibb.co/dDhFG6f/popcon1.png" alt="cart"></a>
                                <a href="#"><img class="menuBtn" src="https://i.ibb.co/PNB8tQt/menu.png" alt="menu"></a>
                            </div>
                        </div>
                        <!-----header 서브메뉴 영역--------------------->
                        <div class="header_submenu">
                            <ul class="header_submenu_list">
                                <li><a href="#">홈</a></li>
                                <li><a href="#">이벤트</a></li>
                                <li><a href="#">무비톡</a></li>
                                <li><a href="#">패스트오더</a></li>
                                <li><a href="#">@BaAB</a></li>
                            </ul>
                        </div>
                    </header>
                    <!---------------menu(nav)------------------------------------------------>
                    <nav class="menuSlide">
                        <?php include "../movieWeb/menu.php"?>
                    </nav>
                    <!---------------section------------------------------------------------>
                    <section class="section">
                        <div class="content" style="height: 1000px;">
                            
                        </div>
                    </section>
                    <!---------------footer------------------------------------------------>
                    <footer>
                    Footer
                    </footer>
                </div>
            </div>

        </div>

    </div>
</body>
<script src="./js/script_index.js"></script>
</html>