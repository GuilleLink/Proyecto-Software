#
# Feature: Login_Secretaria
#
# Created with BDD Editor on: 14 November, 2019
#
# Please follow us at @bddeditor AND if you find this tool useful please share with friends and colleagues!
#

@Login_Secretaria 
Feature: Login_Secretaria
  As A Secretaria/o
  I want to Login
  So That will be all

  Scenario: Las contrasenas deberian estar ocultas
    Given Abriendo la aplicacion
    When El usuario aun no inicia sesion.
    And Coloca el cursor sobre el campo de contrasena
    Then El texto ingresado para la contrasena no se muestra, sino que permanece oculto. 

  Scenario: La contrasena no deberia guardarse
    Given Una instancia de la aplicacion de voto
    When La secretaria haga login. 
    And Luego presione el boton de logout
    Then Los valores que introdujo al iniciar sesion no se guardan

  Scenario: El usuario no deberia de guardarse
    Given Una instancia de la aplicacion de voto
    When La secretaria haga login. 
    And Luego presione el boton de logout
    Then El valor del usuario al ingresar a la app no se guarda
