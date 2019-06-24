
Feature('CheckToggle');

Scenario('test something', (I) => {
    I.amOnPage('http://localhost:8100');
    I.click(
        locate('//html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-home/ion-header/ion-toolbar/ion-buttons/ion-menu-button')
    );
    I.waitForVisible(
        locate('ion-item').withAttr({ 'ng-reflect-router-link': '/list2' })
    )
    I.wait(1);
    I.click(
        locate('ion-item').withAttr({ 'ng-reflect-router-link': '/list2' })
    )
    // I.wait(1);
    I.see('list2')
    // I.wait(1);
    I.waitForVisible(
        locate('ion-toggle').withAttr({'aria-checked': 'false'})
    )
    I.click(
        locate('ion-toggle').withAttr({'aria-checked': 'false'})
    )
    I.waitForElement(
        locate('ion-toggle')
    )
    /* I.click(
        locate('ion-toggle')
    ) */
    I.wait(1);
    // pause();
    I.click(
        locate('ion-toggle').withAttr({'aria-checked': "true"})
    )
    pause();
});
