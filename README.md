# Cifrado César  (ItzelE)

## Introducción

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (offset) más adelante en el mismo alfabeto.

Cipher KIDS es una aplicación diseñada para ti y tus amigos que buscan tener un intercambio de información constante con la seguridad de solo ustedes podrán comprender el mensaje enviado. Con esta  app podrás cifrar y descifrar el mensaje que desees ¡Tal como lo hacían los romanos en tiempo antiguos! Solo tienes que elegir un número secreto (offset) para que al compartirlo con tus amigos solo ustedes puedan revelar el mensaje secreto.

## Diseño

### Diseño de interfaz

Primero se tuvo pensado dirigir el diseño a escritores de guiones en programas de televisión ya que constatemente ha existido la problemática de filtración de información del desarrollo de historias en el los programas de televisión. Esta opción se descartó por la dificultad de encontrar usuarios de ese ambito donde pudiera realizarse el testing.

Posteriormente se pensó en dirigir el diseño a trabajadores de grande corporativos que buscaran compartir información de alta seguridad (calves, futuros proyectos, planeación) entre el mismo corporativos o con corporativos aliados. Al realizar el testing del prototipo en papel dijeron que veían la uitilidad en la aplicación pero que no se veían usandola en su día a día por lo cual esta opción fue descartada.

Finalmente se optó por dirigir el diseño a un mercado infantil y juvenil,  con diferentes necesidades de comunicación como:
- Jugar al detective
- Compartir información potencialmente vergonzosa (intereses amorosos, secretos personales, chismes, etc.)
- Mensajería confidencial entre parejas

### Diseño de interefaz (UI) y experiencia de usuario (UX)

La aplicación esta diseñada para niñxs de entre 7 y 15 años que busquen una herramienta de mensajería que les permita intercambiar esta información entre ellos de manera secreta.

Se diseñó un contexto de aventura dentro la aplicación con la creación de un equipo de detectives (Cipher Kids) integrado por tres personajes (Key, Set y Cipher) que acompañaran al usuario a lo largo del proceso de encriptado o descifrado del mensaje con el propósito de volver la aplicación mucho más interactiva y personal, mejorando así la experiencia de usuario.

Al inicio se presenta el primer personaje Key, quien da la bienvenida y presenta al equipo "Cipher KIDS". En la segunda sección se presenta los dos personajes restantes, Set y Cipher, que ofrecen dos opciones al usuario: Descifrar y encriptar. Después de elegir alguna de las dos opciones se solicita que ingresen la información a descifrar/encriptar y el número secreto (desplazamiento/offset) que se va a ultilizar para el descifrado/encriptado.

Al presionar el botón para descifrar/encriptar aparece un mensaje que indica al usuario que su información se descifrado/encriptado y debajo de este mensaje la información requerida. Particularmente en la opción de encriptado se le recuerda al usuario compartir su número secreto (offset) con sus amigos a quienes enviará el mensaje en código. Posteriormente se ofrecen dos alternativas: regresar a la pantalla de opciones o salir de la aplicación.

En la pantalla de salida se agradece y se le hace saber al usuario que su retorno a interactuar con la aplicación es esperado. Incluso se ofrece la opción de regresar al inicio donde el personaje principal, Key, le dará la bienvenida nuevamente.

### Resolución de problemas del usuario

Al ingresar un número secreto y compartirlo solo con las personanas que el usuario elija puede enviar mensajes con la seguridad de que su información/mensaje será comprendido solamente por la persona que el usuario a elegido.

## Parte opcional o “Hacker edition”

Se realizó la programación para las siguiente funcionalidades:

* [✔] Cifra/descifra minúsculas
* [✔] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [✔] Permite usar un `offset` negativo.
* [✔] Modelo de negocio.

#### Modelo de negocio

Se ofrecerá la aplicación gratuita a través de una de las tiendas en línea (Google Play, App Store, etc) con la funcionalidad para descifrar y encriptar solo en mayúsculas y sin reconocer carácteres especiales. Se requerirá un pago de $14.50 MXN para añadir el resto de las funcionalidades como:
- Cifrar/descifrar minúsculas
- Cifrar/descifrar _otros_ caracteres (espacios, puntuación, `ñ`, `á`, etc.)
- Permitir usar un `offset` negativo.
- Vinculación con el servicio de mensajería WhatsApp. Mandar mensajes desde la apliclación Cipher KIDS al número de WhatsApp que el usuario elija.