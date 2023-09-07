<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href={title}>
  
  <title>Frontend Mentor | QR code component</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->

</head>
<body class="h-screen bg-gray-200 flex justify-center items-center flex-col">
<main class=" border rounded-lg h-[32rem] w-[20rem] bg-white p-3 text-center space-y-4">
    <div class=""><img src={img} alt="" class="rounded-lg"></div>
    <div class="text-xl px-4 font-bold font-outfit">Improve your front-end skils by building projects</div>
    <div class="text-md px-5 opacity-60 font-outfit ">Scan the QR code to visit Mentor and take your coding skills to the next level</div>
</main>
<footer class="mt-4">
    <div class="text-xs font-semibold text-center">Challenge by <a class="text-blue-700" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Septian Hadi P</a></div>
  </footer>
</body>
</html>

<script>
    import img from '$lib/images/image-qr-code.png';
    import title from '$lib/images/favicon-32x32.png';
    </script>