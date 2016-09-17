/**
 * Created by pua on 9/16/2016.
 */

//Mock
angular.module('iAngelsTeaShop')
    .run(['$httpBackend','config', function($httpBackend,config) {
        if(!config.mock){
            return;
        }
        var type = {
                id:"id",
                name:"type-name",
                description:"type-description",
        }
        
        var images = [
            {imgSrc:"assets/images/tea.jpg"},
            {imgSrc:"assets/images/tea1.jpg"},
            {imgSrc:"assets/images/tea2.jpg"}
        ]
        var images1= [
            {imgSrc:"assets/images/tea1.jpg"},
            {imgSrc:"assets/images/tea1.jpg"},
            {imgSrc:"assets/images/tea2.jpg"}
        ]
        var images2 = [
            {imgSrc:"assets/images/tea2.jpg"},
            {imgSrc:"assets/images/tea1.jpg"},
            {imgSrc:"assets/images/tea2.jpg"}
        ]
        var images3 = [
            {imgSrc:"assets/images/tea3.jpg"},
            {imgSrc:"assets/images/tea1.jpg"},
            {imgSrc:"assets/images/tea2.jpg"}
        ]
        var images4 = [
            {imgSrc:"assets/images/tea4.jpg"},
            {imgSrc:"assets/images/tea1.jpg"},
            {imgSrc:"assets/images/tea2.jpg"}
        ]
        var images5 = [
            {imgSrc:"assets/images/tea5.jpg"},
            {imgSrc:"assets/images/tea1.jpg"},
            {imgSrc:"assets/images/tea2.jpg"}
        ]
    
    
        var tea = {
            id:"id",
            price:"10$",
            description:"description",
            type ,
            name:"tea",
            originCountry:"originCountry",
            steepingType:"steepingType",
            dosing:"dosing",
            waterTemperature:"waterTemperature",
            images:images
        };
        var tea1 = {
            id:"id",
            price:"10.5$",
            description:"description",
            type ,
            name:"tea1",
            originCountry:"originCountry",
            steepingType:"steepingType",
            dosing:"dosing",
            waterTemperature:"waterTemperature",
            images:images1
        };
        var tea2 = {
            id:"id",
            price:"15$",
            description:"description",
            type,
            name:"tea2",
            originCountry:"originCountry",
            steepingType:"steepingType",
            dosing:"dosing",
            waterTemperature:"waterTemperature",
            images:images2
        };
        var tea3 = {
            id:"id",
            price:"9$",
            description:"description",
            type,
            name:"tea3",
            originCountry:"originCountry",
            steepingType:"steepingType",
            dosing:"dosing",
            waterTemperature:"waterTemperature",
            images:images3
        };
    
        var tea4 = {
            id:"id",
            price:"66$",
            description:"description",
            type,
            name:"tea4",
            originCountry:"originCountry",
            steepingType:"steepingType",
            dosing:"dosing",
            waterTemperature:"waterTemperature",
            images:images4
        };
    
        var tea5 = {
            id:"id",
            price:"45$",
            description:"description",
            type,
            name:"tea5",
            originCountry:"originCountry",
            steepingType:"steepingType",
            dosing:"dosing",
            waterTemperature:"waterTemperature",
            images:images5
        };
    
    
        var teas = [tea,tea1,tea2,tea3,tea4,tea5];

        // returns the current list of phones
        $httpBackend.whenGET('/topteas').respond(teas);
        $httpBackend.whenGET('/allTeas').respond(teas);
    
        
        // Requests for templates are handled by the real
        // pass through all
        $httpBackend.whenGET(/[\s\S]*/).passThrough();
       
    
    }]);