//Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
//area del triangulo = (b.h)/2
//area del rectangulo = base * altura
//area del circulo = radio * rasio * 3.14
//area del cuadrado= L*L
//area del rombo= D*d
//area del rombiode= D*d
//area del trapecio= H(B*b)/2
//area del poligono= p*a/2
let figure = prompt("escribre el nombre de la figura que deseas calcular el área (MAYÚSCULA:")

let base;
let heigth;
let radius;
// creamos el switch para la eleccion de la variable

switch(figure){
    case "RECTÁNGULO":
    case "Rectángulo":
    case "rectángulo":

    
        base = prompt("cuanto tiene de base")
        heigth = prompt("cuantos tiene de altura")
        console.log(`el área del rectangulo es ${base*heigth}`)
        break

        case "TRIANGULO":
            base = prompt("cuanto tiene de base")
            heigth = prompt("cuantos tiene de altura")
            console.log(`El área del triangulo es ${(base*heigth)/2}`)
            break
    case "CÍRCULO":
        radius = promt("cuánto tiene de radio")
        console.log(`el área del círculo es ${Math.PI * Math.pow(radius,2)}`)
        break

        default: console.log("la palabra que escribiste no es correcta")

        case "CUADRADO":
            side = promt("cuánto tiene el lado ")
            side = promt("cuánto tiene el lado")
            console.log(`el área del cuadrado es ${side*side} `)
            break
            
            case "ROMBO":
                diagonalMayor = promt("cuánto tiene el diagonal mayor ")
                diagonalMenor= promt("cuánto tiene el diagonal menor")
                console.log(`el área del rombo es ${diagonalMayor*diagonalMenor} `)
                break

                case "ROMBOIDE":
                    base = promt("cuánto tiene el base ")
                    heigth = promt("cuánto tiene de altura")
                    console.log(`el área del romboide es ${base*heigth} `)
                    break

                case "TRAPECIO":
                    heigth = promt("cuánto tiene de altura ")
                    baseMayor = promt("cuánto tiene de base mayor")
                    baseMenor = prompt("cuánto tiene de base menor")
                    console.log(`el área del trapecio es ${((baseMayor+baseMenor)*heigth)/2} `)
                    break

                    case "POLIGONO":
            perimeter = prompt("cuanto tiene de perimetro")
            apotema = prompt("cuantos tiene de apotema")
            console.log(`El área del poligono es ${(perimeter*apotema)/2}`)
            break

    }


