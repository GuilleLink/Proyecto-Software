describe('Clicking on the login button ', function(){  
    var username, password, loginButton;

    beforeEach(function() {
        browser.get('/login');
        username = element(by.id('NombreUsuario'));
        password = element(by.id('PasswordLog'));
        loginButton = element(by.id('BotonLog'));
    });

    it('should validate the credentials for a successful login and display the My Dinners view', function() {
        username.sendKeys('Martha');
        password.sendKeys('12345');

        loginButton.click().then(function() {
            expect(browser.getLocationAbsUrl()).toMatch('/home');

            /*var dinners = element.all(by.repeater('dinner in vm.dinners'));
            expect(dinners.count()).toEqual(3);*/
        });
    })

    it('should display a popup for an unsuccessful login', function() {
        username.sendKeys('Martha');
        password.sendKeys('idontknow');

        loginButton.click().then(function() {
            expect(browser.getLocationAbsUrl()).toMatch('/login');

            /*var popup = element(by.css('.popup-container.popup-showing.active'));
            expect(popup.isDisplayed()).toBeTruthy();*/
        });
    });
});