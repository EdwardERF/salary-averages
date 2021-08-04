currentTheme = 'light';

// Light palette
lightPrimaryColor = '#FCF8EC';
lightSecondaryColor = '#D0E8F2';
lightTerciaryColor = '#79A3B1';
lightVariationColor = '#456268';

// Dark palette
darkPrimaryColor = '#283149';
darkSecondaryColor = '#404B69';
darkTerciaryColor = '#00818A';
darkVariationColor = '#DBEDF3';

function switchTheme() {
  if (currentTheme == 'light') {
    // dark code]
    document.querySelector("body").style.backgroundColor = darkSecondaryColor;
    document.querySelector("body").style.color = darkVariationColor;
    document.getElementById("footer").style.backgroundColor = darkTerciaryColor;
    document.getElementById("header").style.backgroundColor = darkTerciaryColor;
    document.getElementById("header").style.color = darkPrimaryColor;
    document.getElementById("professionName").style.borderColor = darkTerciaryColor;
    document.getElementById("professionName").style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    document.getElementById("professionSalary").style.borderColor = darkTerciaryColor;
    document.getElementById("professionSalary").style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    document.getElementById("getProfession").style.backgroundColor = darkTerciaryColor;
    document.getElementById("getProfession").style.color = darkPrimaryColor;
    document.getElementById("input-statistics").style.borderColor = darkTerciaryColor;
    document.getElementById("switch-img").src = "./img/dark-switch.png";

    currentTheme = 'dark';
  } else {
    // light code
    document.querySelector("body").style.backgroundColor = lightSecondaryColor;
    document.querySelector("body").style.color = lightVariationColor;
    document.getElementById("footer").style.backgroundColor = lightTerciaryColor;
    document.getElementById("header").style.backgroundColor = lightTerciaryColor;
    document.getElementById("header").style.color = lightPrimaryColor;
    document.getElementById("professionName").style.borderColor = lightTerciaryColor;
    document.getElementById("professionSalary").style.borderColor = lightTerciaryColor;
    document.getElementById("getProfession").style.backgroundColor = lightTerciaryColor;
    document.getElementById("getProfession").style.color = lightPrimaryColor;
    document.getElementById("input-statistics").style.borderColor = lightTerciaryColor;
    document.getElementById("switch-img").src = "./img/light-switch.png";

    currentTheme = 'light';
  }
}