
 Selector de Color RGB

Esta aplicación web permite a los usuarios seleccionar y visualizar colores de manera interactiva. La interfaz está diseñada con Bootstrap para proporcionar un diseño limpio y moderno. A continuación, se detallan las características y la estructura del proyecto.

 Características

1. Controles de Color:
    -Controles Deslizantes: Tres controles deslizantes permiten ajustar los valores de Rojo, Verde y Azul (RGB). Cada cambio en estos controles actualiza el color en tiempo real en el recuadro de visualización.
    - Valor RGB Decimal: Puedes ingresar el valor RGB en formato decimal (por ejemplo, "255,0,0"). Los controles deslizantes y el color de la vista previa se actualizan automáticamente.
    - Selector de Color: Un selector de color HTML permite elegir un color directamente. Los valores de RGB en los controles deslizantes se actualizan automáticamente cuando se elige un color.

2. Visualización:
    - Cuadro de Color: Muestra el color seleccionado o ajustado en un recuadro de color grande.
    - Código Hexadecimal: Muestra el código hexadecimal del color actual en un campo de texto de solo lectura.

3. Diseño Moderno:
    - La aplicación utiliza Bootstrap para un diseño responsivo y moderno.
    - Estilos personalizados en CSS aseguran que la visualización del color y los controles sean claros y atractivos.

 Estructura del Proyecto

El proyecto está dividido en tres archivos principales:

1. `index.html`: Define la estructura de la aplicación web.
2. `styles.css`: Contiene los estilos personalizados para la aplicación.
3. `scripts.js`: Maneja la lógica para actualizar el color en función de las entradas del usuario.

`index.html`

Este archivo contiene el marcado HTML de la aplicación y utiliza Bootstrap para el diseño. Incluye controles deslizantes, un selector de color, y campos para ingresar valores RGB y hexadecimales.

 `styles.css`

Define el estilo de la aplicación, incluyendo el tamaño y el diseño del recuadro de color, así como la apariencia de los campos de entrada.

 `scripts.js`

Contiene la lógica para actualizar el recuadro de color y los valores en función de las entradas del usuario. Maneja eventos para los controles deslizantes, el campo de entrada RGB y el selector de color.
 Cómo Usar

1. Ajusta los controles deslizantes de Rojo, Verde y Azul para ver el color en el recuadro de color.
2. Ingresa valores RGB en formato decimal para actualizar el color y los controles deslizantes.
3. Utiliza el selector de color para elegir un color directamente, y los controles deslizantes se actualizarán automáticamente.# intro-webapp-color
