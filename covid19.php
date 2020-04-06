<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Paulo Dallastra</title>
  <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" href="index.css">
</head>

<body>
    <?php include "navbar.php"; ?>
    <div class="chart-main flex">
        <div class="chart flex row">
            <canvas id="myChart"   class="single-chart flex" style="max-width: 800px;" ></canvas>
            <canvas id="myChart2"  class="single-chart flex"  style="max-width: 800px;"></canvas>
        </div>
        <div class="chart flex row">
            <canvas id="myChart3"  class="single-chart flex"  style="max-width: 800px;"></canvas>
            <canvas id="myChart4"  class="single-chart flex"  style="max-width: 800px;"></canvas>
        </div>
        <div class="chart flex row">
            <canvas id="myChart5"  class="single-chart flex"  style="max-width: 800px;"></canvas>
            <canvas id="myChart6"  class="single-chart flex"  style="max-width: 800px;"></canvas>
        </div>
        <div class="chart flex row">
            <canvas id="myChart7"  class="single-chart flex"  style="max-width: 800px;"></canvas>
            <canvas id="myChart8"  class="single-chart flex"  style="max-width: 800px;"></canvas>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
    <script src="covid19.js"></script>
</body>
</html>
