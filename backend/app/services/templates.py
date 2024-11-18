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
    <p>Hemos recibido tu donación de <strong>{amount}$</strong>. Tu generosidad ayuda</p>
    </body>
    </html>
    """