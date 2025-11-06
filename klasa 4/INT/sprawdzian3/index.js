process.stdout.write('Podaj dlugosc prostokata: ');
process.stdin.once('data', (lenght) =>{
    process.stdout.write('Podaj szerokosc prostokata: ')

    process.stdin.once('data', (width) =>{
        lenght = parseFloat(lenght);
        width = parseFloat(width);

        if(lenght > 0 && width > 0){
            const area = lenght * width;
            const perimeter = 2 * (lenght + width);
         process.stdout.write(`Pole prostokata: ${area}`)
         process.stdout.write(`\nObwod Prostokata : ${perimeter}`)
        }else{
            process.stdout.write('Podano nie prawidlowe wartosci')
        }
        process.exit();
    })
})