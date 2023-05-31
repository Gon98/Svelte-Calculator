<script lang=ts>
    import CalculatorModel from "../model/CalculatorModel";
    import Button from "./Button.svelte";
    import Line from "./Line.svelte";
    import Screen from "./Screen.svelte";

    let calc = new CalculatorModel()
    const typedNumber =  (num: string) => calc = calc.typedNumber(num)
    const typedOperation =  (op: string) => calc = calc.typedOperation(op)
    const calculate = () => calc = calc.calculate()
    const typedDot =  () => calc = calc.typedDot()
    const clearScreen = () => calc = (calc.clearScreen())
    

</script>

<main> 
    <div class='calculator'>
        <Screen value={calc.value}/>
        <Line>
            <Button triple highlight text='AC' onClick={clearScreen}/>
            <Button operation  text='/' onClick={typedOperation}/>
        </Line>
        <Line>
            <Button text='7' onClick={typedNumber}/>
            <Button text='8' onClick={typedNumber}/>
            <Button text='9' onClick={typedNumber}/>
            <Button operation text='*' onClick={typedOperation}/>
        </Line>
        <Line>
            <Button text='4' onClick={typedNumber}/>
            <Button text='5' onClick={typedNumber}/>
            <Button text='6' onClick={typedNumber}/>
            <Button operation text='+' onClick={typedOperation}/>
        </Line>
        <Line>
            <Button text='1' onClick={typedNumber}/>
            <Button text='2' onClick={typedNumber}/>
            <Button text='3' onClick={typedNumber}/>
            <Button operation text='-' onClick={typedOperation}/>
        </Line>
        <Line>
            <Button double text='0' onClick={typedNumber}/>
            <Button text=',' onClick={typedDot}/>
            <Button highlight text='=' onClick={calculate} />
        </Line>
    </div>
</main>

<style>
    .calculator{
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius: 5px;
        background-color: var(--color-background);
        padding: 10px;
    }

</style>