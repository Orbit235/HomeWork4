
const validateX = (x) => {
    return x != "" && (Number(x) > validateX.min && Number(x) < validateX.max)
}
validateX.min = -4
validateX.max = 4

const validateY = (y) => {
    return y != "" && (Number(y) > validateY.min && Number(y) < validateY.max)
}
validateY.min = -3
validateY.max = 5

const validateR = (r) => {
    return r != "" && (Number(r) > validateR.min && Number(r) <= validateR.max)
}
validateR.min = -1
validateR.max = 4

// x, y, r - уже числа
const validateRectangle = (x, y, r) => {
    return (x >= 0 && x <= r / 2) && (0 <= y && y <= r)
}
// Я добавил стрелочную функцию, которая устанавливает область попадания для нижней правой части рисунка↓
const validateRectangle1 = (x, y, r) => {
    return (x >= 0 && x <= r) && (-r / 2 <= y && y <= 0)
}

// Я добавил стрелочную функцию, которая устанавливает область попадания для нижней левой части рисунка↓
const validateRectangle2 = (x, y, r) => {
    return (x >= -r / 2 && x <= 0) && (-r / 2 <= y && y <= 0)
}


$(function() {

    $("#first-form button").click(( event ) => {
        event.preventDefault()
        let values = $( "#first-form" ).serializeArray()
        let x = values[0]["value"]
        let y = values[1]["value"]
        let r = values[2]["value"]

        // Валидация координаты X
        if (validateX(x)) {
            console.log("X верный")
            $(".errorX").html("")
        } else {
            console.log("X не верный");
            $(".errorX").html("Х не входит в диапазон (-4; 4)")
        }

        if (validateY(y)) {
            console.log("Y верный")
            $(".errorY").html("")
        } else {
            console.log("Y не верный");
            // Добавил поле ошибки для Y
            $(".errorY").html("Y не входит в диапазон (-3; 5)")
        }

        if (validateR(r)) {
            console.log("R верный")            
        } else {
            console.log("R не верный");
        }

        // Конечный результат
        const validateResult = validateR(r) && validateY(y) && validateX(x)
        
        

        if (validateResult) {
            const hitResult = validateRectangle(Number(x), Number(y), Number(r))

            console.log(values);

            $(".result-table").append(`
            <tr>
                <th>${x}</th>
                <th>${y}</th>
                <th>${r}</th>
                <th>${hitResult}</th>
            </tr>
            `)
        }

          // Я добавил функцию, которая описывает факт попадания в область для нижней правой части рисунка↓
          const validateResult1 = validateR(r) && validateY(y) && validateX(x)
        if (validateResult1) {
            const hitResult1 = validateRectangle1(Number(x), Number(y), Number(r))

            console.log(values);

            $(".result-table1").append(`
            <tr>
                <th>${x}</th>
                <th>${y}</th>
                <th>${r}</th>
                <th>${hitResult1}</th>
            </tr>
            `)
        }
        // Я добавил функцию, которая описывает факт попадания в область для нижней левой части рисунка↓
        const validateResult2 = validateR(r) && validateY(y) && validateX(x)
        if (validateResult2) {
            const hitResult2 = validateRectangle2(Number(x), Number(y), Number(r))

            console.log(values);

            $(".result-table2").append(`
            <tr>
                <th>${x}</th>
                <th>${y}</th>
                <th>${r}</th>
                <th>${hitResult2}</th>
            </tr>
            `)
        }


    })


});




