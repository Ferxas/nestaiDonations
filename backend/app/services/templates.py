def registration_template(name):
    return f"""
    <html>
    <body>
        <h1>¡Hola {name}</h1>
        <p>Queríamos darte la bienvenida a la familia de NestAi. ¡Es un honor que hayas decidido sumarte a esta comunidad! 🙌 Gracias a ti, hoy estamos un paso más cerca de hacer una diferencia en la vida de personas que realmente lo necesitan.</p>
        <p>En NestAi, creemos en el poder de las personas como tú para cambiar el mundo, un acto de generosidad a la vez. Prepárate, porque tenemos grandes cosas por delante, y nos emociona mucho tenerte a bordo.</p>
        <p>Estamos aquí para cualquier cosa que necesites. ¡Gracias por estar con nosotros y por confiar en esta misión! 💌</p>
        <p>Con tu bienvenida, puedes ver nuestro calendario anual, diseñado especialmente para ti. ¡Esperamos que te guste!</p>
        <img src=""/>
        <p>¡Consulta nuestro calendario anual a continuación!</p>
        <p>Con cariño,</p>
        <p>El equipo de NestAi</p>
    </html>
    </body>
    """
    
def donation_template(name, amount):
    return f"""
    <html>
    <body>
    <h1>¡Gracias, {name}!</h1>
    <p>Hemos recibido tu donación de <strong>{amount}€</strong>. Tu generosidad es el motor de NestAi y cada gesto cuenta. Nos emociona tenerte como parte de esta comunidad y esperamos seguir construyendo juntos un futuro más brillante para quienes más lo necesitan.</p>
    <p>Si en algún momento quieres saber más sobre cómo tu apoyo está transformando vidas, ¡no dudes en escribirnos! Estamos aquí para ti.😊</p>
    <p>Con todo nuestro cariño y gratitud, El equipo de NestAi💜</p>
    </body>
    </html>
    """


def donation_template(name, amount):
    return f"""
    <html>
    <body>
    <h1>¡Feliz aniversario con NestAi!🎉</h1>
    <p>¡Hola <strong>{ name }</strong>! 🎂.</p>
    <p>¡Hoy estamos celebrando un año desde que decidiste formar parte de NestAi! 🎈 Gracias a tu generosidad, muchas vidas han cambiado, y no podríamos estar más agradecidos. 
    ¡Eres increíble!</p>
    <p>Para agradecerte, nuestros amigos de <strong>Talkual Foods</strong>, una empresa dedicada a salvar frutas y verduras, quieren ayudarte a apoyar nuestra misión. 
    Usa el código <strong>TALKUAL2</strong> en tu próxima compra y recibirás <strong>2€ de descuento</strong>. Además, esos 2€ serán destinados a nuestra campaña de pobreza y exclusión social. 🌟</p>
    <p> ¡Gracias por seguir creyendo en nuestra misión! Esperamos seguir contando contigo para lograr más magia juntos. 💚</p>
    </body>
    </html>
    """