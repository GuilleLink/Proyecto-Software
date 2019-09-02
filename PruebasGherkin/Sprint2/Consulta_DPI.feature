Feature: Consulta de DPI en Secretaria

    Scenario: Se ingresa con el DPI de la persona valida

	Given: Se ingresa el DPI de la persona 

	When: Se verifica que el DPI cumple el requerimiento de estar registrado en la base de datos. 

	Then: La persona ingresará a la siguiente pantalla, y muestra informacion de la persona


    Scenario: Se ingresa un DPI invalido

	Given: Se ingresa el DPI de la persona

	When: Se verifica que los dos campos cumplen el requerimiento de estar registrados en la base de datos. 

	Then: Se muestra una alerta de que el DPI ingresado no se encuentra registrado, por lo cual no puede emitir su voto