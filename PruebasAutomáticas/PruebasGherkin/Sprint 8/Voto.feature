#
# Feature: Voto
#
# Created with BDD Editor on: 14 November, 2019
#
# Please follow us at @bddeditor AND if you find this tool useful please share with friends and colleagues!
#

@VotoElectronico 
Feature: Voto
  As A Votante
  I want  votar
  So That will be all

  Scenario: Verificar el voto por candidato
    Given Una instancia de la aplicaci?n de voto
    When Seleccione un candidato
    And Presione siguiente
    Then Una notificacion me pide confirmacion por seguridad, para votar por ese candidato. 

  Scenario: Enviar voto general
    Given Una instancia de votacion
    When He elegido todos mis candidatos
    And Deseo enviar mi voto
    Then Una pagina de confirmacion aparece para poder enviar el voto final, asegurandome que todos los candidatos esten ahi

  Scenario: Mostrar que la aplicacion es segur
    Given Una instancia de votacion
    When Se inicia la aplicacion, es decir no se ha empezado a votar
    Then Un banner ensena que la aplicacion es segura y que esta bien hecha.
