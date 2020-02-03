$(document).ready(function () {
  $("#datumDolaska").datepicker({ minDate: new Date() });
  $("#datumOdlaska").datepicker({ minDate: new Date() });

  $("#galerija").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  initMap();

  $("#posalji").on("click", function () {
    var ime = $("#ime");
    var prezime = $("#prezime");
    var email = $("#email");
    var telefon = $("#telefon");
    var datumDolaska = $("#datumDolaska");
    var datumOdlaska = $("#datumOdlaska");
    var brojOsoba = $("#brojOsoba");

    var validno = true;

    validno = validirajElement(ime);
    validno = validirajElement(prezime);
    validno = validirajElement(brojOsoba);
    validno = validirajElement(datumDolaska);
    validno = validirajElement(datumOdlaska);
    validno = validirajElement(email);
    validno = validirajElement(telefon);

    if (validno) {
      $(".potvrda").removeClass("hidden");
      $(".kontakt-forma").addClass("hidden");
    }

  });
});

function validirajElement(element) {
  if (element.val().trim() === "") {
    element.parent().find(".validaciona-greska").removeClass("hidden");
    return false;
  } else {
    element.parent().find(".validaciona-greska").addClass("hidden");
    return true;
  }
}

function initMap() {
  var lokacija = { lat: 43.892249, lng: 19.563598 };
  var mapa = new google.maps.Map(
    document.getElementById('mapa'), { zoom: 16, center: lokacija });
  var marker = new google.maps.Marker({ position: lokacija, map: mapa });
}
