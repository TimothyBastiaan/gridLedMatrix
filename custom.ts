
//% weight=100 color=#0fbc11 icon=""
namespace grid {
    /**
     * TODO: custom library for led matrix max7219
     */
    //% block="led matrix max7219"
    //% weight=96 blockGap=1
    //% imageLiteral=1
    //% imageLiteralColumns=32
    //% imageLiteralRows=8
    export function ledMatrix (leds: string): void 
    {
        let ledImage = imageConverter(leds);
        let arrayString = "";
        let width = ledImage.width();
        let height = ledImage.height();
        let heightL = height-1;
        for(let i=0 ;i < width ; i ++)
        {   let row = "B"
            for (let j = 0; j < height; j++)
            {
                if (ledImage.pixelBrightness(i, heightL-j) == 255) {
                   row = row + "1";
                }
                else {
                    row = row + "0";
                }
            }
            row = row + ",";
            arrayString = arrayString + row;
        }
        let imageArray = max7219_matrix.getCustomCharacterArray(arrayString);
        max7219_matrix.displayCustomCharacter(imageArray, 0, false);
        basic.pause(50);
    }
}

//% shim=images::createImage
function imageConverter(leds: string): Image 
{
    let imageObject = <Image><any>leds;
    return imageObject;
}