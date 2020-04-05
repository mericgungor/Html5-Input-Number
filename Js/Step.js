/*
Html5-Input-Number Step v1.0.0
*/
$(document).on('change', 'input[type=number][step]', function (e) {
    var _this = $(this);

    if (_this.attr("step") !== undefined && _this.attr("step") !== "") {
        var val = parseFloat(_this.val());
        var step = parseFloat(_this.attr('step'));

        if (step.toString().indexOf(".") > 0) {
            var l = step.toString().split(".")[1].length;
            var p = Math.pow(10, l);

            if (val.toString().indexOf(".") > 0 && val.toString().split(".")[1].length > l) {
                val = (Math.floor(val * p) / p).toFixed(l);
                _this.val(val);
                _this.trigger("change");
                e.preventDefault();
            }


            var m = mod(val, step);

            if (step > 0 && m != 0){
                _this.val(val - m);
            }
                

        } else {
            if (step > 0 && mod(val, step) != 0)
                _this.val(val - (val % step));
        }
    }
});

function mod(n, m) {
    var nLength = 0;
    var mLength = 0;

    if (n.toString().indexOf(".") > 0)
        nLength = n.toString().split(".")[1].length;

    if (m.toString().indexOf(".") > 0)
        mLength = m.toString().split(".")[1].length;

    var maxLength = Math.max(nLength, mLength);
    //console.log(maxLength);
 
    if (maxLength > 0) {
        var p = Math.pow(10, maxLength);

        n = Math.round(n * p);
        m = Math.round(m * p);
        //console.log(n);
        //console.log(m);

        //var mod1 = (((n % m) + m) % m).toFixed(maxLength) / p;
        var mod1 = (n % m);
        //console.log(mod1);

        return mod1;
    } else {
        return ((n % m) + m) % m;
    }


}