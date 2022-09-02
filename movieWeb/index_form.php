<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./css/stely_form.css">
    <link rel="icon" type="image/x-icon" href="https://i.ibb.co/swHGtC0/logo1.png">
    <title>popup form</title>
</head>
    <div class="bg">
        <!---------------background_scroll(bgScroll.php------------------------------------------------>
        <?php include "../lib/bgScroll.php" ?>
        <div class="bg_macbook">
            <img src="https://i.ibb.co/PYr4rTt/ipd1.png">
            <div class="screen">
                <div class="wrap">
                    <header class="pop_header">
                        <div class="pop_header_wrap">
                            <div class="pop_header_title">
                                <a class="pop_header_back" href="back();">
                                    <img src="https://i.ibb.co/dB2ztsX/back.png" alt="back">
                                </a>
                                <h2>:title Name</h2>
                            </div>
                            <?php include "../movieWeb/lib/header_form.php" ?>
                            <!-- php include "../lib/header_form.php" -->
                        </div>
                    </header>
                    <section class="pop_section">
                            <?php include "../movieWeb/main.php" ?>
                        
                    </section>
                    <footer class="footer">
                        <?php include "../movieWeb/lib/footer.php" ?>
                    </footer>
                </div>
            </div>
        </div>

    </div>
</body>
<script src="./js/script_index_form.js"></script>
</html>