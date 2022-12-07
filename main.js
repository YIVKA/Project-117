function startClassification() { navigator.mediaDevices.getUserMedia({ audio: true}); classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady); }

function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;

      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+ " %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

      img = document.getElementById('animal1')
      img1 = document.getElementById('animal2')
      img2 = document.getElementById('animal3')

      if (results[0].label == "Clap") {
        img.src = 'dog.gif';
        img1.src = 'bird.png';
        img2.src = 'wolf.png';
      } else if (results[0].label == "Snap") {
        img.src = 'dog.png';
        img1.src = 'bird.gif';
        img2.src = 'wolf.png';
      }else{
        img.src = 'dog.png';
        img1.src = 'bird.png';
        img2.src = 'wolf.gif';
      }
    }
    }