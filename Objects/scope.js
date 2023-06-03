// {
//     let a = 45;
//     console.log(a);
//     a = 34;
//     console.log(a);
// }
function min() {
    let a = 10;
    max();

    function max() {

        function inner() {
            console.log(a);
        }

        inner();
    }

}

min();