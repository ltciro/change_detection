# PlayerCD

## Paso 4

Aqui podemos ver en acción el poder de la estrategia OnPush para mejorar el performance de nuestra app 

- Agregamos una cantidad muy grande de artistas 
- Agregamos un input con ngModel

Si abres la consola del navegador y tecleas algo en el input verás la demora en la respuesta

Para Solucionar esto, en

ArtistListComponent descamenta la linea 8 que agrega la estrategia Onpush para este componente y su hijo.


[Siguiente >>](https://github.com/ltciro/change_detection/tree/step5/)