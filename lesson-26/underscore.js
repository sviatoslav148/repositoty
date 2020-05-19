var auto = {
    brandName: 'BMB',
    model: 'X6',
    productionYear: 2018
};

var showData = function (data) {
    console.log(data);
}

var createAuto = _.create(auto.prototype, {brandName:'Opel', model:'Vectra', productionYear: 2014});
showData(createAuto);

var invertAuto = _.invert(auto);
showData(invertAuto);

var pickAuto = _.pick(auto, 'brandName', 'productionYear');
showData(pickAuto);

var omitAuto = _.omit(auto, 'model');
showData(omitAuto);







