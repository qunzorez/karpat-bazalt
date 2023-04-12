$(window).on('load', function() {
    setTimeout(function() {
	// отримати вибрану мову
	var selectedLang = 'en';

	// отримати вміст файлу локалізації для вибраної мови
	$.getJSON("/localization-" + localStorage.getItem('selectedLang') + ".json", function (data) {
		// замінити текст у меню з використанням перекладів
		$("[data-localize]").each(function () {
			var localizeKey = $(this).data("localize");
			$(this).html(data[localizeKey]);
		});
	});
        }, 500);
});

$(window).on('load', function() {
     setTimeout(function() {
	// Отримуємо значення з data атрибуту та міняємо тексти згідно з обраним значенням
	$('.language-switcher__link, .language-button').click(function (e) {
		selectedLang = $(this).attr("data-lang");
		localStorage.setItem("selectedLang", $(this).attr("data-lang"))
		location.reload();
	});

	// Відкриваємо/закриваємо список випадаючих елементів по кліку на кнопку
	$('.language-switcher__toggle').click(function () {
		$('.language-switcher__list').toggle();
	});
     },500);
});
