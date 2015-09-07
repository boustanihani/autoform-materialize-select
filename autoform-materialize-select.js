// http://autoform-materialize-select.meteor.com

// https://github.com/djhi/meteor-autoform-materialize/issues/64
// https://github.com/Dogfalo/materialize/commit/cbcf4c8f6c229f42dba1dd3ccde1788d7f96ff80

if (Meteor.isClient) {

    var totalValues = 5;

    AutoForm.setDefaultTemplate('materialize');


    generateValues = function() {
        var allowedValues = [];
        for (var i = 1; i <= totalValues; i++) {
            allowedValues.push(Random.id([10]).toUpperCase());
        }
        Session.set('allowedValues', allowedValues);
    };
    generateValues();

    var index = 0;

    randomSelect = function() {
        index = (index + 1) % totalValues;
        console.log('index=' + index);
        Session.set('index', index);
    };

    Template.registerHelper('currentDoc', function() {
        return {
            mySelect: Session.get('allowedValues')[Session.get('index')]
        };
    });

    mySchema = new SimpleSchema({
        mySelect: {
            type: String,
            label: 'My values',
            allowedValues: Session.get('allowedValues'),
            autoform: {
                options: 'allowed'
            }
        }
    });

}