# Html5-Input-Number
Fix Html5 Input Number

## Step
Html5 ```<input type="number" />``` kullandığınızda **step** tanımlayabilirsiniz. Step tanımladığınız zaman, input değerini belirlenen step miktarı kadar artırıp azaltabilirsiniz.

```<input type="number" step="0.01" />``` tanımladığınızda input değeri 0.01 kadar artar veya azalır fakat 5.54568 gibi bir değer de girilebilir.

Bu *Html5 Input Number* plugini sayesinde step değerindeki basamak sayısına bakılır ve input değeri yuvarlanarak step basamak sayısına zorlanır.

## Min Max
Html5 ```<input type="number" />``` kullandığınızda **min** ve/veya **max**  tanımlayabilirsiniz. 
Min tanımladığı zaman, input değerine belirlenen min miktarından daha az yazılabilmektedir.
Max tanımladığı zaman, input değerine belirlenen max miktarından daha fazla yazılabilmektedir.

```<input type="number" min="0" />``` tanımladığınızda input değerine -1 yazılamamalıdır. fakat -1 gibi bir değer de girilebilir.

Bu *Html5 Input Number* plugini sayesinde min veya max değerine bakılır ve input değeri min veya max sayısına zorlanır.

## Gereksinimler
- JQuery
