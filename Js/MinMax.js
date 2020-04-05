/*
Html5-Input-Number MinMax v1.0.0
*/
$(document).on('keyup', 'input[type=number][min],input[type=number][max]', function () {
    var _this = $(this);
    if (_this.val() === "-")
        return;

    var val = parseFloat(_this.val());

    //Min
    if (_this.attr("min") !== undefined && _this.attr("min") !== "") {
        var min = parseFloat(_this.attr('min'));

        if (val < min)
            _this.val(min);
    }

    //Max
    if (_this.attr("max") !== undefined && _this.attr("max") !== "") {
        var max = parseFloat(_this.attr('max'));

        if (val > max)
            _this.val(max);
    }
});