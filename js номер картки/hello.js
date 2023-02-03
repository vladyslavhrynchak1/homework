const yourCountry = prompt(
  "Напишіть вашу країну / Write your country (USA, EN, UK)"
);

if (yourCountry == "UK") {
  const yourAge = Number(prompt("Введіть ваш вік"));
  if (yourAge >= 18) {
    const yourNumberCard = prompt("Введіть ваш номер карточки");
    if (yourNumberCard.length == 19) {
      const yourName = prompt("Напишіть ваше ім'я");
      if (yourName == "") {
        alert("Поле порожнє");
      } else {
        alert(
          `Доброго дня ${yourName}, твій вік - ${yourAge}. Вам буде надіслано кошти на карту - ${yourNumberCard}. По місцю проживання  ${yourCountry}.`
        );
      }
    } else {
      alert("невірний номер карти");
    }
  } else {
    alert("Вибач, але ти неповнолітній");
  }
} else if (yourCountry == "USA" || yourCountry == "EN") {
  const yourAge = Number(prompt("Enter your age"));
  if (yourAge >= 18) {
    const yourNumberCard = prompt("Enter your card number");
    if (yourNumberCard.length == 19) {
      const yourName = prompt("Write your name");
      if (yourName == "") {
        alert("The field is empty");
      } else {
        alert(
            `Good afternoon ${yourName}, your age is - ${yourAge}. Funds will be sent to your card ${yourNumberCard}. By place of residence ${yourCountry}.`
        );
      }
    } else {
      alert("Invalid card Number");
    }
  } else {
    alert("Sorry, but you are underage");
  }
} else {
  alert(
    "Вибачте ми не працюємо у вашій країні / Sorry, we do not work in your country."
  );
}
