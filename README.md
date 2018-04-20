# PlayerCD

## Paso 5

Aqui podemos ver en acción cuando se marcan los componentes para el chequeo de los cambios.

- Agregamos la estrategia onPush para SongsListComponent
- Cambiamos los inputs de StatePlayerComponent para que reciba un sólo objeto Input
- Cambiamos el método play() en SongsListComponent
- Agregamos a la vista de SongsListComponent el objeto que vamos a enviar como input a StatePlayerComponent para verificar que el change detection se ejecuta en SongsListComponent

Si das play en alguna canción este evento disparado hará que la vista se marque par que angular haga el chequeo de los cambios.

Pero como estamos cambiando el Input que enviamos a StatePlayerComponent por atributo y no por referencia, el cambio de estado no ocurrirá en 
Pero como estamos cambiando el Input que enviamos a StatePlayerComponent por atributo y no por referencia, el cambio de estado no ocurrirá en  

Para Solucionar esto, en

SongsListComponent descomenta la linea 31 que cambia el dato por referencia y comenta las lineas 27 y 28


[Siguiente >>](https://github.com/ltciro/change_detection/tree/step6/)