if (Meteor.isClient) {

    AutoForm.setDefaultTemplate('materialize');

    generateValues = function() {
        var allowedValues = [];
        for (var i = 1; i <= 5; i++) {
            allowedValues.push(Random.id([10]).toUpperCase());
        }
        Session.set('allowedValues', allowedValues);
        Session.set('currentValue', allowedValues[2]);
    };
    generateValues();

    Template.registerHelper('currentDoc', function() {
        return {
            mySelect: Session.get('currentValue')
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