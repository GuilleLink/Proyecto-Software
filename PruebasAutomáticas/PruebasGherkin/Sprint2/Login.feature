Feature: Acceder al login del Presidente de Mesa


	Scenario: Se ingresa con los 2 datos correctos.	

	Given: Dado que el usuario conoce su contraseña y su correo procede a ingresar.

	When: Se verifica que los dos campos cumplen el requerimiento de estar registrados en la base de datos. 

	Then: La persona ingresará a la siguiente pantalla.


	Scenario: Se ingresa con solo el correo de forma correcta.

	Given: El usuario procede a ingresar aunque no tenga conocimiento de la contraseña o la haya escrito de forma errónea

	When: Se verifica que los dos campos cumplen el requerimiento de estar registrados en la base de datos. 

	Then: Porque la contraseña no corresponde con el correo se devuelve una alerta mencionando que los datos son erróneos.


	Scenario: Se ingresa con solo la contraseña de forma correcta.

	Given: El usuario procede a ingresar aunque no tenga conocimiento del correo o lo haya escrito de forma errónea

	When: Se verifica que los dos campos cumplen el requerimiento de estar registrados en la base de datos. 

	Then: Porque el correo no se encuentra en la base de datos se devuelve una alerta mencionando que los datos son erróneos.


	Scenario: Se presiona el botón de ingresar sin mandar datos

	Given: El usuario presiona tal vez por erro el botón.

	When: Se verifica que los dos campos cumplen el requerimiento de estar registrados en la base de datos. 

	Then: Como se mandan los datos vacios no se encuentran en la base de datos por lo que se devuelve una alerta mencionando que los datos son erróneos.