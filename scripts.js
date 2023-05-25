function digitalWatch()
{
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
	setTimeout("digitalWatch()", 1000);
}

window.alert("Сайт написан с научной целью!");

const btnUp = {
	el: document.querySelector('.btn-up'),
	scrolling: false,
	show()
	{
		if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding'))
		{
			this.el.classList.remove('btn-up_hide');
			this.el.classList.add('btn-up_hiding');
			window.setTimeout(() =>
			{
				this.el.classList.remove('btn-up_hiding');
			}, 300);
		}
	},
	hide()
	{
		if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding'))
		{
			this.el.classList.add('btn-up_hiding');
			window.setTimeout(() =>
			{
				this.el.classList.add('btn-up_hide');
				this.el.classList.remove('btn-up_hiding');
			}, 300);
		}
	},
	addEventListener()
	{
		// при прокрутке окна (window)
		window.addEventListener('scroll', () =>
		{
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			if (this.scrolling && scrollY > 0)
			{
				return;
			}
			this.scrolling = false;
			// если пользователь прокрутил страницу более чем на 200px
			if (scrollY > 400)
			{
				// сделаем кнопку .btn-up видимой
				this.show();
			}
			else
			{
				// иначе скроем кнопку .btn-up
				this.hide();
			}
		});
		// при нажатии на кнопку .btn-up
		document.querySelector('.btn-up').onclick = () =>
		{
			this.scrolling = true;
			this.hide();
			// переместиться в верхнюю часть страницы
			window.scrollTo(
			{
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}

btnUp.addEventListener();

$(document).ready(function() {
    var delayInSeconds = 10;
    function openDialog() {
      $("#advertisement").dialog({
        modal: true,
        buttons: {
            "Оставить отзыв": function() {
              $(this).dialog("open");
              window.location.href = "https://google.com";
            },
            "Закрыть": function() {
                $(this).dialog("close");
          }
        }
      });
    }
    setTimeout(openDialog, delayInSeconds * 1000);
  });
