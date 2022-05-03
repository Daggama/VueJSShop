<template>
    <div class="footer display__flex">
        <div class="footer__container">
            <div class="footer__top display__flex">
                <div class="footer__map">
                    <div class="display__flex">
                        <div style="margin-right: 25px">
                            <h3>Контакты</h3>
                            <p>87081735186</p>
                            <p>buildpoint@gmail.com</p>
                        </div>
                        <div>
                            <h3>Адрес</h3>
                            <p>Кабанбай батыра 49а</p>
                        </div>
                    </div>
                </div>
                <div class="footer__contacts">
                    <div class="links">
                        <p>Личный кабинет</p>
                        <p>Моя корзина</p>
                    </div>             
                </div>
                <div class="footer__logo">
                    <h1>BuildPoint</h1>
                    <p>building materials store</p>                    
                </div>
            </div>
            <div class="footer__bottom display__flex">
                <div class="map">
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8298.527827755223!2d71.42373249138127!3d51.145100131268215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68d6552a1212b905!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQkNGB0YLQsNC90LA!5e0!3m2!1sru!2skz!4v1620669807979!5m2!1sru!2skz" width="360px" height="200px" style="border-radius:8px;border:none" allowfullscreen="" loading="lazy"></iframe>
                </div>      
                <div class="contacts">
                    <h3>Будьте в курсе новостей</h3>
                    <p>Подпишитесь на последние обновления и узнайте о новинках и специальных преложениях первыми</p>
                    <div style="margin__top:45px">
                        <input type="text" placeholder="Введите вашу почту">
                        <button>Отправить</button>
                    </div>
                </div>  

            </div>
        </div>
    </div> 
</template>

<script>

</script>


<style scoped>
.footer{
    width: 1170px;
    height: 434px;
    background-color: #2B2B2B;
}
.footer h3{
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 15px;
}
.footer p{
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
}
.footer__container{
    margin: 60px 40px;
    width: 100%;
}
.display__flex{
    display:flex;
}
/* footer-top */
.footer__top{
    justify-content: space-between;
}
.footer__contacts{
    width: 32%;
}
.footer__logo h1 {
  font-weight: 700;
  font-size: 22px;
  color: #e7e7e7;
}
.footer__logo p {
  font-weight: 400;
  font-size: 12px;
  color: #a5a5a5;
}

/* footer-top END */
/* footer-bottom */
.footer__bottom{
    margin-top: 20px;
}
.footer__bottom .contacts{
    width: 32%;
    margin-left: 102px;
}
.contacts input,button{
    color:#1F2126;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 8px;
}
/* footer-bottom END */
</style>